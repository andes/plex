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
    @ViewChild('ref') private ref: ElementRef;
    @ContentChild(NgControl) public control: any;

    // Propiedades
    @Input() autoFocus: boolean;
    @Input() label: string;
    @Input() placeholder: string;
    @Input() prefix: string;
    @Input() suffix: string;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() password: boolean;

    // Eventos
    @Output() change = new EventEmitter();

    // Funciones públicas
    public onChange = (_: any) => { };

    constructor(private renderer: Renderer) {
        this.placeholder = '';
        this.password = false;
    }

    // Inicialización
    ngOnInit() {
    }

    ngAfterViewInit() {
        if (this.autoFocus) {
            this.renderer.invokeElementMethod(this.ref.nativeElement, 'focus');
        }
    }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        this.renderer.setElementProperty(this.ref.nativeElement, 'value', typeof value === 'undefined' ? '' : value);
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {
    }
    registerOnChange(fn: any) {
        this.onChange = (value) => {
            value = value || null;
            fn(value);
            // jgabriel | 24/03/2017 | Esto es un por bug de Angular2 que a veces no actualiza la vista cuando cambia el modelo
            // this.change.emit({
            //   value: value
            // });
            setTimeout(() => {
                this.change.emit({
                    value: value
                });
            });
        };
    }
}
