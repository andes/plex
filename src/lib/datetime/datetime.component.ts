import {
    Component,
    Input,
    Output,
    ElementRef,
    EventEmitter,
    AfterViewInit,
    OnChanges,
    ChangeDetectionStrategy,
    forwardRef,
    Injector,
    ViewChild
} from '@angular/core';
import { NgControl, UntypedFormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { dateValidator, hasRequiredValidator } from '../core/validator.functions';
import { MatDatepicker } from '@angular/material/datepicker';
import { NgxMatTimepickerComponent } from 'ngx-mat-timepicker';
import * as _moment from 'moment';
const moment = (_moment as any).default || _moment;
export type Moment = _moment.Moment;

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

                <!-- Calendario -->
                <ng-container [ngSwitch]="type">

                    <!-- DATE: solo fecha -->
                    <ng-container *ngSwitchCase="'date'">
                        <input data-main matInput [ngClass]="{'hidden': btnOnly}" class="form-control form-control-{{size}}"
                                [matDatepicker]="datePicker"
                                [(ngModel)]="_value" [min]="min" [max]="max"
                                [placeholder]="placeholder" [disabled]="disabled" [readonly]="readonly"
                                (dateChange)="onDateChange($event)">
                        <mat-datepicker #datePicker [touchUi]="true" type="datetime">
                            <mat-datepicker-actions>
                                <plex-button class="btn-ok-fecha" matDatepickerApply type="info" size="sm" label="Aceptar"></plex-button>
                            </mat-datepicker-actions>
                        </mat-datepicker>
                    </ng-container>

                    <!-- DATETIME: fecha y hora -->
                    <ng-container *ngSwitchCase="'datetime'">
                        <input data-main matInput [ngClass]="{'hidden': btnOnly}" class="form-control form-control-{{size}}"
                                [(ngModel)]="dateTimeString" [min]="min" [max]="max"
                                [placeholder]="placeholder" [disabled]="disabled" [readonly]="readonly"
                                (change)="onInputDateTimeChange($event)">

                        <input data-main matInput class="hidden" [matDatepicker]="datePicker"
                                [(ngModel)]="_value" [min]="min" [max]="max"
                                [disabled]="disabled" [readonly]="readonly"
                                (dateChange)="onDateTimeChange($event, 'date')">

                                <mat-datepicker #datePicker [touchUi]="true">
                            <mat-datepicker-actions>
                                <plex-button class="btn-ok-fecha" matDatepickerApply type="info" size="sm" label="Aceptar"></plex-button>
                            </mat-datepicker-actions>
                        </mat-datepicker>

                        <input data-main matInput class="hidden"
                                [ngxMatTimepicker]="dateTimePicker" [format]="24" [disableClick]="true"
                                [(ngModel)]="timeString" [min]="minTimeString" [max]="maxTimeString"
                                [disabled]="disabled" [readonly]="readonly">

                                <ngx-mat-timepicker #dateTimePicker [cancelBtnTmpl]="emptyTpl" [confirmBtnTmpl]="okTpl"
                                (timeSet)="onDateTimeChange($event, 'time')">
                        </ngx-mat-timepicker>
                    </ng-container>

                    <!-- TIME: solo hora -->
                    <ng-container *ngSwitchCase="'time'">
                        <input data-main matInput [ngClass]="{'hidden': btnOnly}" class="form-control form-control-{{size}}"
                                [(ngModel)]="timeString" [min]="minTimeString" [max]="maxTimeString"
                                [placeholder]="placeholder" [disabled]="disabled" [readonly]="readonly"
                                (change)="onTimeChange($event)">

                        <input data-main matInput class="hidden"
                                [ngxMatTimepicker]="timePicker" [disableClick]="true" [format]="24"
                                [(ngModel)]="dateTimeString" [min]="minTimeString" [max]="maxTimeString"
                                [placeholder]="placeholder" [disabled]="disabled" [readonly]="readonly">

                                <ngx-mat-timepicker #timePicker [cancelBtnTmpl]="emptyTpl" [confirmBtnTmpl]="okTpl"
                                (timeSet)="onTimeChange($event)">
                        </ngx-mat-timepicker>
                    </ng-container>

                    <!-- botón Aceptar para reloj-->
                    <ng-template #okTpl>
                        <plex-button type="info" size="sm" label="Aceptar"></plex-button>
                    </ng-template>

                    <!-- boton cancelar (oculto) -->
                    <ng-template #emptyTpl></ng-template>

                </ng-container>

                <span class="input-group-btn">
                    <plex-button [tabIndex]="-1" type="info" [size]="size" [icon]="icon" [disabled]="disabled || readonly" (click)="abrir()"></plex-button>
                </span>

                <plex-button *ngIf="showNav" type="info" [size]="size" icon="menu-right"
                            (click)="next()" [disabled]="disabledNext" [tooltip]="makeTooltip('siguiente')">
                </plex-button>
            </div>

            <plex-validation-messages *ngIf="hasDanger()" [control]="control?.control"></plex-validation-messages>
        </div>
    `,
})

export class PlexDateTimeComponent implements AfterViewInit, OnChanges, ControlValueAccessor {

    @ViewChild(MatDatepicker) datePicker?: MatDatepicker<Date>;
    @ViewChild(NgxMatTimepickerComponent) dateTimePicker?: NgxMatTimepickerComponent;
    @ViewChild(NgxMatTimepickerComponent) timePicker?: NgxMatTimepickerComponent;

    private _min: Date | null = null;
    private _max: Date | null = null;
    private _format = 'DD/MM/YYYY HH:mm';
    private changeTimeout: any = null;
    public _value: Date | null = null;
    public dateTimeString = '';
    public timeString = '';
    public minTimeString = '00:00';
    public maxTimeString = '23:59';

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
            this.minTimeString = this.toHHmm(temp);
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
            this.maxTimeString = this.toHHmm(temp);
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
    control?: NgControl;

    constructor(
        private element: ElementRef<HTMLElement>,
        private injector: Injector) {
        this.placeholder = '';
        this.type = 'datetime';
    }

    ngAfterViewInit() {
        this.control = this.injector.get(NgControl, null);
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
        }
    }

    writeValue(value: any) {
        this._value = value ? moment(value).toDate() : null;
        this.timeString = this._value ? moment(this._value).format('HH:mm') : '';
        this.dateTimeString = this._value ? moment(this._value).format('DD/MM/YYYY HH:mm') : '';
    }

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

    abrir(): void {
        if (this.disabled || this.readonly) { return; }

        if (this.type === 'date' || this.type === 'datetime') {
            this.datePicker?.open();
        } else {
            this.timePicker?.open(); // type === 'time'
        }
    }

    callAction(action: 'today' | 'nextDay' | 'nextHour' | 'custom') {
        this.hintAction = action;
        const temp = action === 'custom' ? this.customText() : this.getFormattedDate(action);
        const parsed = temp ? moment(temp, this._format) : null;
        this._value = parsed?.isValid() ? parsed.toDate() : null;
        this.emitChange();
    }

    registerOnChange(fn: (val: Date | null) => void) { this.propagateChange = fn; }
    registerOnTouched(fn: () => void) { this.onTouched = fn; }
    setDisabledState(isDisabled: boolean) { this.disabled = isDisabled; }

    // type === 'date'
    onDateChange(ev: any) {
        const input = ev.targetElement?.value || ev.target?.value;
        if (!input) {
            return;
        }
        const m = moment(input, this._format);
        this._value = m.isValid() ? m.toDate() : null;
        this.emitChange(true);
    }

    // type === 'datetime' (input)
    onInputDateTimeChange(ev: any) {
        const input = ev.target?.value;
        if (!input || !input.length) {
            this._value = null;
            this.dateTimeString = '';
            this.emitChange(true);
            return;
        }
        const m = moment(this.dateTimeString, this._format);
        this._value = m.isValid() ? m.toDate() : null;
        this.dateTimeString = this._value ? moment(this._value).format('DD/MM/YYYY HH:mm') : '';
        this.emitChange(true);
    }

    // type === 'datetime' (calendario)
    onDateTimeChange(ev: any, pickerType: 'date' | 'time') {
        const input = ev?.targetElement?.value || ev;

        if (pickerType === 'date') {
            this.dateTimeString = this._value ? moment(this._value).format('DD/MM/YYYY HH:mm') : '';
            this.timePicker?.open();
        } else { // pickerType === 'time'
            const [hh, mm] = input.split(':').map(Number);
            const m = moment(this._value).set({ hour: hh, minute: mm, second: 0, millisecond: 0 });
            const mFormated = moment(m, this._format);
            this._value = mFormated.isValid() ? mFormated.toDate() : null;
            this.dateTimeString = this._value ? moment(this._value).format('DD/MM/YYYY HH:mm') : '';
        }
        this.emitChange(true);
    }

    // type === 'time'
    onTimeChange(ev: any) {
        const input = ev.target?.value || ev;
        if (!input) {
            this._value = null;
            this.timeString = '';
            this.emitChange(true);
            return;
        }
        const m = moment(input, this._format);
        this._value = m.isValid() ? m.toDate() : null;
        this.timeString = this._value ? this.toHHmm(this._value) : '';
        this.emitChange(true);
    }

    onBlur() {
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

    // --- varios ---
    hasDanger() {
        return (this.control as any)?.name && (this.control.dirty || this.control.touched) && !this.control.valid;
    }

    makeTooltip(dir: 'anterior' | 'siguiente') {
        return this.skipBy === 'hour' ? `hora ${dir}` :
            this.skipBy === 'day' ? `día ${dir}` :
                this.skipBy === 'month' ? `mes ${dir}` : `año ${dir}`;
    }

    get todayHintAction() { return this.hintAction; }

    private emitChange(isTyping = false) {
        this.propagateChange(this._value);
        if (this.changeTimeout) {
            clearTimeout(this.changeTimeout);
        }
        let newValue;
        switch (this.type) {
            case 'date': newValue = this._value; break;
            case 'time': newValue = this.timeString; break;
            case 'datetime': newValue = this.dateTimeString; break;
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
