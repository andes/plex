import { Component, OnInit, Input, Output, ElementRef, EventEmitter, AfterViewInit, OnChanges, Self, Optional, OnDestroy } from '@angular/core';
import { NgControl, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { dateValidator, hasRequiredValidator } from '../core/validator.functions';

// Importo las librerías de jQuery
// @jgabriel: No encontré una forma más elegante de incluir jQuery
// @andrrr: qué mal
const jQuery = window['jQuery'] = require('jquery/dist/jquery');
require('./bootstrap-material-datetimepicker/bootstrap-material-datetimepicker');

@Component({
    selector: 'plex-datetime',
    template: `
        <div class="form-group datetime" [ngClass]="{'has-danger': (control.dirty || control.touched) && !control.valid }">
            <label *ngIf="label" class="form-control-label">
                {{ label }}
                <span *ngIf="control.name && esRequerido" class="requerido"></span>
            </label>
            <div *ngIf="hintAction" hint="Seleccionar {{ hintText }}" hintType="warning" [hintIcon]="hintIcon" (click)="callAction(hintAction)"></div>
            <div class="input-group d-flex align-items-center">
                <plex-button *ngIf="showNav" type="info" [size]="size" icon="menu-left" (click)="prev()" [disabled]="disabled" [tooltip]="makeTooltip('anterior')"></plex-button>

                <input type="text" class="form-control form-control-{{size}}" [placeholder]="placeholder" [disabled]="disabled"
                        [readonly]="readonly" (input)="onChange($event.target.value)" (blur)="onBlur()" (focus)="onFocus()"
                        (change)="disabledEvent($event)" *ngIf="showInput"/>
                <span class="input-group-btn">
                    <plex-button tabIndex="-1" type="info" [size]="size" [icon]="icon" [disabled]="disabled || readonly"></plex-button>
                </span>
                <plex-button *ngIf="showNav" type="info" [size]="size" icon="menu-right" (click)="next()" [disabled]="disabled" [tooltip]="makeTooltip('siguiente')"></plex-button>
            </div>
            <plex-validation-messages *ngIf="hasDanger()" [control]="control"></plex-validation-messages>
        </div>
        `,
})
export class PlexDateTimeComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    private _min: Date;
    private _max: Date;
    private format: string;
    private value: any;
    private $button: any;
    private $input: any;
    private changeTimeout = null;

    public get esRequerido(): boolean {
        return hasRequiredValidator(this.control as any);
    }

    // Input properties
    @Input() autoFocus: boolean;
    @Input() type: string;
    @Input() label: string;
    @Input() placeholder: string;
    @Input() hintAction: 'current' | 'nextDay' | 'nextHour' = null;
    @Input() hintIcon = 'asterisk';
    @Input() disabled = false;
    @Input() readonly = false;
    @Input() skipBy: 'hour' | 'day' | 'month' | 'year' = null;
    @Input() title: string;
    @Input() debounce = 0;
    @Input() size: 'sm' | 'md' | 'lg' = 'md';
    @Input() btnOnly = false;

    public get showInput() {
        return !this.btnOnly;
    }

    @Input()
    get min(): Date | moment.Moment {
        return this._min;
    }
    set min(value: Date | moment.Moment) {
        const temp: Date = (value) ? moment(value).toDate() : null;
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
        const temp: Date = (value) ? moment(value).toDate() : null;
        if (this.fechaCambio(this._max, temp)) {
            this._max = temp;
            if (this.$button) {
                this.$button.bootstrapMaterialDatePicker('setMaxDate', this._max);
            }
        }
    }


    get showNav(): Boolean {
        return this.skipBy && this.value;
    }

    get icon() {
        return this.type === 'date' ? 'calendar' :
            (this.type === 'time' ? 'clock' :
                (this.type === 'datetime' ? 'calendar-clock' : 'date'));
    }

    // Eventos
    @Output() change = new EventEmitter();
    @Output() blur = new EventEmitter();
    @Output() focus = new EventEmitter();

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

    ngOnDestroy() {
        this.$button.bootstrapMaterialDatePicker('destroy');
    }

    constructor(
        private element: ElementRef,
        @Self() @Optional() public control: NgControl
    ) {
        if (this.control) {
            this.control.valueAccessor = this;
        }
        this.placeholder = '';
        this.type = 'datetime';
    }

    get hintText() {
        if (this.hintAction === 'current') {
            return `${moment().format('DD/MM/YYYY HH:mm')}`;
        } else if (this.hintAction === 'nextDay') {
            return moment().add(1, 'day').format('DD/MM/YYYY');
        } else if (this.hintAction === 'nextHour') {
            return moment().add(1, 'hour').startOf('hour').format('HH:mm');
        }
    }

    getFormattedDate(action) {
        let formattedDate;
        if (action === 'current') {
            formattedDate = moment().format(this.format);
        } else if (action === 'nextDay') {
            formattedDate = moment().add(1, 'day').format(this.format);
        } else if (action === 'nextHour') {
            formattedDate = moment().add(1, 'hour').startOf('hour').format(this.format);
        }
        return formattedDate;
    }

    callAction(action) {
        this.hintAction = action;
        const temp = this.getFormattedDate(action);

        this.setElements(temp);
        this.value = temp;
        this.onChange(this.value);
    }

    public disabledEvent(event: Event) {
        event.stopImmediatePropagation();
        return false;
    }

    // Inicialización
    ngOnInit() { }
    ngAfterViewInit() {
        if (this.control && this.control.control) {
            this.control.control.setValidators(this.validate.bind(this) as any);
        }
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
            maxDate: this.max,
            triggerEvent: 'focus'
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
        const temp = this.value ? moment(this.value).format(this.format) : null;
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
                const m = moment(value, this.format);
                if (m.isValid()) {
                    value = m.toDate();
                } else {
                    value = null;
                }
            }

            this.value = value;
            fn(value);
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

    onBlur() {
        this.writeValue(this.value);
        this.blur.emit();
    }

    onFocus() {
        this.focus.emit();
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
        const temp = this.value ? moment(this.value, this.dateOrTime()).subtract(1, this.skipBy).format(this.format) : null;
        this.setElements(temp);
        this.value = temp;
        this.onChange(this.value);
    }

    next() {
        const temp = this.value ? moment(this.value, this.dateOrTime()).add(1, this.skipBy).format(this.format) : null;
        this.setElements(temp);
        this.value = temp;
        this.onChange(this.value);
    }

    private setElements(temp: string) {
        if (this.$button) {
            this.$button.val(temp);
        }
        if (this.$input) {
            this.$input.val(temp);
        }
    }

    makeTooltip(dir) {
        return this.skipBy === 'hour' ? `hora ${dir}` : this.skipBy === 'day' ? `día ${dir}` : this.skipBy === 'month' ? `mes ${dir}` : `año ${dir}`;
    }
}
