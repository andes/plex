import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Optional, Output, Renderer2, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, NgControl } from '@angular/forms';
import { BOLD_BUTTON, EditorConfig, FONT_SIZE_SELECT, ITALIC_BUTTON, JUSTIFY_CENTER_BUTTON, JUSTIFY_LEFT_BUTTON, LINK_INPUT, UNLINK_BUTTON, JUSTIFY_RIGHT_BUTTON, UNDERLINE_BUTTON, UNORDERED_LIST_BUTTON } from 'ngx-simple-text-editor';
import { hasRequiredValidator } from '../core/validator.functions';

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
        <div #htmlEditor>
            <st-editor class="text-editor" *ngIf="html" [config]="config" [(ngModel)]="richText" (ngModelChange)="onChange($event)"></st-editor>
        </div>

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
            { ...UNORDERED_LIST_BUTTON, title: 'Listado', icon: 'adi adi-listado' },
            { ...UNDERLINE_BUTTON, title: 'Subrayar', icon: 'adi adi-Underline' },
            { ...LINK_INPUT, title: "Ingresar vínculo", icon: 'adi adi-link-variant', label: 'Ingresar vínculo', text: 'Confirmar' },
            { ...UNLINK_BUTTON, title: 'Quitar Vinculo', icon: 'adi adi-link-variant-off' },
        ]
    };

    @ViewChild('input', { static: true }) private input: ElementRef;
    @ViewChild('textarea', { static: true }) private textarea: ElementRef;
    @ViewChild('htmlEditor', { static: false }) private htmlEditor: ElementRef;

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
    @Input() customValidation;

    @Input()
    set password(value) {
        if (value) {
            this.type = 'password';
        }
    }

    @Input()
    set height(value: number | string) { }

    @Input()
    set autoFocus(_) {
        // Cada vez que cambia el valor vuelve a setear el foco
        if (this.renderer) {
            const element = this.multiline ? this.textarea.nativeElement : this.input.nativeElement;
            element.focus();
        }
    }

    @Output() change = new EventEmitter();
    @Output() focus = new EventEmitter();
    @Output() focusout = new EventEmitter();
    @Output() typing = new EventEmitter();

    public isEmpty = true;

    public get esRequerido(): boolean {
        return hasRequiredValidator(this.control as any);
    }

    public onFocus() {
        this.focus.emit();
    }

    public onFocusout() {
        this.focusout.emit();
    }

    public onChange = (_: any) => { };

    public disabledEvent(event: Event) {
        event.stopImmediatePropagation();
        return false;
    }

    public validateFn = (c: UntypedFormControl) => { };

    public validate(c: UntypedFormControl) {
        if (c.value === null || c.value === undefined || c.value.toString().trim() === '') {
            return null;
        }

        const isValid = this.customValidation(c.value);

        return isValid ? null : { customValidation: true };
    }

    private changeTimeout = null;

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

    registerOnTouched(fn: any): void {
    }

    setDisabledState?(isDisabled: boolean): void {
    }

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

        const editorElement = this.htmlEditor?.nativeElement;
        const selectElement = editorElement.querySelector('select');

        if (selectElement) {
            selectElement.addEventListener('change', (event: Event) => {
                event.stopPropagation();
                event.preventDefault();
            });
        }

        if (this.html && editorElement) {
            editorElement.addEventListener('paste', (event: ClipboardEvent) => {
                event.preventDefault();
                const text = event.clipboardData?.getData('text/plain');
                const selection = window.getSelection();
                const range = selection?.getRangeAt(0);

                if (range && text) {
                    const lines = text.split('\n');
                    range.deleteContents();

                    for (let i = lines.length - 1; i >= 0; i--) {
                        range.insertNode(document.createTextNode(lines[i]));

                        if (i > 0) {
                            range.insertNode(document.createElement('br'));
                        }
                    }
                }
            });
        }
    }

    writeValue(value: any) {
        const element = this.multiline ? this.textarea.nativeElement : this.input.nativeElement;
        this.renderer.setProperty(element, 'value', typeof value === 'undefined' ? '' : value);
        if (this.multiline) {
            this.adjustTextArea();
        }

        if (this.html) {
            this.richText = value || '';
        }

        this.isEmpty = !(value && value.toString().trim());
    }

    hasDanger() {
        return (this.control as any).name && (this.control.dirty || this.control.touched) && !this.control.valid;
    }

    registerOnChange(fn: any) {
        this.onChange = (value) => {
            value = value || '';

            if (this.customValidation) {
                if (this.control && this.control.control) {
                    this.control.control.setValidators(this.validate.bind(this));
                    this.control.control.updateValueAndValidity({ emitEvent: false });
                }
            }
            fn(value);

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

    clearInput() {
        if (!this.disabled && !this.isEmpty) {
            this.writeValue(null);
            this.onChange(null);
            this.input.nativeElement.focus();
        }
    }

    adjustTextArea() {
        this.textarea.nativeElement.style.overflow = 'auto';
        this.textarea.nativeElement.style.height = (this.rows) ? this.rows + 'em' : '4em';
    }

    get textLabel() {
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
