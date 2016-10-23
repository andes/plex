import { ViewChild, ContentChild, Component, OnInit, Input, forwardRef, ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

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
    private onChange = (_: any) => { };
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
        $(this.element.nativeElement.children[0]).selectize({
            valueField: this.idField,
            labelField: this.labelField,
            placeholder: this.placeholder,
            options: this.data,
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
    }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        let self = this;
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
        
        this.element.nativeElement.children[0].selectize.setValue(val, true);
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {
    }
    registerOnChange(fn: any) {
        this.onChange = function (value) {
            fn(value == '' ? null : value);
        };
    }
}