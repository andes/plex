import {
    ViewChild, ContentChild, Component, OnInit, Input, AfterViewInit,
    Output, EventEmitter, forwardRef, ElementRef, Renderer, OnChanges
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { hasRequiredValidator } from '../core/validator.functions';

const RegEx_Mobile = /^[1-3][0-9]{9}$/;
const RegEx_Numero = /^(\d)+$/;

@Component({
    selector: 'plex-phone',
    // Las siguientes líneas permiten acceder al atributo formControlName/ngModel
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexPhoneComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => PlexPhoneComponent),
            multi: true
        },
    ],
    template: ` <div class="form-group" [ngClass]="{'has-danger': hasDanger() }">
                    <label *ngIf="label" class="form-control-label">{{label}}<span *ngIf="control.name && esOpcional" class="opcional"></span></label>
                    <div [ngClass]="{'input-group': prefix || suffix}">
                        <span *ngIf="prefix" class="input-group-addon" [innerHTML]="prefix"></span>
                        <input #ref type="text" class="form-control" [placeholder]="placeholder" [disabled]="disabled" [readonly]="readonly" (input)="onChange($event.target.value)" (focus)="onFocus()" (focusout)="onFocusout()">
                        <span *ngIf="suffix" class="input-group-addon" [innerHTML]="suffix"></span>
                    </div>
                    <plex-validation-messages *ngIf="hasDanger()" [control]="control"></plex-validation-messages>
                </div>`,
})
export class PlexPhoneComponent implements OnInit, AfterViewInit, ControlValueAccessor {
    private lastValue: any = null;
    private renderer: Renderer;
    @ContentChild(NgControl) control: any;
    @ViewChild('ref') ref: ElementRef;

    public get esOpcional(): boolean {
        return hasRequiredValidator(this.control);
    }

    // Propiedades
    @Input() label: string;
    @Input() prefix: string;
    @Input() suffix: string;
    @Input() readonly = false;
    @Input() disabled = false;
    @Input() placeholder: string;
    @Input()
    set autoFocus(value: any) {
        // Cada vez que cambia el valor vuelve a setear el foco
        if (this.renderer) {
            this.renderer.invokeElementMethod(this.ref.nativeElement, 'focus');
        }
    }

    // Eventos
    @Output() valueChange = new EventEmitter();

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

    // Validación
    validate(c: FormControl) {
        if (c.value && !RegEx_Mobile.test(c.value)) {
            return {
                format: {
                    given: c.value,
                }
            };
        } else {
            return null;
        }
    }

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

    public hasDanger() {
        return (this.control as any).name && (this.control.dirty || this.control.touched) && !this.control.valid;
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {
    }

    registerOnChange(fn: any) {
        this.onChange = (value) => {
            // Estas líneas evitan que se muestren caracteres no permitidos en el input
            if ((value === '') || RegEx_Numero.test(value)) {
                this.lastValue = value;
            } else {
                this.writeValue(this.lastValue);
                value = this.lastValue;
            }
            // Emite los eventos
            let val = ((value === null) || (value === '')) ? null : parseInt(value, 10);
            fn(val);
            this.valueChange.emit({ value: val });
        };
    }
}
