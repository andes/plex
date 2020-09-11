"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var moment = require("moment");
var validator_functions_1 = require("../core/validator.functions");
// Importo las librerías de jQuery
// @jgabriel: No encontré una forma más elegante de incluir jQuery
// @andrrr: qué mal
var jQuery = window['jQuery'] = require('jquery/dist/jquery');
require('./bootstrap-material-datetimepicker/bootstrap-material-datetimepicker');
var PlexDateTimeComponent = /** @class */ (function () {
    function PlexDateTimeComponent(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.changeTimeout = null;
        this.hintAction = null;
        this.hintIcon = 'asterisk';
        this.disabled = false;
        this.readonly = false;
        this.skipBy = null;
        this.debounce = 0;
        this.size = 'md';
        this.btnOnly = false;
        // Eventos
        this.change = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        // Funciones públicas
        this.onChange = function (_) { };
        // Validación
        this.validateFn = function (c) { };
        this.placeholder = '';
        this.type = 'datetime';
    }
    PlexDateTimeComponent_1 = PlexDateTimeComponent;
    Object.defineProperty(PlexDateTimeComponent.prototype, "esRequerido", {
        get: function () {
            return validator_functions_1.hasRequiredValidator(this.control);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexDateTimeComponent.prototype, "showInput", {
        get: function () {
            return !this.btnOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexDateTimeComponent.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (value) {
            var temp = (value) ? moment(value).toDate() : null;
            if (this.fechaCambio(this._min, temp)) {
                this._min = temp;
                if (this.$button) {
                    this.$button.bootstrapMaterialDatePicker('setMinDate', this._min);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexDateTimeComponent.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (value) {
            var temp = (value) ? moment(value).toDate() : null;
            if (this.fechaCambio(this._max, temp)) {
                this._max = temp;
                if (this.$button) {
                    this.$button.bootstrapMaterialDatePicker('setMaxDate', this._max);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexDateTimeComponent.prototype, "showNav", {
        get: function () {
            return this.skipBy && this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexDateTimeComponent.prototype, "icon", {
        get: function () {
            return this.type === 'date' ? 'calendar' :
                (this.type === 'time' ? 'clock' :
                    (this.type === 'datetime' ? 'calendar-clock' : 'date'));
        },
        enumerable: true,
        configurable: true
    });
    PlexDateTimeComponent.prototype.validate = function (c) {
        return this.validateFn(c);
    };
    PlexDateTimeComponent.prototype.ngOnChanges = function (changes) {
        // Cuando cambias las cotas, devuelve una nueva función de validación
        if (changes.min || changes.max) {
            this.validateFn = validator_functions_1.dateValidator(this.type, this.min, this.max);
        }
    };
    PlexDateTimeComponent.prototype.ngOnDestroy = function () {
        this.$button.bootstrapMaterialDatePicker('destroy');
    };
    Object.defineProperty(PlexDateTimeComponent.prototype, "hintText", {
        get: function () {
            if (this.hintAction === 'current') {
                return "" + moment().format('DD/MM/YYYY HH:mm');
            }
            else if (this.hintAction === 'nextDay') {
                return moment().add(1, 'day').format('DD/MM/YYYY');
            }
            else if (this.hintAction === 'nextHour') {
                return moment().add(1, 'hour').startOf('hour').format('HH:mm');
            }
        },
        enumerable: true,
        configurable: true
    });
    PlexDateTimeComponent.prototype.getFormattedDate = function (action) {
        var formattedDate;
        if (action === 'current') {
            formattedDate = moment().format(this.format);
        }
        else if (action === 'nextDay') {
            formattedDate = moment().add(1, 'day').format(this.format);
        }
        else if (action === 'nextHour') {
            formattedDate = moment().add(1, 'hour').startOf('hour').format(this.format);
        }
        return formattedDate;
    };
    PlexDateTimeComponent.prototype.callAction = function (action) {
        this.hintAction = action;
        var temp = this.getFormattedDate(action);
        this.setElements(temp);
        this.value = temp;
        this.onChange(this.value);
    };
    PlexDateTimeComponent.prototype.disabledEvent = function (event) {
        event.stopImmediatePropagation();
        return false;
    };
    // Inicialización
    PlexDateTimeComponent.prototype.ngOnInit = function () { };
    PlexDateTimeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
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
        this.$button.on('change', function (event, date) {
            _this.onChange(date.toDate());
            _this.writeValue(_this.value);
        });
    };
    PlexDateTimeComponent.prototype.dateOrTime = function () {
        return this.type === 'date' ? 'DD/MM/YYYY' : (this.type === 'datetime' ? 'DD/MM/YYYY HH:mm' : 'HH:mm');
    };
    // Actualización Modelo -> Vista
    PlexDateTimeComponent.prototype.writeValue = function (value) {
        this.value = value;
        var temp = this.value ? moment(this.value).format(this.format) : null;
        this.setElements(temp);
    };
    PlexDateTimeComponent.prototype.hasDanger = function () {
        return this.control.name && (this.control.dirty || this.control.touched) && !this.control.valid;
    };
    // Actualización Vista -> Modelo
    PlexDateTimeComponent.prototype.registerOnTouched = function () {
    };
    PlexDateTimeComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (value) {
            if (typeof value === 'string') {
                var m = moment(value, _this.format);
                if (m.isValid()) {
                    value = m.toDate();
                }
                else {
                    value = null;
                }
            }
            _this.value = value;
            fn(value);
            if (_this.changeTimeout) {
                clearTimeout(_this.changeTimeout);
            }
            _this.changeTimeout = setTimeout(function () {
                _this.change.emit({
                    value: value
                });
            }, _this.debounce);
        };
    };
    PlexDateTimeComponent.prototype.onBlur = function () {
        this.writeValue(this.value);
        this.blur.emit();
    };
    PlexDateTimeComponent.prototype.onFocus = function () {
        this.focus.emit();
    };
    PlexDateTimeComponent.prototype.fechaCambio = function (fecha1, fecha2) {
        if (fecha1 && !fecha2) {
            return true;
        }
        else {
            if ((!fecha1 && fecha2)) {
                return true;
            }
            else {
                return (fecha1 && fecha2 && fecha1.getTime() !== fecha2.getTime());
            }
        }
    };
    PlexDateTimeComponent.prototype.prev = function () {
        var temp = this.value ? moment(this.value, this.dateOrTime()).subtract(1, this.skipBy).format(this.format) : null;
        this.setElements(temp);
        this.value = temp;
        this.onChange(this.value);
    };
    PlexDateTimeComponent.prototype.next = function () {
        var temp = this.value ? moment(this.value, this.dateOrTime()).add(1, this.skipBy).format(this.format) : null;
        this.setElements(temp);
        this.value = temp;
        this.onChange(this.value);
    };
    PlexDateTimeComponent.prototype.setElements = function (temp) {
        if (this.$button) {
            this.$button.val(temp);
        }
        if (this.$input) {
            this.$input.val(temp);
        }
    };
    PlexDateTimeComponent.prototype.makeTooltip = function (dir) {
        return this.skipBy === 'hour' ? "hora " + dir : this.skipBy === 'day' ? "d\u00EDa " + dir : this.skipBy === 'month' ? "mes " + dir : "a\u00F1o " + dir;
    };
    var PlexDateTimeComponent_1;
    __decorate([
        core_1.ContentChild(forms_1.NgControl, { static: true }),
        __metadata("design:type", forms_1.AbstractControl)
    ], PlexDateTimeComponent.prototype, "control", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], PlexDateTimeComponent.prototype, "autoFocus", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexDateTimeComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexDateTimeComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexDateTimeComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexDateTimeComponent.prototype, "hintAction", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexDateTimeComponent.prototype, "hintIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexDateTimeComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexDateTimeComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexDateTimeComponent.prototype, "skipBy", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexDateTimeComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexDateTimeComponent.prototype, "debounce", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexDateTimeComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexDateTimeComponent.prototype, "btnOnly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PlexDateTimeComponent.prototype, "min", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PlexDateTimeComponent.prototype, "max", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexDateTimeComponent.prototype, "change", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexDateTimeComponent.prototype, "blur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexDateTimeComponent.prototype, "focus", void 0);
    PlexDateTimeComponent = PlexDateTimeComponent_1 = __decorate([
        core_1.Component({
            selector: 'plex-datetime',
            providers: [
                // Permite acceder al atributo formControlName/ngModel
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return PlexDateTimeComponent_1; }),
                    multi: true,
                },
                {
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return PlexDateTimeComponent_1; }),
                    multi: true
                },
            ],
            template: "<div class=\"form-group datetime\" [ngClass]=\"{'has-danger': (control.dirty || control.touched) && !control.valid }\">\n                    <label *ngIf=\"label\" class=\"form-control-label\">\n                        {{ label }}\n                        <span *ngIf=\"control.name && esRequerido\" class=\"requerido\"></span>\n                    </label>\n                    <div *ngIf=\"hintAction\" hint=\"Seleccionar {{ hintText }}\" hintType=\"warning\" [hintIcon]=\"hintIcon\" (click)=\"callAction(hintAction)\"></div>\n                    <div class=\"input-group d-flex align-items-center\">\n                        <plex-button *ngIf=\"showNav\" type=\"info\" [size]=\"size\" icon=\"menu-left\" (click)=\"prev()\" [disabled]=\"disabled\" [tooltip]=\"makeTooltip('anterior')\"></plex-button>\n\n                        <input type=\"text\" class=\"form-control form-control-{{size}}\" [placeholder]=\"placeholder\" [disabled]=\"disabled\"\n                               [readonly]=\"readonly\" (input)=\"onChange($event.target.value)\" (blur)=\"onBlur()\" (focus)=\"onFocus()\"\n                               (change)=\"disabledEvent($event)\" *ngIf=\"showInput\"/>\n                        <span class=\"input-group-btn\">\n                            <plex-button tabIndex=\"-1\" type=\"info\" [size]=\"size\" [icon]=\"icon\" [disabled]=\"disabled || readonly\"></plex-button>\n                        </span>\n                        <plex-button *ngIf=\"showNav\" type=\"info\" [size]=\"size\" icon=\"menu-right\" (click)=\"next()\" [disabled]=\"disabled\" [tooltip]=\"makeTooltip('siguiente')\"></plex-button>\n                    </div>\n                    <plex-validation-messages *ngIf=\"hasDanger()\" [control]=\"control\"></plex-validation-messages>\n                </div>\n                ",
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
    ], PlexDateTimeComponent);
    return PlexDateTimeComponent;
}());
exports.PlexDateTimeComponent = PlexDateTimeComponent;
//# sourceMappingURL=../../../src/lib/datetime/datetime.component.js.map