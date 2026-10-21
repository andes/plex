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
    ViewChild,
    OnDestroy,
    ChangeDetectorRef
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
                        <mat-datepicker #datePicker [touchUi]="true" type="datetime" >
                            <mat-datepicker-actions>
                                <plex-button class="btn-ok-fecha" matDatepickerApply type="info" size="sm" label="Aceptar"
                                            [disabled]="!hasDaySelected">
                                </plex-button>
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
                                [ngModel]="pendingDateTime ?? _value"
                                (ngModelChange)="pendingDateTime = $event"
                                [min]="min" [max]="max"
                                [disabled]="disabled" [readonly]="readonly"
                                (dateChange)="onDateTimeChange($event, 'date')">

                                <mat-datepicker #datePicker [touchUi]="true">
                            <mat-datepicker-actions>
                                <plex-button class="btn-ok-fecha" matDatepickerApply type="info" size="sm" label="Aceptar"
                                            [disabled]="!hasDaySelected"></plex-button>
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

export class PlexDateTimeComponent implements AfterViewInit, OnChanges, OnDestroy, ControlValueAccessor {

    @ViewChild('datePicker') datePicker?: MatDatepicker<Date>;
    @ViewChild('dateTimePicker') dateTimePicker?: NgxMatTimepickerComponent;
    @ViewChild('timePicker') timePicker?: NgxMatTimepickerComponent;

    private _min: Date | null = null;
    private _max: Date | null = null;
    private _format = 'DD/MM/YYYY HH:mm';
    private changeTimeout: any = null;
    public pendingDateTime: Date | null = null; // Fecha temporal utilizada hasta confirmar la hora, sin modificar el valor del formulario.
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
            this.actualizarLimitesHorarios();
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
            this.actualizarLimitesHorarios();
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
    hasDaySelected = false; // Controla si la fecha seleccionada permite habilitar el botón Aceptar.

    constructor(
        private element: ElementRef<HTMLElement>,
        private injector: Injector,
        private cdr: ChangeDetectorRef
    ) {
        this.placeholder = '';
        this.type = 'datetime';
    }

    ngAfterViewInit() {
        this.control = this.injector.get(NgControl, null);
        if (this.control?.control) {
            this.control.control.addValidators(this.validate.bind(this));
            this.control.control.updateValueAndValidity({ emitEvent: false });
        }

        this._format = this.dateOrTime();
        if (this.autoFocus) {
            const input: HTMLInputElement | null = this.element.nativeElement?.querySelector('input[data-main]');
            input?.focus();
        }

        this.datePicker?.openedStream.subscribe(() => {
            // Habilita el botón Aceptar del datepicker si existe una fecha preseleccionada válida
            const selectedDate = this.type === 'datetime'
                ? (this.pendingDateTime ?? this._value)
                : this._value;

            this.hasDaySelected = !!selectedDate &&
                moment(selectedDate).isValid() &&
                (!this.min || moment(selectedDate).isSameOrAfter(moment(this.min), 'day')) &&
                (!this.max || moment(selectedDate).isSameOrBefore(moment(this.max), 'day'));

            this.cdr.detectChanges();

            setTimeout(() => {
                // Accede al overlay interno de Material para detectar clics en fechas deshabilitadas.
                const dpAny = this.datePicker as any;
                const overlayEl: HTMLElement | null = dpAny?._overlayRef?.overlayElement ?? null;
                if (!overlayEl) { return; }

                // Detecta selecciones en el calendario, incluyendo fechas deshabilitadas.
                const handler = (ev: MouseEvent) => {
                    const target = ev.target as HTMLElement | null;
                    const cell = target?.closest('.mat-calendar-body-cell');

                    if (!cell) {
                        return;
                    }

                    // Aceptar solo si la última fecha seleccionada está habilitada.
                    const isDisabled =
                        cell.classList.contains('mat-calendar-body-disabled') ||
                        cell.getAttribute('aria-disabled') === 'true';

                    this.hasDaySelected = !isDisabled;
                    this.cdr.detectChanges();
                };

                overlayEl.addEventListener('click', handler, true);
                this.removeClickListener = () => overlayEl.removeEventListener('click', handler, true);
            }, 0);
        });

        this.datePicker?.closedStream.subscribe(() => this.cleanup());
    }

    ngOnDestroy() {
        this.cleanup();
    }

    private cleanup() {
        // Evita listeners acumulados al abrir y cerrar el calendario.
        this.removeClickListener?.();
        this.removeClickListener = undefined;
    }

    ngOnChanges(changes: any) {
        if (changes.min || changes.max || changes.type) {
            this._format = this.dateOrTime();
            this.validateFn = dateValidator(this.type, this.min, this.max);
            this.control?.control?.updateValueAndValidity({ emitEvent: false });
        }
    }

    private removeClickListener?: () => void;

    private actualizarLimitesHorarios(fecha?: Date | null): void {
        if (this.type === 'time') {
            this.minTimeString = this._min ? this.toHHmm(this._min) : '00:00';
            this.maxTimeString = this._max ? this.toHHmm(this._max) : '23:59';
            return;
        }
        if (this.type !== 'datetime') {
            return;
        }
        const seleccionada = fecha ?? this.pendingDateTime ?? this._value;

        this.minTimeString = this._min && seleccionada &&
            moment(seleccionada).isSame(this._min, 'day')
            ? this.toHHmm(this._min)
            : '00:00';

        this.maxTimeString = this._max && seleccionada &&
            moment(seleccionada).isSame(this._max, 'day')
            ? this.toHHmm(this._max)
            : '23:59';
    }

    writeValue(value: any) {
        this._value = value ? moment(value).toDate() : null;
        this.timeString = this._value ? moment(this._value).format('HH:mm') : '';
        this.dateTimeString = this._value ? moment(this._value).format(this._format) : '';
        this.pendingDateTime = null;
        this.actualizarLimitesHorarios();
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
        if (this.disabled || this.readonly) {
            return;
        }

        if (this.type === 'datetime') {
            this.pendingDateTime = null;
            this.datePicker?.open();
        } else if (this.type === 'date') {
            this.datePicker?.open();
        } else {
            this.timePicker?.open();
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
        this.dateTimeString = this._value ? moment(this._value).format(this._format) : '';
        this.emitChange(true);
    }

    // type === 'datetime' (calendario)
    onDateTimeChange(ev: any, pickerType: 'date' | 'time') {

        if (pickerType === 'date') {
            // Guardamos la fecha temporalmente hasta que se confirme la hora.
            const selectedDate = ev?.value;

            if (selectedDate) {
                this.pendingDateTime = moment(selectedDate).toDate();
            }

            this.actualizarLimitesHorarios();
            this.cdr.detectChanges();

            // Abrimos el reloj, pero NO emitimos cambios.
            this.dateTimePicker?.open();
            return;
        }

        const input = ev?.targetElement?.value || ev;

        if (!this.pendingDateTime || typeof input !== 'string') {
            return;
        }

        const [hh, mm] = input.split(':').map(Number);

        if (!Number.isInteger(hh) || !Number.isInteger(mm) ||
            hh < 0 || hh > 23 || mm < 0 || mm > 59) {
            return;
        }

        const m = moment(this.pendingDateTime).set({
            hour: hh,
            minute: mm,
            second: 0,
            millisecond: 0
        });

        if (!m.isValid()) {
            return;
        }

        // Recién ahora confirmamos el valor.
        this._value = m.toDate();
        this.dateTimeString = m.format(this._format);
        this.timeString = m.format('HH:mm');

        this.pendingDateTime = null;

        // Una única notificación al formulario.
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
