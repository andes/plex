import { Component, Input, Output, ElementRef, EventEmitter, AfterViewInit, Self, Optional } from '@angular/core';
import { ControlValueAccessor, NgControl, } from '@angular/forms';
import { SelectEvent } from './select-event.interface';
import { hasRequiredValidator } from '../core/validator.functions';

// Importo las librerías
const Selectize = require('selectize/dist/js/standalone/selectize');

@Component({
    selector: 'plex-select',
    template: ` <div class="form-group" [ngClass]="{'has-danger': hasDanger() }">
                    <label *ngIf="label" class="form-control-label">{{ label }}<span *ngIf="esRequerido" class="requerido"></span></label>
                    <select *ngIf="!multiple" id="{{ uniqueId }}" (change)="onChange($event.target.value)"></select>
                    <select *ngIf="multiple" id="{{ uniqueId }}" multiple (change)="onChange($event.target.value)"></select>
                    <div *ngIf="multiple" class="search-icon-container">
                        <plex-icon size="sm" name="form-textbox" class="search-icon" [class.disabled]="control.disabled"></plex-icon>
                    </div>
                    <plex-validation-messages *ngIf="hasDanger()" [control]="control"></plex-validation-messages>
                </div>`,
})
export class PlexSelectComponent implements AfterViewInit, ControlValueAccessor {
    private value: any;
    private selectize: any;
    private hasStaticData = false;
    private _data: any[];
    private _readonly: boolean;
    private _disabled: boolean;

    public uniqueId = new Date().valueOf().toString();
    splitLabelFields: any;
    public get esRequerido(): boolean {
        return hasRequiredValidator(this.control as any);
    }

    public hasDanger() {
        return (this.control.dirty || this.control.touched) && !this.control.valid && !this.control.disabled;
    }

    // Propiedades
    @Input() label: string;
    @Input() placeholder: string;
    @Input() multiple: false;
    @Input() idField: string;
    @Input() labelField: string; // Puede ser un solo campo o una expresión tipo ('string' + campo + 'string' + campo + ...)
    @Input() extraFields: string[] = [];
    @Input() groupField: string;
    @Input() closeAfterSelect = false;

    @Input()
    set data(value: any[]) {
        if (this._data !== value) {
            this.hasStaticData = true;
            this._data = value;
            if (this.selectize) {
                const currentValue = this.value;
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
                this.selectize.lock();
            } else {
                this.selectize.unlock();
            }
        }
    }

    @Input()
    set disabled(value: boolean) {
        this._disabled = value;
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
    constructor(
        private element: ElementRef,
        @Self() @Optional() public control: NgControl,
    ) {
        if (this.control) {
            this.control.valueAccessor = this;
        }
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
                label: '<i class="adi adi-close-circle"></i>',
                title: 'Quitar esta opción',
                className: 'remove-button',
                append: true
            };

            const self = this;
            const html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" tooltip="' + options.title + '">' + options.label + '</a>';

            const append = (html_container, html_element) => {
                const pos = html_container.search(/(<\/[^>]+>\s*)$/);
                return html_container.substring(0, pos) + html_element + html_container.substring(pos);
            };

            self.setup = (() => {
                const original = self.setup;
                return (...args) => {
                    // override the item rendering method to add the button to each
                    if (options.append) {
                        const render_item = self.settings.render.item;
                        self.settings.render.item = (...params) => {
                            return append(render_item.apply(self, params), html);
                        };
                    }

                    original.apply(self, args);

                    // Mouse Events
                    self.$control.on('mousedown', '.' + options.className, (e) => {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        return false;
                    });
                    self.$control.on('click', '.' + options.className, (e) => {
                        if (!self.isLocked) {
                            if (self.settings.mode === 'single') {
                                self.clear();
                            } else {
                                const $item = jQuery(e.currentTarget).parent();
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
        const values = labelField.split('+');
        return filterLiterals ? values.filter(i => (i.indexOf('\'') < 0 || i.indexOf('\'') < 0)) : values;
    }

    /**
     * Rendera una opción en base a la expresión indicada en labelField
     */
    private renderOption(item: any, labelField: string): string {
        if (!item) {
            return '';
        }
        this.splitLabelFields = this.splitLabelField(labelField, false);

        let result = '';
        this.splitLabelFields.forEach(field => {
            result += `${this.renderField(field, item)} `;
        });

        return result;
    }

    private renderField(field: any, item: any) {
        let result = '';
        if (field.startsWith('\'')) {
            result += field.slice(1, field.length - 1) + ' ';
        } else {
            if (field.indexOf('.') < 0) {
                result += item[field] + ' ';
            } else {
                const prefix = field.substring(0, field.indexOf('.'));
                const suffix = field.slice(field.indexOf('.') + 1);
                result += this.renderOption(item[prefix], suffix) + ' ';
            }
        }
        return result.trim();
    }

    private renderExtraFields(item) {
        if (this.extraFields.length <= 0) {
            return '';
        }
        let extras = '';
        if (this.extraFields.length) {
            for (const i in this.extraFields) {
                extras += this.renderField(this.extraFields[i], item);
            }
        }
        return extras;
    }

    /**
     * Elimina todas las opciones del combo
     */
    removeOptions() {
        for (const value in this.selectize.options) {
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
        const $selectize = (jQuery('SELECT', this.element.nativeElement.children[0]) as any).selectize({
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
                option: (item, escape) => `<div class="d-flex justify-content-between">
                    <div class="option">${escape(this.renderOption(item, this.labelField))}</div>
                    <small>${this.renderExtraFields(item)}</small>
                </div>`,
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
                    query,
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

        if (this._disabled) {
            this.selectize.disable();
        } else {
            if (this._readonly) {
                this.selectize.lock();
            }
        }


        // Setea el valor inicial
        if (this.value) {
            const temp = { ...this.value };
            this.selectize.addOption(temp);
            this.writeValue(this.value);
        }
    }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        this.value = value;
        if (this.selectize) {
            // Convierte un objeto cualquiera a un string compatible con selectize
            const valueAsString = (v: any): string => {
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
            if (value) {
                const temp = Array.isArray(value) ? [...value] : { ...value };
                this.selectize.addOption(temp);
                this.remove$order(temp);
                this.selectize.setValue(val, true);
            } else {
                this.selectize.clear();
            }
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
                value
            });
        };
    }
}
