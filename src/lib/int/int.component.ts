import { ViewChild, ContentChild, Component, OnInit, Input, forwardRef, ElementRef, Renderer }   from '@angular/core';
import {  ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR, NG_VALIDATORS  } from '@angular/forms';

const REGEX = /^\s*(\-|\+)?(\d+)\s*$/;

@Component({
    moduleId: module.id,
    selector: 'plex-int',
    templateUrl: 'int.html',
    // Las siguientes líneas permiten acceder al atributo formControlName/ngModel
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexIntComponent),
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
export class PlexIntComponent implements OnInit, ControlValueAccessor {
    private lastValue: any = null;
    private renderer: Renderer;
    private onChange = (_: any) => { };
    @ViewChild('ref') ref: ElementRef;
    @Input('auto-focus') autofocus: boolean;
    @Input() label: string;
    @ContentChild(NgControl) control: any;

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
        this.onChange = function (value) {
            if ((value == "") || REGEX.test(value)) {
                this.lastValue = value;
            }
            else {
                this.writeValue(this.lastValue);
                value = this.lastValue;
            }
            fn(((value == null) || (value == "")) ? null : Number.parseInt(value));
        };
    }
}
