import { ContentChild, Component, OnInit, Input, Output, forwardRef, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR, Validators, AbstractControl } from '@angular/forms';
import { SelectEvent } from './select-event.interface';
import { hasRequiredValidator } from '../core/validator.functions';

// Importo las librería
let Selectize = require('selectize/dist/js/standalone/selectize');

@Component({
    selector: 'plex-select',
    providers: [
        // Permite acceder al atributo formControlName/ngModel
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexSelectComponent),
            multi: true,
        }
    ],
    template: ` <div class="form-group" [ngClass]="{'has-danger': hasDanger() }">
                    <label *ngIf="label" class="form-control-label">{{label}}<span *ngIf="control.name && esOpcional" class="opcional"></span></label>
                    <select *ngIf="!multiple" id="{{uniqueId}}" (change)="onChange($event.target.value)"></select>
                    <select *ngIf="multiple" id="{{uniqueId}}" multiple (change)="onChange($event.target.value)"></select>
                    <plex-validation-messages *ngIf="hasDanger()" [control]="control"></plex-validation-messages>
                </div>`,
})
export class PlexSelectComponent implements AfterViewInit, ControlValueAccessor {
    private value: any;
    private selectize: any;
    private hasStaticData = false;
    private _data: any[];
    private _readonly: boolean;

    @ContentChild(NgControl) control: AbstractControl;
    public uniqueId = new Date().valueOf().toString();
    public get esOpcional(): boolean {
        return hasRequiredValidator(this.control);
    }

    public hasDanger() {
        return (this.control as any).name && (this.control.dirty || this.control.touched) && !this.control.valid;
    }

    // Propiedades
    @Input() label: string;
    @Input() placeholder: string;
    @Input() multiple: false;
    @Input() idField: string;
    @Input() labelField: string; // Puede ser un solo campo o una expresión tipo ('string' + campo + 'string' + campo + ...)
    @Input() groupField: string;
    @Input() closeAfterSelect = false;

    @Input()
    set data(value: any[]) {
        if (this._data !== value) {
            this.hasStaticData = true;
            this._data = value;
            if (this.selectize) {
                let currentValue = this.value;
                this.removeOptions();
                if (value) {
                    this.selectize.addOption(value);
                    value = this.remove$order(value);
                }
                this.writeValue(currentValue);
            }
        }
    }
    get data() {
        return this._data;
    }

    @Input()
    set readonly(value: boolean) {
        this._readonly = value;
        if (this.selectize) {
            if (value) {
                this.selectize.disable();
            } else {
                this.selectize.enable();
            }
        }
    }

    // Eventos
    @Output() getData = new EventEmitter<SelectEvent>();
    @Output() change = new EventEmitter();

    // Funciones públicas
    public onChange = (_: any) => { };

    // Constructor
    constructor(private element: ElementRef) {
        this.initRemoveButtonPlugin();
        this.placeholder = '';
        this.multiple = false;
        this.idField = 'id';
        this.labelField = 'nombre';
        this.groupField = 'grupo';
    }

