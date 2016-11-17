import { ViewChild, ContentChild, Component, OnInit, Input, Output, forwardRef, ElementRef, Renderer, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'plex-text',
    templateUrl: 'text.html',
    providers: [
        // Permite acceder al atributo formControlName/ngModel
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexTextComponent),
            multi: true,
        }
    ]
})
export class PlexTextComponent implements OnInit, ControlValueAccessor {
    private renderer: Renderer;
    private onChange = (_: any) => { };
    @ViewChild('ref') ref: ElementRef;
    @ContentChild(NgControl) control: any;

    // Propiedades
    @Input('auto-focus') autofocus: boolean;
    @Input('label') label: string;
    @Input('placeholder') placeholder: string;
    @Input('prefix') prefix: string;
    @Input('suffix') suffix: string;
    // Eventos
    @Output('change') valueChange = new EventEmitter();

    constructor(renderer: Renderer) {
        this.renderer = renderer;
        this.placeholder = "";
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
            value = value || null;
            
            fn(value);
            this.valueChange.emit({
                value: value
            })
        };
    }
}