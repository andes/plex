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
    template: ` <div class="form-group" [ngClass]="{'has-danger': (control.dirty || control.touched) && !control.valid }">
                    <!-- Label -->
                    <label *ngIf="label" class="form-control-label">{{label}}<span *ngIf="esOpcional" class="opcional"></span></label>
                    <!-- Simple text field -->
                    <div [hidden]="multiline" [ngClass]="{'input-group': prefix || suffix ||  prefixParent?.children.length > 0  }">

                    <span *ngIf="prefix" class="input-group-addon" [innerHTML]="prefix"></span>
                    <span #prefixParent [hidden]="prefixParent?.children.length === 0" class="input-group-addon"><ng-content selector="[prefix]"></ng-content></span>

                    <input #input type="{{password ? 'password' : 'text'}}" class="form-control" [placeholder]="placeholder" [disabled]="disabled"
                        [readonly]="readonly" (input)="onChange($event.target.value)" (change)="disabledEvent($event)" (focus)="onFocus()" (focusout)="onFocusout()">
                    </div>
                    <i *ngIf="!readonly && !multiline && !isEmpty" class="clear-icon mdi mdi-close-circle" (click)="clearInput()"></i>
                    <!-- Multiline -->
                    <textarea [hidden]="!multiline" #textarea class="form-control" [placeholder]="placeholder" [disabled]="disabled" [readonly]="readonly"
                    (input)="onChange($event.target.value)" (change)="disabledEvent($event)" ></textarea>
                    <!-- Validation -->
                    <plex-validation-messages *ngIf="(control.dirty || control.touched) && !control.valid" [control]="control"></plex-validation-messages>
                </div>`,
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
    @Output() focus = new EventEmitter();
    @Output() focusout = new EventEmitter();

    public onFocus () {
      this.focus.emit();
    }

    public onFocusout () {
      this.focusout.emit();
    }

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
