import { ViewChild, ContentChild, Component, OnInit, Input, Output, EventEmitter, forwardRef, ElementRef, Renderer }   from '@angular/core';
import {  ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR, NG_VALIDATORS  } from '@angular/forms';

const REGEX = /^\s*(\-)?(\d*)\s*$/;

@Component({
    selector: 'plex-phone',
    templateUrl: 'phone.html',
    // Las siguientes líneas permiten acceder al atributo formControlName/ngModel
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexPhoneComponent),
            multi: true
        },
        // Implementa un validador
        {
            provide: NG_VALIDATORS,
            useValue: (c: FormControl) => {
                if ((c.value == null) || (c.value == "") || REGEX.test(c.value))
                    return null;
                else
                    return {
                        format: {
                            given: c.value,
                        }
                    }
            },
            multi: true
        }
    ]
})
export class PlexPhoneComponent implements OnInit, ControlValueAccessor {
    private lastValue: any = null;
    private renderer: Renderer;
    private onChange = (_: any) => { };
    @ContentChild(NgControl) control: any;
    @ViewChild('ref') ref: ElementRef;

    // Propiedades
    @Input('auto-focus') autofocus: boolean;
    @Input('label') label: string;
    @Input('prefix') prefix: string;
    @Input('suffix') suffix: string;
    // Eventos
    @Output('change') valueChange = new EventEmitter();

    constructor(renderer: Renderer) {
        this.renderer = renderer;
    }

    // Inicialización
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.autofocus)
            this.renderer.invokeElementMethod(this.ref.nativeElement, 'focus');        
    }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        this.renderer.setElementProperty(this.ref.nativeElement, 'value', value);
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {
    }
    registerOnChange(fn: any) {
        this.onChange = (value) => {
            // Estas líneas evitan que se muestren caracteres no permitidos en el input
            if ((value == "") || REGEX.test(value)) {
                this.lastValue = value;
            }
            else {
                this.writeValue(this.lastValue);
                value = this.lastValue;
            }

            // Emite los eventos
            let val = ((value == null) || (value == "")) ? null : Number.parseInt(value);
            fn(val);
            this.valueChange.emit({
                value: val
            })
        };
    }
}
