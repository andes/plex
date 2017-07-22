import {
    ViewChild, Component, OnInit, Input,
    Output, forwardRef, ElementRef, Renderer, EventEmitter, AfterViewInit, ContentChild
} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR, NgControl
} from '@angular/forms';
import { hasRequiredValidator } from '../core/validator.functions';

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
    public isEmpty = true;
    @ViewChild('input') private input: ElementRef;
    @ViewChild('textarea') private textarea: ElementRef;
    @ContentChild(NgControl) public control: any;
    public get esOpcional(): boolean {
        return hasRequiredValidator(this.control);
    }

    // Propiedades
    @Input() label: string;
    @Input() placeholder: string;
    @Input() prefix: string;
    @Input() suffix: string;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() password = false;
    @Input() multiline = false;
    @Input()
    set autoFocus(value: any) {
        // Cada vez que cambia el valor vuelve a setear el foco
        if (this.renderer) {
            let element = this.multiline ? this.textarea.nativeElement : this.input.nativeElement;
            this.renderer.invokeElementMethod(element, 'focus');
        }
    }

    // Eventos
    @Output() change = new EventEmitter();

    // Funciones públicas
    public onChange = (_: any) => { };

    public disabledEvent(event: Event) {
        event.stopImmediatePropagation();
        return false;
    }

    constructor(private renderer: Renderer) {
        this.placeholder = '';
        this.password = false;
    }

    // Inicialización
    ngOnInit() {
    }

    ngAfterViewInit() {
        if (this.autoFocus) {
            let element = this.multiline ? this.textarea.nativeElement : this.input.nativeElement;
            this.renderer.invokeElementMethod(element, 'focus');
        }
    }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        let element = this.multiline ? this.textarea.nativeElement : this.input.nativeElement;
        this.renderer.setElementProperty(element, 'value', typeof value === 'undefined' ? '' : value);
        if (this.multiline) {
            this.adjustTextArea()
        }
        // Check empty
        this.isEmpty = !(value && value.toString().trim());
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {
    }
    registerOnChange(fn: any) {
        this.onChange = (value) => {
            value = value || null;
            fn(value);
            // Check empty
            this.isEmpty = !(value && value.toString().trim());

            if (this.multiline) {
                this.adjustTextArea()
            }
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

    /**
     * Borra el contenido del input
     *
     * @memberof PlexTextComponent
     */
    clearInput() {
        debugger;
        if (!this.disabled && !this.isEmpty) {
            this.writeValue(null);
            this.onChange(null);
            this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
        }
    }

    /**
     * Ajusta el alto del textarea al contenido
     *
     * @memberof PlexTextComponent
     */
    adjustTextArea() {
        this.textarea.nativeElement.style.overflow = 'hidden';
        this.textarea.nativeElement.style.height = 'auto';
        this.textarea.nativeElement.style.height = this.textarea.nativeElement.scrollHeight + 'px';
    }
}
