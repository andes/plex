import {
    ViewChild, Component, OnInit, Input, Output, forwardRef, ElementRef, Renderer, EventEmitter, AfterViewInit, ContentChild
} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR, NgControl
} from '@angular/forms';
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
        <div [hidden]="multiline || html" [class.input-group]="prefix || suffix || prefixParent?.children.length > 0 || suffixParent?.children.length > 0">
            <span *ngIf="prefix" class="input-group-addon">
                <plex-icon type="default" size="md" [name]="prefix"></plex-icon>
            </span>
            <span #prefixParent [hidden]="prefixParent?.children.length === 0" class="input-group-addon">
                <ng-content select="[left]"></ng-content>
            </span>

            <input #input type="{{type}}" class="form-control form-control-{{size}}" [placeholder]="placeholder" [disabled]="disabled"
                [readonly]="readonly" (input)="onChange($event.target.value)" (change)="disabledEvent($event)" (focus)="onFocus()" (focusout)="onFocusout()">

            <plex-icon  *ngIf="!readonly && !multiline && !html && !isEmpty" size="sm" name="close-circle" class="clear-icon" (click)="clearInput()"></plex-icon>

            <span #suffixParent [hidden]="suffixParent?.children.length === 0" class="input-group-addon">
                <ng-content select="[right]"></ng-content>
            </span>
        </div>

        <!-- Multiline -->
        <textarea [hidden]="!multiline || html" #textarea class="form-control" [placeholder]="placeholder" [disabled]="disabled" [readonly]="readonly"
        (input)="onChange($event.target.value)" (change)="disabledEvent($event)" (focus)="onFocus()" (focusout)="onFocusout()">
        </textarea>

        <!-- HTML Editor -->
        <quill-editor #quillEditor [hidden]="multiline || !html" [modules]="quill" [style]="quillStyle" [readOnly]="readonly" [placeholder]="placeholder" (onContentChanged)="onChange($event.html)"></quill-editor>

        <!-- Validation -->
        <plex-validation-messages *ngIf="hasDanger()" [control]="control"></plex-validation-messages>
    </div>
    `,
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
    // private
    public quillStyle = {
        height: '200px'
    };

    // Public
    public isEmpty = true;
    public quill = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ size: ['small', false, 'large', 'huge'] }],
                [{ align: [] }],
                ['clean'],
            ],
            handlers: {}
        }
    };

    @ViewChild('input', { static: true }) private input: ElementRef;
    @ViewChild('textarea', { static: true }) private textarea: ElementRef;
    @ViewChild('quillEditor', { static: true }) private quillEditor: ElementRef;
    @ContentChild(NgControl, { static: true }) public control: any;
    public get esRequerido(): boolean {
        return hasRequiredValidator(this.control);
    }

    // Propiedades
    @Input() type: 'text' | 'password' | 'email' = 'text';
    @Input() label: string;
    @Input() size: 'sm' | 'md' | 'lg' = 'md';
    @Input() placeholder: string;
    @Input() prefix: string;
    @Input() suffix: string;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() multiline = false;
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
    set height(value: number | string) {
        if (typeof value === 'number') {
            this.quillStyle.height = value + 'px';
        } else {
            this.quillStyle.height = value;
        }
    }
    @Input()
    set autoFocus(value: any) {
        // Cada vez que cambia el valor vuelve a setear el foco
        if (this.renderer) {
            const element = this.multiline ? this.textarea.nativeElement : this.input.nativeElement;
            this.renderer.invokeElementMethod(element, 'focus');
        }
    }

    // Eventos
    @Output() change = new EventEmitter();
    @Output() focus = new EventEmitter();
    @Output() focusout = new EventEmitter();

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

    constructor(private renderer: Renderer) {
        this.placeholder = '';
        this.password = false;
    }

    // Inicialización
    ngOnInit() {
        if (this.html) {
            this.prepareQuillToolbar();
        }
    }

    ngAfterViewInit() {
        if (this.autoFocus) {
            const element = this.multiline ? this.textarea.nativeElement : this.input.nativeElement;
            this.renderer.invokeElementMethod(element, 'focus');
        }
        if (this.html) {
            this.createToolbarIcons();
        }
    }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        const element = this.multiline ? this.textarea.nativeElement : this.input.nativeElement;
        this.renderer.setElementProperty(element, 'value', typeof value === 'undefined' ? '' : value);
        if (this.multiline) {
            this.adjustTextArea();
        } else {
            if (this.html) {
                const component = (this.quillEditor as any);
                // Por el dinamismo de RUP hay una primera instancia que quillEditor es undefined
                if (component.quillEditor) {
                    component.quillEditor.setContents(component.valueSetter(component.quillEditor, typeof value === 'undefined' ? '' : value));
                }
            }
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
            fn(value);
            // Check empty
            this.isEmpty = !(value && value.toString().trim());

            if (this.multiline) {
                this.adjustTextArea();
            }
            // jgabriel | 24/03/2017 | Esto es un por bug de Angular2 que a veces no actualiza la vista cuando cambia el modelo
            // this.change.emit({
            //   value: value
            // });
            if (this.changeTimeout) {
                clearTimeout(this.changeTimeout);
            }
            this.changeTimeout = setTimeout(() => {
                this.change.emit({
                    value
                });
            }, this.debounce);
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


    private prepareQuillToolbar() {
        if (this.qlToolbar) {
            const toolBarItems: string[] = [];
            const handlers: any = {};

            this.qlToolbar.forEach(item => {
                toolBarItems.push(item.name);
                handlers[item.name] = item.handler;
            });

            this.quill.toolbar.container.push(toolBarItems);
            this.quill.toolbar.handlers = handlers;
        }
    }

    private createToolbarIcons() {
        if (this.qlToolbar) {
            const editor = (this.quillEditor as any).quillEditor;
            const toolbar = editor.getModule('toolbar').container;
            this.qlToolbar.forEach(item => {
                const qlItem = toolbar.getElementsByClassName(`ql-${item.name}`);
                if (qlItem.length > 0) {
                    qlItem[0].innerHTML = `<plex-icon name="${item.icon || item.name}" size="sm" type="default"></plex-icon>`;
                }
            });
        }
    }
}

export interface PlexTextToolBar {
    name: string;
    icon?: string;
    handler: () => void;
}
