// import { Component, OnInit, Input, Output, ElementRef, EventEmitter, AfterViewInit, OnChanges, Self, Optional, OnDestroy } from '@angular/core';
// import { NgControl, UntypedFormControl } from '@angular/forms';
// import { dateValidator, hasRequiredValidator } from '../core/validator.functions';
// import * as _moment from 'moment';
// type Moment = _moment.Moment;
// const moment: any = _moment;
// require('./bootstrap-material-datetimepicker/bootstrap-material-datetimepicker');
// import * as jQuery from 'jquery';
// (window as any).jQuery = jQuery;
import {
    Component,
    OnInit,
    Input,
    Output,
    ElementRef,
    EventEmitter,
    AfterViewInit,
    OnChanges,
    Self,
    Optional,
    OnDestroy,
    ChangeDetectionStrategy,
    forwardRef,
} from '@angular/core';
import { NgControl, UntypedFormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { dateValidator, hasRequiredValidator } from '../core/validator.functions';
import * as momentNS from 'moment';
type Moment = momentNS.Moment;
const moment = momentNS;

@Component({
    selector: 'plex-datetime',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PlexDateTimeComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
        .form-group.datetime .input-group {
            align-items: center;
        }
    `],
    template: `
        <!-- <div class="form-group datetime" [ngClass]="{'has-danger': (control.dirty || control.touched) && !control.valid }">
            <label *ngIf="label" class="form-control-label">
                {{ label }}
                <span *ngIf="control.name && esRequerido" class="requerido"></span>
            </label>
            <div *ngIf="todayHintAction" hint="{{ hintText }}" hintType="warning" [hintIcon]="hintIcon" (click)="callAction(hintAction)"></div>
            <div class="input-group d-flex align-items-center">
                <plex-button *ngIf="showNav" type="info" [size]="size" icon="menu-left" (click)="prev()" [disabled]="disabledPrev" [tooltip]="makeTooltip('anterior')"></plex-button>

                <input type="text" class="form-control form-control-{{size}}" [placeholder]="placeholder" [disabled]="disabled"
                        [readonly]="readonly" (input)="onChange($event)" (blur)="onBlur()" (focus)="onFocus()"
                        (change)="disabledEvent($event)" *ngIf="showInput"/>
                <span class="input-group-btn">
                    <plex-button [tabIndex]="-1" type="info" [size]="size" [icon]="icon" [disabled]="disabled || readonly"></plex-button>
                </span>
                <plex-button *ngIf="showNav" type="info" [size]="size" icon="menu-right" (click)="next()" [disabled]="disabledNext" [tooltip]="makeTooltip('siguiente')"></plex-button>
            </div>
            <plex-validation-messages *ngIf="hasDanger()" [control]="control?.control"></plex-validation-messages>
        </div> -->


        <div class="form-group datetime" [ngClass]="{'has-danger': (control?.dirty || control?.touched) && !control?.valid }">
  <label *ngIf="label" class="form-control-label">
    {{ label }}
    <span *ngIf="control?.name && esRequerido" class="requerido"></span>
  </label>

  <div *ngIf="todayHintAction" hint="{{ hintText }}" hintType="warning" [hintIcon]="hintIcon" (click)="callAction(hintAction)"></div>

  <div class="input-group d-flex align-items-center">
    <plex-button *ngIf="showNav" type="info" [size]="size" icon="menu-left"
                 (click)="prev()" [disabled]="disabledPrev" [tooltip]="makeTooltip('anterior')">
    </plex-button>

    <!-- Entrada principal -->
    <ng-container [ngSwitch]="type">

      <!-- DATE / DATETIME: campo de fecha -->
      <ng-container *ngSwitchCase="'date'">
        <input data-main matInput [matDatepicker]="picker"
               class="form-control form-control-{{size}}"
               [placeholder]="placeholder"
               [disabled]="disabled" [readonly]="readonly"
               [value]="_value" (dateChange)="onDateChange($event.value)"
               (blur)="onBlur()" (focus)="onFocus()" />
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </ng-container>

      <ng-container *ngSwitchCase="'datetime'">
        <input data-main matInput [matDatepicker]="picker"
               class="form-control form-control-{{size}}"
               [placeholder]="placeholder"
               [disabled]="disabled" [readonly]="readonly"
               [value]="_value" (dateChange)="onDateChange($event.value)"
               (blur)="onBlur()" (focus)="onFocus()" />
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </ng-container>

      <!-- TIME: solo hora -->
      <ng-container *ngSwitchCase="'time'">
        <input data-main matInput type="time"
               class="form-control form-control-{{size}}"
               [placeholder]="placeholder"
               [disabled]="disabled" [readonly]="readonly"
               [value]="toHHmm(_value)"
               (input)="onTimeInput($event)" (blur)="onBlur()" (focus)="onFocus()" />
      </ng-container>

    </ng-container>

    <span class="input-group-btn">
      <plex-button [tabIndex]="-1" type="info" [size]="size" [icon]="icon" [disabled]="disabled || readonly"></plex-button>
    </span>

    <plex-button *ngIf="showNav" type="info" [size]="size" icon="menu-right"
                 (click)="next()" [disabled]="disabledNext" [tooltip]="makeTooltip('siguiente')">
    </plex-button>
  </div>

  <plex-validation-messages *ngIf="hasDanger()" [control]="control?.control"></plex-validation-messages>
</div>

        `,
})

export class PlexDateTimeComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy, ControlValueAccessor {

    private _min: Date | null = null;
    private _max: Date | null = null;
    private _format = 'DD/MM/YYYY HH:mm';
    private changeTimeout: any = null;
    public _value: Date | null = null;

    public get esRequerido(): boolean {
        return hasRequiredValidator(this.control as any);
    }

    @Input() autoFocus: boolean;
    @Input() type: 'date' | 'time' | 'datetime' = 'datetime';
    @Input() label: string;
    @Input() placeholder: string;
    @Input() hintPrefix = 'Seleccionar';
    @Input() hintSuffix = '';
    @Input() hintAction: 'today' | 'nextDay' | 'nextHour' | 'custom' = null;
    @Input() hintIcon = 'asterisk';
    @Input() disabled = false;
    @Input() disabledPrev = false;
    @Input() disabledNext = false;
    @Input() readonly = false;
    @Input() skipBy: 'hour' | 'day' | 'month' | 'year' = null;
    @Input() title: string;
    @Input() debounce = 0;
    @Input() size: 'sm' | 'md' | 'lg' = 'md';
    @Input() btnOnly = false;

    public get showInput() { return !this.btnOnly; }

    @Input()
    get min(): Date | Moment {
        return this._min;
    }
    set min(value: Date | Moment) {
        const temp: Date = value ? moment(value).toDate() : null;
        if (this.fechaCambio(this._min, temp)) {
            this._min = temp;
        }
    }

    @Input()
    get max(): Date | Moment {
        return this._max;
    }
    set max(value: Date | Moment) {
        const temp: Date = value ? moment(value).toDate() : null;
        if (this.fechaCambio(this._max, temp)) {
            this._max = temp;
        }
    }

    get showNav(): boolean {
        return !!(this.skipBy && this._value);
    }

    get icon() {
        return this.type === 'date' ? 'calendar' :
            this.type === 'time' ? 'clock' :
                this.type === 'datetime' ? 'calendar-clock' : 'date';
    }

    @Output() change = new EventEmitter<{ value: Date | null }>();
    @Output() blur = new EventEmitter();
    @Output() focus = new EventEmitter();
    @Output() typing = new EventEmitter();

    // Validación
    validateFn = (c: UntypedFormControl) => { };
    validate(c: UntypedFormControl) {
        return this.validateFn(c);
    }

    // CVA
    private onTouched: () => void = () => { };
    private propagateChange: (val: Date | null) => void = () => { };

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

    ngOnInit() { }

    ngAfterViewInit() {
        if (this.control?.control) {
            this.control.control.setValidators(this.validate.bind(this) as any);
        }
        this._format = this.dateOrTime();
        if (this.autoFocus) {
            const input: HTMLInputElement | null = this.element.nativeElement?.querySelector('input[data-main]');
            input?.focus();
        }
    }

    ngOnChanges(changes: any) {
        if (changes.min || changes.max || changes.type) {
            this._format = this.dateOrTime();
            this.validateFn = dateValidator(this.type, this.min, this.max);
            // re-formatear vista ante cambios de formato
            this.writeValue(this._value);
        }
    }

    ngOnDestroy() { }

    // --- Helpers de hint ---
    customText() { return `${this.hintPrefix} ${this.hintSuffix}`; }

    get hintText() {
        if (this.hintAction === 'custom') {
            return this.customText();
        }
        if (this.hintAction === 'today') {
            return this.todayText();
        }
        if (this.hintAction === 'nextDay') {
            return this.nextDayText();
        }
        if (this.hintAction === 'nextHour') {
            return this.nextHourText();
        }
        return null;
    }

    private nextHourText() {
        return `${this.hintPrefix} ${moment().add(1, 'hour').startOf('hour').format('HH:mm')} ${this.hintSuffix}`;
    }

    private nextDayText() {
        return `${this.hintPrefix} ${moment().add(1, 'day').format('DD/MM/YYYY')} ${this.hintSuffix}`;
    }

    private todayText() {
        return `${this.hintPrefix} ${moment().format('DD/MM/YYYY HH:mm [hs]')} ${this.hintSuffix}`;
    }

    private getFormattedDate(action: 'today' | 'nextDay' | 'nextHour') {
        if (action === 'today') {
            return moment().format(this._format);
        }
        if (action === 'nextDay') {
            return moment().add(1, 'day').format(this._format);
        }
        if (action === 'nextHour') {
            return moment().add(1, 'hour').startOf('hour').format(this._format);
        }
        return null;
    }

    callAction(action: 'today' | 'nextDay' | 'nextHour' | 'custom') {
        this.hintAction = action;
        const temp = action === 'custom' ? this.customText() : this.getFormattedDate(action);
        const parsed = temp ? moment(temp, this._format) : null;
        this._value = parsed?.isValid() ? parsed.toDate() : null;
        this.emitChange();
    }

    // --- Vista <-> Modelo ---
    writeValue(value: any) {
        this._value = value ? moment(value).toDate() : null;
    }

    registerOnChange(fn: (val: Date | null) => void) { this.propagateChange = fn; }
    registerOnTouched(fn: () => void) { this.onTouched = fn; }
    setDisabledState(isDisabled: boolean) { this.disabled = isDisabled; }

    // desde el input de texto (cuando type !== 'time' puro)
    onTextInput(ev: Event) {
        const raw = (ev.target as HTMLInputElement).value;
        let val: Date | null = null;
        if (typeof raw === 'string' && raw.trim().length) {
            const m = moment(raw, this._format, true);
            if (m.isValid()) {
                val = m.toDate();
            }
        }
        this._value = val;
        this.emitChange(true);
        this.typing.emit();
    }

    // desde el datepicker
    onDateChange(date: Date | null) {
        if (!this._value || !date) {
            this._value = date;
        } else {
            // preserva hora/min si estaba en datetime
            const keepTime = this.type !== 'date';
            const base = moment(date);
            if (keepTime) {
                const old = moment(this._value);
                base.set({ hour: old.hour(), minute: old.minute(), second: 0, millisecond: 0 });
            }
            this._value = base.toDate();
        }
        this.emitChange();
    }

    // desde el input time (para type === 'time' o show time en datetime)
    onTimeInput(ev: Event) {
        const raw = (ev.target as HTMLInputElement).value; // "HH:mm"
        if (!raw) {
            return;
        }
        const [hh, mm] = raw.split(':').map(Number);
        const base = moment(this._value ?? new Date());
        base.set({ hour: hh || 0, minute: mm || 0, second: 0, millisecond: 0 });

        // Si es type === 'time', dejamos solo la hora de “hoy” (similar a plugin)
        // Si es datetime, preservamos la fecha actual elegida
        this._value = base.toDate();
        this.emitChange();
    }

    onBlur() {
        // re-formatea si hay valor
        this._value = this._value ? moment(this._value).toDate() : null;
        this.blur.emit();
        this.onTouched();
    }

    onFocus() { this.focus.emit(); }

    // navegación anterior/siguiente
    prev() {
        if (!this._value || !this.skipBy) {
            return;
        }
        this.disabledNext = false;
        const m = moment(this._value).subtract(1, this.skipBy);
        this._value = m.toDate();
        this.disabledPrev = !!(this._min && m.isSameOrBefore(moment(this._min)));
        this.emitChange();
    }

    next() {
        if (!this._value || !this.skipBy) {
            return;
        }
        this.disabledPrev = false;
        const m = moment(this._value).add(1, this.skipBy);
        this._value = m.toDate();
        this.disabledNext = !!(this._max && m.isSameOrAfter(moment(this._max)));
        this.emitChange();
    }

    // --- Varios ---
    hasDanger() {
        return (this.control as any)?.name && (this.control.dirty || this.control.touched) && !this.control.valid;
    }

    makeTooltip(dir: 'anterior' | 'siguiente') {
        return this.skipBy === 'hour' ? `hora ${dir}` :
            this.skipBy === 'day' ? `día ${dir}` :
                this.skipBy === 'month' ? `mes ${dir}` : `año ${dir}`;
    }

    get todayHintAction() { return this.hintAction; }

    public disabledEvent(event: Event) {
        event.stopImmediatePropagation();
        return false;
    }

    private emitChange(isTyping = false) {
        this.propagateChange(this._value);
        if (this.changeTimeout) {
            clearTimeout(this.changeTimeout);
        }
        this.changeTimeout = setTimeout(() => this.change.emit({ value: this._value }), this.debounce);
        if (!isTyping) {
            this.typing.emit();
        }
    }

    private fechaCambio(a?: Date | null, b?: Date | null): boolean {
        if (a && !b) {
            return true;
        }
        if (!a && b) {
            return true;
        }
        return !!(a && b && a.getTime() !== b.getTime());
    }

    private dateOrTime(): string {
        return this.type === 'date'
            ? 'DD/MM/YYYY'
            : this.type === 'time'
                ? 'HH:mm'
                : 'DD/MM/YYYY HH:mm';
    }

    // otros
    public toHHmm(date: Date): string {
        return date ? moment(date).format('HH:mm') : '';
    }
}
// export class PlexDateTimeComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

//     private _min: Date;
//     private _max: Date;
//     private format: string;
//     private value: any;
//     private $button: any;
//     private $input: any;
//     private changeTimeout = null;

//     public get esRequerido(): boolean {
//         return hasRequiredValidator(this.control as any);
//     }

//     // Input properties
//     @Input() autoFocus: boolean;
//     @Input() type: string;
//     @Input() label: string;
//     @Input() placeholder: string;
//     @Input() hintPrefix = 'Seleccionar';
//     @Input() hintSuffix = '';
//     @Input() hintAction: 'today' | 'nextDay' | 'nextHour' | 'custom' = null;
//     @Input() hintIcon = 'asterisk';
//     @Input() disabled = false;
//     @Input() disabledPrev = false;
//     @Input() disabledNext = false;
//     @Input() readonly = false;
//     @Input() skipBy: 'hour' | 'day' | 'month' | 'year' = null;
//     @Input() title: string;
//     @Input() debounce = 0;
//     @Input() size: 'sm' | 'md' | 'lg' = 'md';
//     @Input() btnOnly = false;

//     public get showInput() {
//         return !this.btnOnly;
//     }

//     @Input()
//     get min(): Date | Moment {
//         return this._min;
//     }
//     set min(value: Date | Moment) {
//         const temp: Date = (value) ? moment(value).toDate() : null;
//         if (this.fechaCambio(this._min, temp)) {
//             this._min = temp;
//             if (this.$button) {
//                 this.$button.bootstrapMaterialDatePicker('setMinDate', this._min);
//             }
//         }
//     }
//     @Input()
//     get max(): Date | Moment {
//         return this._max;
//     }
//     set max(value: Date | Moment) {
//         const temp: Date = (value) ? moment(value).toDate() : null;
//         if (this.fechaCambio(this._max, temp)) {
//             this._max = temp;
//             if (this.$button) {
//                 this.$button.bootstrapMaterialDatePicker('setMaxDate', this._max);
//             }
//         }
//     }


//     get showNav(): Boolean {
//         return this.skipBy && this.value;
//     }

//     get icon() {
//         return this.type === 'date' ? 'calendar' :
//             (this.type === 'time' ? 'clock' :
//                 (this.type === 'datetime' ? 'calendar-clock' : 'date'));
//     }

//     // Eventos
//     @Output() change = new EventEmitter();
//     @Output() blur = new EventEmitter();
//     @Output() focus = new EventEmitter();
//     @Output() typing = new EventEmitter();

//     // Funciones públicas
//     public onChange = (_: Event) => { };

//     // Validación
//     validateFn = (c: UntypedFormControl) => { };
//     validate(c: UntypedFormControl) {
//         return this.validateFn(c);
//     }

//     ngOnChanges(changes) {
//         // Cuando cambias las cotas, devuelve una nueva función de validación
//         if (changes.min || changes.max) {
//             this.validateFn = dateValidator(this.type, this.min, this.max);
//         }
//     }

//     ngOnDestroy() {
//         this.$button.bootstrapMaterialDatePicker('destroy');
//     }

//     constructor(
//         private element: ElementRef,
//         @Self() @Optional() public control: NgControl
//     ) {
//         if (this.control) {
//             this.control.valueAccessor = this;
//         }
//         this.placeholder = '';
//         this.type = 'datetime';
//     }

//     customText() {
//         return `${this.hintPrefix} ${this.hintSuffix}`;
//     }

//     get hintText() {

//         if (this.hintAction === 'custom') {
//             return this.customText();
//         } else if (this.hintAction === 'today') {
//             return this.todayText();
//         } else if (this.hintAction === 'nextDay') {
//             return this.nextDayText();
//         } else if (this.hintAction === 'nextHour') {
//             return this.nextHourText();
//         }
//     }

//     private nextHourText() {
//         return `${this.hintPrefix} ${moment().add(1, 'hour').startOf('hour').format('HH:mm')} ${this.hintSuffix}`;
//     }

//     private nextDayText() {
//         return `${this.hintPrefix} ${moment().add(1, 'day').format('DD/MM/YYYY')} ${this.hintSuffix}`;
//     }

//     private todayText() {
//         return `${this.hintPrefix} ${moment().format('DD/MM/YYYY HH:mm [hs]')} ${this.hintSuffix}`;
//     }

//     getFormattedDate(action) {
//         let formattedDate;
//         if (action === 'today') {
//             formattedDate = moment().format(this.format);
//         } else if (action === 'nextDay') {
//             formattedDate = moment().add(1, 'day').format(this.format);
//         } else if (action === 'nextHour') {
//             formattedDate = moment().add(1, 'hour').startOf('hour').format(this.format);
//         }
//         return formattedDate;
//     }

//     callAction(action) {
//         this.hintAction = action;
//         const temp = this.getFormattedDate(action);

//         this.setElements(temp);
//         this.value = temp;
//         this.onChange(this.value);
//     }

//     public disabledEvent(event: Event) {
//         event.stopImmediatePropagation();
//         return false;
//     }

//     // Inicialización
//     ngOnInit() { }
//     ngAfterViewInit() {
//         if (this.control && this.control.control) {
//             this.control.control.setValidators(this.validate.bind(this) as any);
//         }
//         this.format = this.dateOrTime();
//         this.$input = jQuery('INPUT', this.element.nativeElement.children[0]);
//         this.$button = jQuery('BUTTON', this.element.nativeElement.children[0]);
//         this.$button.bootstrapMaterialDatePicker({
//             lang: 'es',
//             format: this.format,
//             currentDate: this.value,
//             okText: 'ACEPTAR',
//             cancelText: 'CANCELAR',
//             clearButton: false,
//             nowButton: false,
//             switchOnClick: true,
//             date: this.type === 'date' || this.type === 'datetime',
//             time: this.type === 'time' || this.type === 'datetime',
//             minDate: this.min,
//             maxDate: this.max,
//             triggerEvent: 'focus',
//             year: true
//         });

//         this.$button.on('change', (event, date) => {
//             this.onChange(date.toDate());
//             this.writeValue(this.value);
//         });
//     }

//     private dateOrTime(): string {
//         return this.type === 'date' ? 'DD/MM/YYYY' : (this.type === 'datetime' ? 'DD/MM/YYYY HH:mm' : 'HH:mm');
//     }

//     // Actualización Modelo -> Vista
//     writeValue(value: any) {
//         this.value = value;
//         const temp = this.value ? moment(this.value).format(this.format) : null;
//         this.setElements(temp);
//     }

//     hasDanger() {
//         return (this.control as any).name && (this.control.dirty || this.control.touched) && !this.control.valid;
//     }

//     // Actualización Vista -> Modelo
//     registerOnTouched() {
//     }

//     registerOnChange(fn) {
//         this.onChange = (event: Event) => {
//             let value = (event.target as HTMLInputElement).value;
//             if (typeof value === 'string') {
//                 const m = moment(value, this.format);
//                 if (m.isValid()) {
//                     (value as any) = m.toDate();
//                 } else {
//                     value = null;
//                 }
//             }

//             this.value = value;
//             fn(value);
//             if (this.changeTimeout) {
//                 clearTimeout(this.changeTimeout);
//             }
//             this.changeTimeout = setTimeout(() => {
//                 this.change.emit({
//                     value
//                 });
//             }, this.debounce);
//             this.typing.emit();
//         };
//     }

//     onBlur() {
//         this.writeValue(this.value);
//         this.blur.emit();
//     }

//     onFocus() {
//         this.focus.emit();
//     }

//     private fechaCambio(fecha1: Date, fecha2: Date): boolean {
//         if (fecha1 && !fecha2) {
//             return true;
//         } else {
//             if ((!fecha1 && fecha2)) {
//                 return true;
//             } else {
//                 return (fecha1 && fecha2 && fecha1.getTime() !== fecha2.getTime());
//             }
//         }
//     }

//     prev() {
//         this.disabledNext = false;
//         const temp = this.value ? moment(this.value, this.dateOrTime()).subtract(1, this.skipBy).format(this.format) : null;
//         this.setElements(temp);

//         this.disabledPrev = (moment(this.value, this.dateOrTime()).subtract(1, this.skipBy) <= this.min) ? true : false;
//         this.value = temp;
//         this.onChange(this.value);
//     }

//     next() {
//         this.disabledPrev = false;
//         const temp = this.value ? moment(this.value, this.dateOrTime()).add(1, this.skipBy).format(this.format) : null;

//         this.setElements(temp);

//         this.disabledNext = (moment(this.value, this.dateOrTime()).add(1, this.skipBy) >= this.max) ? true : false;

//         this.value = temp;
//         this.onChange(this.value);
//     }

//     private setElements(temp: string) {
//         if (this.$button) {
//             this.$button.val(temp);
//         }
//         if (this.$input) {
//             this.$input.val(temp);
//         }
//     }

//     makeTooltip(dir) {
//         return this.skipBy === 'hour' ? `hora ${dir}` : this.skipBy === 'day' ? `día ${dir}` : this.skipBy === 'month' ? `mes ${dir}` : `año ${dir}`;
//     }

//     get todayHintAction() {
//         return this.hintAction;
//     }
// }
