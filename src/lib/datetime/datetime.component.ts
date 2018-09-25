import { ContentChild, Component, OnInit, Input, Output, forwardRef, ElementRef, Renderer, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import { NgControl, NG_VALUE_ACCESSOR, NgForm, NG_VALIDATORS, FormControl, AbstractControl } from '@angular/forms';
import * as moment from 'moment';
import { dateValidator, hasRequiredValidator } from '../core/validator.functions';

// Importo las librerías de jQuery
// @jgabriel: No encontré una forma más elegante de incluir jQuery
// @andrrr: qué mal
let jQuery = window['jQuery'] = require('jquery/dist/jquery');
require('./bootstrap-material-datetimepicker/bootstrap-material-datetimepicker');

@Component({
    selector: 'plex-datetime',
    providers: [
        // Permite acceder al atributo formControlName/ngModel
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexDateTimeComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => PlexDateTimeComponent),
            multi: true
        },
    ],
    template: ` <div class="form-group" [ngClass]="{'has-danger': (control.dirty || control.touched) && !control.valid }">
                    <label *ngIf="label" class="form-control-label">{{ label }}</label>
                    <div class="input-group d-flex align-items-center">
                        <a *ngIf="showArraws" (click)="prev()" class="btn btn-info text-white pl-1 pr-1 hover" [title]="makeTooltip('anterior')"><i class="mdi mdi-menu-left"></i></a>
                        <input type="text" class="form-control" [placeholder]="placeholder" [disabled]="disabled" [readonly]="readonly" (input)="onChange($event.target.value)" (blur)="onBlur()"/>
                        <span class="input-group-btn">
                        <button class="btn btn-primary" tabindex="-1" [disabled]="disabled || readonly"><i class="mdi" [ngClass]="{'mdi-calendar': type == 'date','mdi-clock': type == 'time', 'mdi-calendar-clock': type == 'datetime'}"></i></button>
                        </span>
                        <a *ngIf="showArraws" (click)="next()" class="btn btn-info text-white pl-1 pr-1 hover" [title]="makeTooltip('siguiente')"><i class="mdi mdi-menu-right"></i></a>
                    </div>
                    <plex-validation-messages *ngIf="hasDanger()" [control]="control"></plex-validation-messages>
                </div>`,
})
export class PlexDateTimeComponent implements OnInit, AfterViewInit, OnChanges {
    private _min: Date;
    private _max: Date;
    private format: string;
    private value: any;
    private $button: any;
    private $input: any;

    @ContentChild(NgControl) control: AbstractControl;
    public get esOpcional(): boolean {
        return hasRequiredValidator(this.control);
    }

    // Input properties
    @Input() autoFocus: boolean;
    @Input() type: string;
    @Input() label: string;
    @Input() placeholder: string;
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() skipBy: 'hour' | 'day' | 'month' | 'year' = null;
    @Input() title: string;
    @Input()
    get min(): Date | moment.Moment {
        return this._min;
    }
    set min(value: Date | moment.Moment) {
        let temp: Date = (value) ? moment(value).toDate() : null;
        if (this.fechaCambio(this._min, temp)) {
            this._min = temp;
            if (this.$button) {
                this.$button.bootstrapMaterialDatePicker('setMinDate', this._min);
            }
        }
    }
    @Input()
    get max(): Date | moment.Moment {
        return this._max;
    }
    set max(value: Date | moment.Moment) {
        let temp: Date = (value) ? moment(value).toDate() : null;
        if (this.fechaCambio(this._max, temp)) {
            this._max = temp;
            if (this.$button) {
                this.$button.bootstrapMaterialDatePicker('setMaxDate', this._max);
            }
        }
    }

    get showArraws(): Boolean {
        return this.skipBy && this.value;
    }

    // Eventos
    @Output() change = new EventEmitter();

    // Funciones públicas
    public onChange = (_: any) => { };

    // Validación
    validateFn = (c: FormControl) => { };
    validate(c: FormControl) {
        return this.validateFn(c);
    }
    ngOnChanges(changes) {
        // Cuando cambias las cotas, devuelve una nueva función de validación
        if (changes.min || changes.max) {
            this.validateFn = dateValidator(this.type, this.min, this.max);
        }
    }

    constructor(private element: ElementRef, private renderer: Renderer) {
        this.placeholder = '';
        this.type = 'datetime';
    }

    // Inicialización
    ngOnInit() { }
    ngAfterViewInit() {
        this.format = this.dateOrTime();
        this.$input = jQuery('INPUT', this.element.nativeElement.children[0]);
        this.$button = jQuery('BUTTON', this.element.nativeElement.children[0]);
        this.$button.bootstrapMaterialDatePicker({
            lang: 'es',
            format: this.format,
            currentDate: this.value,
            okText: 'ACEPTAR',
            cancelText: 'CANCELAR',
            clearButton: false,
            nowButton: false,
            switchOnClick: true,
            date: this.type === 'date' || this.type === 'datetime',
            time: this.type === 'time' || this.type === 'datetime',
            minDate: this.min,
            maxDate: this.max
        });
        this.$button.on('change', (event, date) => {
            this.onChange(date.toDate());
            this.writeValue(this.value);
        });
    }

    private dateOrTime(): string {
        return this.type === 'date' ? 'DD/MM/YYYY' : (this.type === 'datetime' ? 'DD/MM/YYYY HH:mm' : 'HH:mm');
    }

    // Actualización Modelo -> Vista
    writeValue(value: any) {
        this.value = value;
        let temp = this.value ? moment(this.value).format(this.format) : null;
        this.setElements(temp);
    }

    hasDanger() {
        return (this.control as any).name && (this.control.dirty || this.control.touched) && !this.control.valid;
    }

    // Actualización Vista -> Modelo
    registerOnTouched() {
    }

    registerOnChange(fn: any) {
        this.onChange = (value) => {
            if (typeof value === 'string') {
                let m = moment(value, this.format);
                if (m.isValid()) {
                    value = m.toDate();
                } else {
                    value = null;
                }
            }

            this.value = value;
            fn(value);
            this.change.emit({
                value: value
            });
        };
    }

    onBlur() {
        this.writeValue(this.value);
    }

    private fechaCambio(fecha1: Date, fecha2: Date): boolean {
        if (fecha1 && !fecha2) {
            return true;
        } else {
            if ((!fecha1 && fecha2)) {
                return true;
            } else {
                return (fecha1 && fecha2 && fecha1.getTime() !== fecha2.getTime());
            }
        }
    }

    prev() {
        let temp = this.value ? moment(this.value, this.dateOrTime()).subtract(1, this.skipBy).format(this.format) : null;
        this.setElements(temp);
        this.onChange(this.value);
    }

    next() {
        let temp = this.value ? moment(this.value, this.dateOrTime()).add(1, this.skipBy).format(this.format) : null;
        this.setElements(temp);
        this.onChange(this.value);
    }

    private setElements(temp: string) {
        if (this.$button) {
            this.$button.val(temp);
        }
        if (this.$input) {
            this.$input.val(temp);
        }
        this.value = temp;
    }

    makeTooltip(dir) {
        return this.skipBy === 'hour' ? `hora ${dir}` : this.skipBy === 'day' ? `día ${dir}` : this.skipBy === 'month' ? `mes ${dir}` : `año ${dir}`;
    }
}
