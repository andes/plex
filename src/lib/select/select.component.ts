import { ContentChild, Component, OnInit, Input, Output, forwardRef, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

// Importo las librerías de jQuery
let jQuery = require('jquery/dist/jquery'); // @jgabriel: No encontré una forma más elegante de incluir jQuery
require('selectize/dist/js/standalone/selectize');

@Component({
    selector: 'plex-select',
    templateUrl: 'select.html',
    providers: [
        // Permite acceder al atributo formControlName/ngModel
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexSelectComponent),
            multi: true,
        }
    ]
})
export class PlexSelectComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    private value: any;
    private selectize: any;
    private isEmpty: boolean = false;
    private labelFields: string[]; // Contiene los campos parseados desde labelField
    @ContentChild(NgControl) public control: any;

    // Propiedades
    @Input() autoFocus: boolean;
    @Input() label: string;
    @Input() placeholder: string;
    @Input() multiple: false;
    @Input() idField: string;
    @Input() labelField: string; // Puede ser un solo campo o una expresión tipo ('string' + campo + 'string' + campo + ...)
    @Input() groupField: string;
    @Input() data: any[];
    // Eventos
    @Output() getData = new EventEmitter<any>();
    @Output() change = new EventEmitter();

    // Funciones privadas
    private onChange = (_: any) => { };

    // Constructor
    constructor(private element: ElementRef) {
        this.placeholder = '';
        this.multiple = false;
        this.idField = 'id';
        this.labelField = 'nombre';
        this.groupField = 'grupo';
    }

    // Rendera una opción en base a la expresión indicada en labelField
    private renderOption(item): string {
        let result: string = this.labelField;
        this.labelFields.forEach(field => {
            result = result.replace(field, item[field]);
        });
        return result.replace(/('|'|\+)/g, '');
    }

    // Inicialización
    ngOnInit() { }
    ngAfterViewInit() {
        this.isEmpty = this.data && this.data.length ? false : true;

        // Parsea la expresión indicada en labelField
        if (this.labelField.indexOf('+') < 0) {
            this.labelFields = [this.labelField];
        } else {
            // Obtiene sólo los campos que componen la expresión
            this.labelField = this.labelField.replace(/(\s)*\+/g, '+').replace(/\+(\s)*/g, '+');
            this.labelFields = this.labelField.split('+').filter(i => (i.indexOf('\'') < 0 || i.indexOf('\'') < 0));
        }

        // Inicializa el plugin
        let $selectize = jQuery('SELECT', this.element.nativeElement.children[0]).selectize({
            plugins: ['remove_button'],
            valueField: this.idField,
            labelField: this.labelField,
            placeholder: this.placeholder,
            searchField: this.labelFields,
            options: this.data,
            render: {
                option: (item, escape) => '<div class=\'option\'>' + escape(this.renderOption(item)) + '</div>',
                item: (item, escape) => '<div class=\'item\'>' + escape(this.renderOption(item)) + '</div>',
            },
            load: (query: string, callback: Function) => {
                // Esta función se ejecuta cuando el usuario escribe en el elemento
                this.getData.emit({
                    query: query,
                    callback: (data) => {
                        this.data = data;
                        callback(data || []);
                    }
                });
            },
            onFocus: () => {
                // Si está vacío, carga los datos
                // if (this.isEmpty)
                this.selectize.load((callback: Function) => {
                    this.getData.emit({
                        callback: (data: any[]) => {
                            this.data = data;
                            this.isEmpty = false;
                            callback(data || []);
                        }
                    });
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
                    this.onChange(result.length ? result : null);
                } else {
                    for (let i = 0; i < this.data.length; i++) {
                        // value es siempre un string, por eso es necesario convertir el id F
                        if ('' + this.data[i][this.idField] === value) {
                            this.onChange(this.data[i]);
                            return;
                        }
                    }
                }
            }
        });

        // Guarda el componente para futura referencia
        this.selectize = $selectize[0].selectize;
        // Setea el valor inicial
        this.writeValue(this.value);
    }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        this.value = value;
        if (this.selectize) {
            // Convierte un objeto cualquiera a un string compatible con selectize
            let valueAsString = (val: any): string => {
                if (val === null) {
                    return null;
                } else
                    if (typeof val === 'object') {
                        return '' + val[this.idField];
                    } else {
                        return '' + val;
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

            // Si no tiene ninguna opción, carga el objeto como única opción
            if (value && ((typeof value === 'object') || Array.isArray(value)) && this.isEmpty) {
                if (Array.isArray(value)) {
                    this.data = value;
                } else {
                    this.data = [value];
                }
                this.selectize.addOption(value);
            }

            // Setea el valor
            this.selectize.setValue(val, true);
        }
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {
    }
    registerOnChange(fn: any) {
        this.onChange = (value) => {
            fn(value);
            this.change.emit({
                value: value
            });
        };
    }
}