    private initRemoveButtonPlugin() {
        // Basado en remove_button de selectize/dist/js/standalone/selectize
        Selectize.define('remove_button_plex', function (options) {
            options = {
                label: '<i class="mdi mdi-close-circle"></i>',
                title: 'Quitar esta opción',
                className: 'remove-button',
                append: true
            };

            let self = this;
            let html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + options.title + '">' + options.label + '</a>';

            let append = function (html_container, html_element) {
                let pos = html_container.search(/(<\/[^>]+>\s*)$/);
                return html_container.substring(0, pos) + html_element + html_container.substring(pos);
            };

            self.setup = (function () {
                let original = self.setup;
                return function () {
                    // override the item rendering method to add the button to each
                    if (options.append) {
                        let render_item = self.settings.render.item;
                        self.settings.render.item = function (data) {
                            return append(render_item.apply(self, arguments), html);
                        };
                    }

                    original.apply(self, arguments);

                    // Mouse Events
                    self.$control.on('mousedown', '.' + options.className, function (e) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        return false;
                    });
                    self.$control.on('click', '.' + options.className, function (e) {
                        if (!self.isLocked) {
                            if (self.settings.mode === 'single') {
                                self.clear();
                            } else {
                                let $item = jQuery(e.currentTarget).parent();
                                self.setActiveItem($item);
                                if (self.deleteSelection()) {
                                    self.setCaret(self.items.length);
                                }
                            }
                        }

                        e.preventDefault();
                        e.stopImmediatePropagation();
                        return false;
                    });
                };
            })();
        });
    }

    private splitLabelField(labelField: string, filterLiterals: boolean): string[] {
        let values = labelField.split('+');
        return filterLiterals ? values.filter(i => (i.indexOf('\'') < 0 || i.indexOf('\'') < 0)) : values;
    }

    /**
     * Rendera una opción en base a la expresión indicada en labelField
     */
    private renderOption(item: any, labelField: string): string {
        if (!item) {
            return '';
        }

        let result = '';
        let labelFields = this.splitLabelField(labelField, false);
        labelFields.forEach(field => {
            if (field.startsWith('\'')) {
                result += field.slice(1, field.length - 1) + ' ';
            } else {
                if (field.indexOf('.') < 0) {
                    result += item[field] + ' ';
                } else {
                    let prefix = field.substr(0, field.indexOf('.'));
                    let suffix = field.slice(field.indexOf('.') + 1);
                    result += this.renderOption(item[prefix], suffix) + ' ';
                }
            }
        });
        // Reemplaza comillas por vacío
        return result.trim();
    }

    /**
     * Elimina todas las opciones del combo
     */
    removeOptions() {
        for (let value in this.selectize.options) {
            this.selectize.removeOption(value, true);
        }
    }
    /**
     * Concatena las nuevas opciones con las existentes
     */
    joinOptions(data: any[]) {
        if (data) {
            if (!this.data) {
                this.data = data || [];
            } else {
                // Verifica que el item no exista
                data.forEach(i => {
                    if (!this.data.some(j => j[this.idField] === i[this.idField])) {
                        this.data.push(i);
                    }
                });
                // Ordena
                // this.data.sort((a, b) => a[this.idField].localeCompare(b[this.idField]));
            }
        }
    }


    // Inicialización
    ngAfterViewInit() {
        // Eliminar los espacios alrededor del +
        this.labelField = this.labelField.replace(/(\s)*\+/g, '+').replace(/\+(\s)*/g, '+');

        // Inicializa el plugin
        let $selectize = (jQuery('SELECT', this.element.nativeElement.children[0]) as any).selectize({
            plugins: ['remove_button_plex'],
            valueField: this.idField,
            labelField: this.labelField,
            placeholder: this.placeholder,
            searchField: this.splitLabelField(this.labelField, true),
            options: this.data,
            openOnFocus: this.hasStaticData,
            closeAfterSelect: this.closeAfterSelect,
            preload: !this.hasStaticData,
            // dropdownParent: 'body',
            render: {
                option: (item, escape) => '<div class=\'option\'>' + escape(this.renderOption(item, this.labelField)) + '</div>',
                item: (item, escape) => {
                    if (this.multiple) {
                        return '<div class=\'item\'>' + escape(this.renderOption(item, this.labelField)) + '</div>';
                    } else {
                        return '<div class=\'item\'>' + escape(this.renderOption(item, this.labelField)) + '</div>';
                    }
                },
            },
            load: this.hasStaticData ? null : (query: string, callback: any) => {
                // Esta función se ejecuta si preload = true o cuando el usuario escribe en el combo
                this.getData.emit({
                    query: query,
                    callback: (data) => {
                        this.joinOptions(data);
                        callback(this.data);
                        this.data = this.remove$order(this.data);
                    }
                });
            },
            onChange: (value) => {
                // Busca en la lista de items un valor que coincida con la clave
                if (this.multiple) {
                    let result = [];
                    for (let i = 0; i < this.data.length; i++) {
                        // value es siempre un string, por eso es necesario convertir el id
                        if (value.indexOf('' + this.data[i][this.idField]) >= 0) {
                            result = [...result, this.data[i]];
                        }
                    }
                    this.value = result.length ? result : null;
                    this.onChange(this.value);
                } else {
                    if (!value) {
                        this.value = null;
                        this.onChange(null);
                    } else {
                        for (let i = 0; i < this.data.length; i++) {
                            // value es siempre un string, por eso es necesario convertir el id
                            if ('' + this.data[i][this.idField] === value) {
                                this.value = this.data[i];
                                this.onChange(this.value);
                                return;
                            }
                        }
                    }
                }
            },
            onDropdownOpen: (value) => {
                // Se asegura que los items queden siempre visibles
                if (value[0].scrollIntoViewIfNeeded) {
                    value[0].scrollIntoViewIfNeeded(); // Chrome only
                } else {
                    value[0].scrollIntoView();
                }
            }
        });

        // Guarda el componente para futura referencia
        this.selectize = $selectize[0].selectize;

        // Setea el estado inicial
        if (this._readonly) {
            this.selectize.disable();
        } else {
            this.selectize.enable();
        }

        // Setea el valor inicial
        if (this.value) {
            this.selectize.addOption(this.value);
            this.writeValue(this.value);
        }
    }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        this.value = value;
        if (this.selectize) {
            // Convierte un objeto cualquiera a un string compatible con selectize
            let valueAsString = (v: any): string => {
                if (v === null) {
                    return null;
                } else
                    if (typeof v === 'object') {
                        return '' + v[this.idField];
                    } else {
                        return '' + v;
                    }
            };

            // Busca el id que corresponde al item
            let val;
            if (Array.isArray(value)) {
                val = [];
                for (let i = 0; i < value.length; i++) {
                    val = [...val, valueAsString(value[i])];
                }
            } else {
                val = valueAsString(value);
            }

            // Setea el valor
            this.selectize.setValue(val, true);
        }
    }

    /**
     * Elimina la propiedad $order que inyecta selectize
     */
    private remove$order(value: any) {
        if (value) {
            if (Array.isArray(value)) {
                value.forEach((i, index) => {
                    value[index] = this.remove$order(value[index]);
                });
            } else {
                if (typeof value === 'object') {
                    delete value.$order;
                }
            }
        }
        return value;
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {
    }
    registerOnChange(fn: any) {
      this.onChange = (value) => {
        value = this.remove$order(value);
        fn(value);
        this.change.emit({
            value: value
        });
    };
    }
}
