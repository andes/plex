import { ViewChild, ContentChild, Component, OnInit, Input, Output, forwardRef, ElementRef, Renderer, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
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
export class PlexSelectComponent implements OnInit {
    private value: any;
    private onChange = (_: any) => { };
    private selectize: any;
    @ContentChild(NgControl) control: any;

    // Input properties
    @Input('auto-focus') autofocus: boolean;
    @Input() label: string;
    @Input() placeholder: string;
    @Input() multiple: false;
    @Input('id-field') idField: string;
    @Input('label-field') labelField: string;
    @Input('group-field') groupField: string;
    @Input() data: any[];
    @Output('get-data') onGetData = new EventEmitter<any>();

    constructor(private element: ElementRef, private renderer: Renderer) {
        this.placeholder = "";
        this.multiple = false;
        this.idField = "id";
        this.labelField = "nombre";
        this.groupField = "grupo";
    }

    // Inicialización
    ngOnInit() { }
    ngAfterViewInit() {
        let self = this;
        let $selectize = jQuery('SELECT', this.element.nativeElement.children[0]).selectize({
            plugins: ['remove_button'],
            valueField: this.idField,
            labelField: this.labelField,
            placeholder: this.placeholder,
            searchField: [this.labelField],
            options: this.data,
            load: function (query: string, callback: Function) {
                // Esta función se ejecuta cuando el usuario escribe en el elemento
                self.onGetData.emit({
                    query: query,
                    callback: function (data) {
                        self.data = data;
                        callback(data || []);
                    }
                });
            },
            onFocus: function () {
                // Carga los items sólo si no tiene ningún dato
                if (!self.data || !self.data.length)
                    self.selectize.load(function (callback: Function) {
                        self.onGetData.emit({
                            callback: function (data: any[]) {
                                self.data = data;
                                callback(data || []);
                            }
                        });
                    });
            },
            onChange: function (value) {
                // Busca en la lista de items un valor que coincida con la clave
                if (self.multiple) {
                    let result = [];
                    for (let i = 0; i < self.data.length; i++) {
                        if (value.indexOf("" + self.data[i][self.idField]) >= 0) { // value es siempre un string, por eso es necesario convertir el id
                            result = [...result, self.data[i]];
                        }
                    }
                    self.onChange(result.length ? result : null);
                }
                else {
                    for (let i = 0; i < self.data.length; i++) {
                        if ("" + self.data[i][self.idField] == value) { // value es siempre un string, por eso es necesario convertir el id
                            self.onChange(self.data[i]);
                            return;
                        }
                    }
                    self.onChange(null);
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
        let self = this;
        self.value = value;
        if (self.selectize) {
            // Convierte un objeto cualquiera a un string compatible con selectize
            var valueAsString = function (val: any): string {
                if (val == null)
                    return null;
                else
                    if (typeof val == "object")
                        return "" + val[self.idField];
                    else
                        return "" + val;
            }

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
            if (value && ((typeof value == "object") || Array.isArray(value))) {
                if (!self.data || !self.data.length) {
                    if (Array.isArray(value))
                        self.data = value;
                    else
                        self.data = [value];
                    self.selectize.addOption(value);
                }
            }

            // Setea el valor
            self.selectize.setValue(val, true);
        }
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {
    }
    registerOnChange(fn: any) {
        var self = this;
        this.onChange = function (value) {
            value = value == '' ? null : value;
            self.value = value;
            fn(value);
        };
    }
}