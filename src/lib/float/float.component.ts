import { ViewChild, ContentChild, Component, OnInit, AfterViewInit, Input, Output, EventEmitter, forwardRef, ElementRef, OnChanges, Renderer2, Self, Optional } from '@angular/core';
import {
    ControlValueAccessor, UntypedFormControl, NgControl
} from '@angular/forms';
import { numberValidator, hasRequiredValidator } from '../core/validator.functions';

const REGEX = /^\s*(\-)?(\d*|(\d*((,|\.)\d*)))\s*$/;

@Component({
    selector: 'plex-float',
    template: `
        <div class="form-group" [ngClass]="{'has-danger': hasDanger() }">
            <label *ngIf="label" class="form-control-label">{{label}}<span *ngIf="control.name && esRequerido" class="requerido"></span></label>
            <div [ngClass]="{'input-group': prefix || suffix ||   suffixParent?.children.length > 0 ||  prefixParent?.children.length > 0}">
                <span *ngIf="prefix" class="input-group-addon" [innerHTML]="prefix"></span>
                <span #prefixParent [hidden]="prefixParent?.children.length === 0" class="input-group-addon">
                    <ng-content select="[left]"></ng-content>
                </span>
                <input #ref type="text" class="form-control" [disabled]="disabled" [placeholder]="placeholder" [disabled]="disabled" [readonly]="readonly" (input)="onChange($event)" (change)="disabledEvent($event)">
                <span *ngIf="suffix" class="input-group-addon" [innerHTML]="suffix"></span>
                <span #suffixParent [hidden]="suffixParent?.children.length === 0" class="input-group-addon">
                    <ng-content select="[right]"></ng-content>
                </span>
            </div>
            <plex-validation-messages *ngIf="hasDanger()" [control]="control?.control"></plex-validation-messages>
        </div>
    `,
})
export class PlexFloatComponent implements OnInit, AfterViewInit, ControlValueAccessor, OnChanges {
    private lastValue: any = null;

    @ViewChild('ref', { static: true }) private ref: ElementRef;

    public get esRequerido(): boolean {
        return hasRequiredValidator(this.control as any);
    }

    // Propiedades
    @Input() label: string;
    @Input() prefix: string;
    @Input() suffix: string;
    @Input() placeholder: string;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() min: number;
    @Input() max: number;
    @Input()
    set autoFocus(value: any) {
        // Cada vez que cambia el valor vuelve a setear el foco
        if (this.renderer) {
            this.ref.nativeElement.focus();
        }
    }

    // Eventos
    @Output() change = new EventEmitter();

    // Funciones públicas
    public onChange = (_: Event) => { };

    public disabledEvent(event: Event) {
        event.stopImmediatePropagation();
        return false;
    }

    // Validación
    validateFn = (c: UntypedFormControl) => { };
    validate(c: UntypedFormControl) {
        return this.validateFn(c);
    }
    ngOnChanges(changes) {
        // Cuando cambias las cotas, devuelve una nueva función de validación
        if (changes.min || changes.max) {
            this.validateFn = numberValidator(REGEX, this.min, this.max);
        }
    }

    constructor(
        private renderer: Renderer2,
        @Self() @Optional() public control: NgControl,
    ) {
        if (this.control) {
            this.control.valueAccessor = this;
        }
        if (this.control && this.control.control) {
            this.control.control.setValidators(this.validate.bind(this) as any);
        }
        this.placeholder = '';
    }

    // Inicialización
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.ref.nativeElement.focus();
        }
    }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        this.renderer.setProperty(this.ref.nativeElement, 'value', typeof value === 'undefined' ? '' : value);
    }

    hasDanger() {
        return (this.control as any).name && (this.control.dirty || this.control.touched) && !this.control.valid;
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {
    }

    registerOnChange(fn: any) {
        this.onChange = (event: Event) => {
            let value = (event.target as HTMLInputElement).value;
            // Estas líneas evitan que se muestren caracteres no permitidos en el input
            if ((value === '') || REGEX.test(value)) {
                this.lastValue = value.toString().replace('.', ',');
            } else {
                this.writeValue(this.lastValue);
                value = this.lastValue;
            }

            // Emite los eventos
            const val = ((value == null) || (value === '')) ? null : Number.parseFloat(value.toString().replace(',', '.'));
            fn(val);
            this.change.emit({
                value: val
            });
        };
    }
}
