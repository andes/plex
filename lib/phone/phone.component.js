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
var validator_functions_1 = require("../core/validator.functions");
var RegEx_Mobile = /^[1-3][0-9]{9}$/;
var RegEx_Numero = /^(\d)+$/;
var PlexPhoneComponent = /** @class */ (function () {
    function PlexPhoneComponent(renderer) {
        this.lastValue = null;
        this.readonly = false;
        this.disabled = false;
        // Eventos
        this.valueChange = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this.focusout = new core_1.EventEmitter();
        // Funciones públicas
        this.onChange = function (_) { };
        this.renderer = renderer;
        this.placeholder = '';
    }
    PlexPhoneComponent_1 = PlexPhoneComponent;
    Object.defineProperty(PlexPhoneComponent.prototype, "esRequerido", {
        get: function () {
            return validator_functions_1.hasRequiredValidator(this.control);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexPhoneComponent.prototype, "autoFocus", {
        set: function (value) {
            // Cada vez que cambia el valor vuelve a setear el foco
            if (this.renderer) {
                this.renderer.invokeElementMethod(this.ref.nativeElement, 'focus');
            }
        },
        enumerable: true,
        configurable: true
    });
    PlexPhoneComponent.prototype.onFocus = function () {
        this.focus.emit();
    };
    PlexPhoneComponent.prototype.onFocusout = function () {
        this.focusout.emit();
    };
    // Validación
    PlexPhoneComponent.prototype.validate = function (c) {
        if (c.value && !RegEx_Mobile.test(c.value)) {
            return {
                format: {
                    given: c.value,
                }
            };
        }
        else {
            return null;
        }
    };
    // Inicialización
    PlexPhoneComponent.prototype.ngOnInit = function () { };
    PlexPhoneComponent.prototype.ngAfterViewInit = function () {
        if (this.autoFocus) {
            this.renderer.invokeElementMethod(this.ref.nativeElement, 'focus');
        }
    };
    // Actualización Modelo -> Vista
    PlexPhoneComponent.prototype.writeValue = function (value) {
        this.renderer.setElementProperty(this.ref.nativeElement, 'value', value);
    };
    PlexPhoneComponent.prototype.hasDanger = function () {
        return this.control.name && (this.control.dirty || this.control.touched) && !this.control.valid;
    };
    // Actualización Vista -> Modelo
    PlexPhoneComponent.prototype.registerOnTouched = function () {
    };
    PlexPhoneComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (value) {
            // Estas líneas evitan que se muestren caracteres no permitidos en el input
            if ((value === '') || RegEx_Numero.test(value)) {
                _this.lastValue = value;
            }
            else {
                _this.writeValue(_this.lastValue);
                value = _this.lastValue;
            }
            // Emite los eventos
            var val = ((value === null) || (value === '')) ? null : parseInt(value, 10);
            fn(val);
            _this.valueChange.emit({ value: val });
        };
    };
    var PlexPhoneComponent_1;
    __decorate([
        core_1.ContentChild(forms_1.NgControl, { static: true }),
        __metadata("design:type", Object)
    ], PlexPhoneComponent.prototype, "control", void 0);
    __decorate([
        core_1.ViewChild('ref', { static: true }),
        __metadata("design:type", core_1.ElementRef)
    ], PlexPhoneComponent.prototype, "ref", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexPhoneComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexPhoneComponent.prototype, "prefix", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexPhoneComponent.prototype, "suffix", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexPhoneComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexPhoneComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexPhoneComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexPhoneComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PlexPhoneComponent.prototype, "autoFocus", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexPhoneComponent.prototype, "valueChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexPhoneComponent.prototype, "focus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexPhoneComponent.prototype, "focusout", void 0);
    PlexPhoneComponent = PlexPhoneComponent_1 = __decorate([
        core_1.Component({
            selector: 'plex-phone',
            // Las siguientes líneas permiten acceder al atributo formControlName/ngModel
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return PlexPhoneComponent_1; }),
                    multi: true
                },
                {
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return PlexPhoneComponent_1; }),
                    multi: true
                },
            ],
            template: " <div class=\"form-group\" [ngClass]=\"{'has-danger': hasDanger() }\">\n                    <label *ngIf=\"label\" class=\"form-control-label\">{{label}}<span *ngIf=\"control.name && esRequerido\" class=\"requerido\"></span></label>\n                    <div [ngClass]=\"{'input-group': prefix || suffix || icon}\">\n                        <span *ngIf=\"prefix\" class=\"input-group-addon\" [innerHTML]=\"prefix\"></span>\n\n                        <span *ngIf=\"icon\" class=\"input-group-addon\">\n                            <plex-icon type=\"default\" size=\"md\" [name]=\"icon\"></plex-icon>\n                        </span>\n\n                        <input #ref type=\"text\" class=\"form-control\" [placeholder]=\"placeholder\" [disabled]=\"disabled\" [readonly]=\"readonly\" (input)=\"onChange($event.target.value)\" (focus)=\"onFocus()\" (focusout)=\"onFocusout()\">\n                        <span *ngIf=\"suffix\" class=\"input-group-addon\" [innerHTML]=\"suffix\"></span>\n                    </div>\n                    <plex-validation-messages *ngIf=\"hasDanger()\" [control]=\"control\"></plex-validation-messages>\n                </div>",
        }),
        __metadata("design:paramtypes", [core_1.Renderer])
    ], PlexPhoneComponent);
    return PlexPhoneComponent;
}());
exports.PlexPhoneComponent = PlexPhoneComponent;
//# sourceMappingURL=../../../src/lib/phone/phone.component.js.map