import {
    ViewChild, ContentChild, Component, OnInit, Input, AfterViewInit,
    Output, EventEmitter, forwardRef, ElementRef, Renderer, OnChanges
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

const RegEx_Mobile = /^[1-3][0-9]{9}$/;
const RegEx_Numero = /^(\d)+$/;

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
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => PlexPhoneComponent),
            multi: true
        },
    ]
})
export class PlexPhoneComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    private lastValue: any = null;
    private renderer: Renderer;
    @ContentChild(NgControl) control: any;
    @ViewChild('ref') ref: ElementRef;

    // Propiedades
    @Input() autoFocus: boolean;
    @Input() label: string;
    @Input() prefix: string;
    @Input() suffix: string;
    @Input() readonly = false;
    @Input() disabled = false;
    @Input() placeholder: string;

    // Eventos
    @Output() valueChange = new EventEmitter();

    // Funciones públicas
    public onChange = (_: any) => { };

    // Validación
    validate(c: FormControl) {
        if (c.value && !RegEx_Mobile.test(c.value)) {
            return {
                format: {
                    given: c.value,
                }
            };
        } else {
            return null;
        }
    }

    constructor(renderer: Renderer) {
        this.renderer = renderer;
        this.placeholder = '';
    }

    // Inicialización
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.renderer.invokeElementMethod(this.ref.nativeElement, 'focus');
        }
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
            if ((value === '') || RegEx_Numero.test(value)) {
                this.lastValue = value;
            } else {
                this.writeValue(this.lastValue);
                value = this.lastValue;
            }
            // Emite los eventos
            let val = ((value === null) || (value === '')) ? null : parseInt(value, 10);
            fn(val);
            this.valueChange.emit({ value: val });
        };
    }
}
