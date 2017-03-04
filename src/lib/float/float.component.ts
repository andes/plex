import {
    ViewChild, ContentChild, Component, OnInit,
    AfterViewInit, Input, Output, EventEmitter, forwardRef, ElementRef, Renderer
} from '@angular/core';
import {
    ControlValueAccessor, FormControl,
    NgControl, NG_VALUE_ACCESSOR, NG_VALIDATORS
} from '@angular/forms';

const REGEX = /^\s*(\-)?(\d*|(\d*(\.\d*)))\s*$/;

@Component({
    selector: 'plex-float',
    templateUrl: 'float.html',
    // Las siguientes líneas permiten acceder al atributo formControlName/ngModel
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexFloatComponent),
            multi: true
        },
        // Implementa un validador
        {
            provide: NG_VALIDATORS,
            useValue: (c: FormControl) => {
                let value = c.value;
                if (value) {
                    value = ('' + value).replace(',', '.');
                }
                if ((value == null) || (value === '') || REGEX.test(value)) {
                    return null;
                } else {
                    return {
                        format: {
                            given: value,
                        }
                    };
                }
            },
            multi: true
        }
    ]
})
export class PlexFloatComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    private lastValue: any = null;
    private renderer: Renderer;
    @ViewChild('ref') private ref: ElementRef;
    @ContentChild(NgControl) public control: any;

    // Propiedades
    @Input() autoFocus: boolean;
    @Input() disabled: boolean;
    @Input() label: string;
    @Input() prefix: string;
    @Input() suffix: string;
    @Input() placeholder: string;
    @Output() change = new EventEmitter();

    // Funciones privadas
    private onChange = (_: any) => { };

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
            if ((value === '') || REGEX.test(value)) {
                this.lastValue = value;
            } else {
                this.writeValue(this.lastValue);
                value = this.lastValue;
            }

            // Emite los eventos
            let val = ((value == null) || (value === '')) ? null : Number.parseFloat(value);
            fn(val);
            this.change.emit({
                value: val
            });
        };
    }
}
