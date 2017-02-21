import {
    ViewChild, Component, OnInit, Input,
    Output, forwardRef, ElementRef, Renderer, EventEmitter, AfterViewInit, ContentChild
} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR, NgControl
} from '@angular/forms';

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
export class PlexTextComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    private renderer: Renderer;
    @ViewChild('ref') private ref: ElementRef;
    @ContentChild(NgControl) public control: any;

    // Propiedades
    @Input() autoFocus: boolean;
    @Input() label: string;
    @Input() placeholder: string;
    @Input() prefix: string;
    @Input() suffix: string;
    @Input() disabled: boolean = true;
    // Eventos
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
        ;
        this.onChange = (value) => {
            value = value || null;

            fn(value);
            this.change.emit({
                value: value
            });
        };
    }
}
