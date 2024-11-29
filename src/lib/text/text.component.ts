import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, Renderer2, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { hasRequiredValidator } from '../core/validator.functions';
import { EditorConfig, BOLD_BUTTON, ITALIC_BUTTON, FONT_SIZE_SELECT, JUSTIFY_LEFT_BUTTON, JUSTIFY_CENTER_BUTTON, JUSTIFY_RIGHT_BUTTON, UNDERLINE_BUTTON } from 'ngx-simple-text-editor';

@Component({
    selector: 'plex-text',
    template: `
    <div class="form-group" [ngClass]="{'has-danger': hasDanger() }">

        <!-- Label -->
        <label *ngIf="label" class="form-control-label">
            {{label}}
            <span *ngIf="control.name && esRequerido" class="requerido"></span>
        </label>

        <!-- Simple text field -->
        <div [attr.aria-hidden]="multiline || html" [hidden]="multiline || html" [class.input-group]="prefix || suffix || prefixParent?.children.length > 0 || suffixParent?.children.length > 0">
            <span *ngIf="prefix" class="input-group-addon">
                <plex-icon type="default" size="md" [name]="prefix"></plex-icon>
            </span>
            <span #prefixParent [hidden]="prefixParent?.children.length === 0" class="input-group-addon">
                <ng-content select="[left]"></ng-content>
            </span>

            <input #input [attr.aria-label]="textLabel" [attr.aria-labelledby]="passwordLabel" [attr.aria-describedby]="ariaDescribedby.id" type="{{type}}" class="form-control form-control-{{size}}" [placeholder]="placeholder" [disabled]="disabled"
                [readonly]="readonly" (input)="onChange($event.target.value)" (change)="disabledEvent($event)" (focus)="onFocus()" (focusout)="onFocusout()">

            <plex-icon  *ngIf="!readonly && !multiline && !html && !isEmpty" size="sm" name="close-circle" class="clear-icon" (click)="clearInput()"></plex-icon>

            <span #suffixParent [hidden]="suffixParent?.children.length === 0" class="input-group-addon">
                <ng-content select="[right]"></ng-content>
            </span>
        </div>

        <!-- Multiline -->
        <textarea [attr.aria-label]="textLabel" [attr.aria-labelledby]="passwordLabel" [attr.aria-hidden]="!multiline || html" [hidden]="!multiline || html" #textarea class="form-control" [placeholder]="placeholder" [rows]="rows" [disabled]="disabled" [readonly]="readonly"
        (input)="onChange($event.target.value)" (change)="disabledEvent($event)" (focus)="onFocus()" (focusout)="onFocusout()">
        </textarea>

        <!-- HTML Editor -->
        <st-editor #htmlEditor class="text-editor" *ngIf="html" [config]="config" [(ngModel)]="richText" (ngModelChange)="onChange($event)"></st-editor>

        <!-- Validación / Descripción ARIA -->
        <plex-validation-messages [mensaje]="mensaje" id="{{ ariaDescribedby.id }}" *ngIf="hasDanger()" [control]="control"></plex-validation-messages>
    </div>
    `
})
export class PlexTextComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    richText = '';

    config: EditorConfig = {
        buttons: [
            { ...BOLD_BUTTON, title: 'Negrita', icon: 'adi adi-Bold' },
            { ...ITALIC_BUTTON, title: 'Itálica', icon: 'adi adi-Italic' },
            { ...FONT_SIZE_SELECT, title: 'Tamaño' },
            { ...JUSTIFY_LEFT_BUTTON, title: 'Alinear a Izquierda', icon: 'adi adi-Bandera-izquierda' },
            { ...JUSTIFY_CENTER_BUTTON, title: 'Centrar', icon: 'adi adi-Bandera-centro' },
            { ...JUSTIFY_RIGHT_BUTTON, title: 'Alinear a Derecha', icon: 'adi adi-Bandera-derecha' },
            { ...UNDERLINE_BUTTON, title: 'Subrayar', icon: 'adi adi-Underline' }]
    };

    // Public
    public isEmpty = true;

    @ViewChild('input', { static: true }) private input: ElementRef;
    @ViewChild('textarea', { static: true }) private textarea: ElementRef;
    @ViewChild('htmlEditor', { static: true }) private htmlEditor: ElementRef;

    public get esRequerido(): boolean {
        return hasRequiredValidator(this.control as any);
    }

    // Propiedades
    @Input() type: 'text' | 'password' | 'email' = 'text';
    @Input() label: string;
    @Input() ariaLabel: string;
    @Input() ariaDescribedby: any = { id: `label${Math.floor(Math.random() * 100000)}` };
    @Input() mensaje: string;
    @Input() size: 'sm' | 'md' | 'lg' = 'md';
    @Input() placeholder: string;
    @Input() prefix: string;
    @Input() suffix: string;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() multiline = false;
    @Input() rows: number;
    @Input() html = false;
    @Input() debounce = 0;
    @Input() qlToolbar: PlexTextToolBar[];

    @Input()
    set password(value) {
        if (value) {
            this.type = 'password';
        }
    }

    @Input()
    set height(value: number | string) { }

    @Input()
    set autoFocus(value: any) {
        // Cada vez que cambia el valor vuelve a setear el foco
        if (this.renderer) {
            const element = this.multiline ? this.textarea.nativeElement : this.input.nativeElement;
            element.focus();
        }
    }

    @Input() customValidation;

    // Eventos
    @Output() change = new EventEmitter();
    @Output() focus = new EventEmitter();
    @Output() focusout = new EventEmitter();
    @Output() typing = new EventEmitter();

    public onFocus() {
        this.focus.emit();
    }

    public onFocusout() {
        this.focusout.emit();
    }

    // Funciones públicas
    public onChange = (_: any) => { };

    public disabledEvent(event: Event) {
        event.stopImmediatePropagation();
        return false;
    }

    private changeTimeout = null;

    public validateFn = (c: FormControl) => { };

    public validate(c: FormControl) {
        if (c.value === null || c.value === undefined || c.value.toString().trim() === '') {
            return null;
        }

        const isValid = this.customValidation(c.value);

        return isValid ? null : { customValidation: true };
    }

    constructor(
        private renderer: Renderer2,
        @Self() @Optional() public control: NgControl,
    ) {
        if (this.control) {
            this.control.valueAccessor = this;
        }
        this.placeholder = '';
        this.password = false;
    }

    // Inicialización
    ngOnInit() {
        if (this.type === 'password') {
            this.mensaje = 'Ingrese caracteres alfanuméricos, sin espacios.';
        }
    }

    ngAfterViewInit() {
        if (this.autoFocus) {
            const element = this.multiline ? this.textarea.nativeElement : this.input.nativeElement;
            element.focus();
        }
    }
    // Actualización Modelo -> Vista
    writeValue(value: any) {
        const element = this.multiline ? this.textarea.nativeElement : this.input.nativeElement;
        this.renderer.setProperty(element, 'value', typeof value === 'undefined' ? '' : value);
        if (this.multiline) {
            this.adjustTextArea();
        }

        if (this.html) {
            this.richText = value;
        }

        // Check empty
        this.isEmpty = !(value && value.toString().trim());
    }

    public hasDanger() {
        return (this.control as any).name && (this.control.dirty || this.control.touched) && !this.control.valid;
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {
    }

    registerOnChange(fn: any) {
        this.onChange = (value) => {
            value = value || null;

            if (this.customValidation) {
                if (this.control && this.control.control) {
                    this.control.control.setValidators(this.validate.bind(this));
                    this.control.control.updateValueAndValidity({ emitEvent: false });
                }
            }
            fn(value);
            // Check empty
            this.isEmpty = !(value && value.toString().trim());

            if (this.multiline) {
                this.adjustTextArea();
            }
            if (this.changeTimeout) {
                clearTimeout(this.changeTimeout);
            }
            this.changeTimeout = setTimeout(() => {
                this.change.emit({
                    value
                });
            }, this.debounce);
            this.typing.emit();
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
            this.input.nativeElement.focus();
        }
    }

    /**
     * Ajusta el alto del textarea al contenido
     *
     * @memberof PlexTextComponent
     */
    adjustTextArea() {
        this.textarea.nativeElement.style.overflow = 'auto';
        this.textarea.nativeElement.style.height = (this.rows) ? this.rows + 'em' : '4em';
    }

    get textLabel() {
        // ARIA no permite aria-label en passwords (sólo aria-labelledby)
        if (this.type !== 'password') {
            return this.ariaLabel ? this.ariaLabel : this.label;
        } else {
            return null;
        }
    }

    get passwordLabel() {
        return this.type === 'password' ? this.ariaDescribedby.id : null;
    }

}

export interface PlexTextToolBar {
    name: string;
    icon?: string;
    handler: () => void;
}
