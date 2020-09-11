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
var REGEX = /^\s*(\-)?(\d*)\s*$/;
var PlexIntComponent = /** @class */ (function () {
    function PlexIntComponent(renderer) {
        this.lastValue = null;
        this.disabled = false;
        this.readonly = false;
        // Eventos
        this.change = new core_1.EventEmitter();
        // Funciones públicas
        this.onChange = function (_) { };
        // Validación
        this.validateFn = function (c) { };
        this.renderer = renderer;
        this.placeholder = '';
    }
    PlexIntComponent_1 = PlexIntComponent;
    Object.defineProperty(PlexIntComponent.prototype, "esRequerido", {
        get: function () {
            return validator_functions_1.hasRequiredValidator(this.control);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexIntComponent.prototype, "autoFocus", {
        set: function (value) {
            // Cada vez que cambia el valor vuelve a setear el foco
            if (this.renderer) {
                this.renderer.invokeElementMethod(this.ref.nativeElement, 'focus');
            }
        },
        enumerable: true,
        configurable: true
    });
    PlexIntComponent.prototype.disabledEvent = function (event) {
        event.stopImmediatePropagation();
        return false;
    };
    PlexIntComponent.prototype.validate = function (c) {
        return this.validateFn(c);
    };
    PlexIntComponent.prototype.ngOnChanges = function (changes) {
        // Cuando cambias las cotas, devuelve una nueva función de validación
        if (changes.min || changes.max) {
            this.validateFn = validator_functions_1.numberValidator(REGEX, this.min, this.max);
        }
    };
    // Inicialización
    PlexIntComponent.prototype.ngOnInit = function () { };
    PlexIntComponent.prototype.ngAfterViewInit = function () {
        if (this.autoFocus) {
            this.renderer.invokeElementMethod(this.ref.nativeElement, 'focus');
        }
    };
    // Actualización Modelo -> Vista
    PlexIntComponent.prototype.writeValue = function (value) {
        this.renderer.setElementProperty(this.ref.nativeElement, 'value', typeof value === 'undefined' ? '' : value);
    };
    PlexIntComponent.prototype.hasDanger = function () {
        return this.control.name && (this.control.dirty || this.control.touched) && !this.control.valid;
    };
    // Actualización Vista -> Modelo
    PlexIntComponent.prototype.registerOnTouched = function () {
    };
    PlexIntComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (value) {
            // Estas líneas evitan que se muestren caracteres no permitidos en el input
            if ((value === '') || REGEX.test(value)) {
                _this.lastValue = value;
            }
            else {
                _this.writeValue(_this.lastValue);
                value = _this.lastValue;
            }
            // Emite los eventos
            var val = ((value == null) || (value === '')) ? null : Number.parseInt(value, 10);
            fn(val);
            _this.change.emit({
                value: val
            });
        };
    };
    var PlexIntComponent_1;
    __decorate([
        core_1.ViewChild('ref', { static: true }),
        __metadata("design:type", core_1.ElementRef)
    ], PlexIntComponent.prototype, "ref", void 0);
    __decorate([
        core_1.ContentChild(forms_1.NgControl, { static: true }),
        __metadata("design:type", Object)
    ], PlexIntComponent.prototype, "control", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexIntComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexIntComponent.prototype, "prefix", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexIntComponent.prototype, "suffix", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexIntComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexIntComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexIntComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PlexIntComponent.prototype, "min", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PlexIntComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PlexIntComponent.prototype, "autoFocus", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexIntComponent.prototype, "change", void 0);
    PlexIntComponent = PlexIntComponent_1 = __decorate([
        core_1.Component({
            selector: 'plex-int',
            // Las siguientes líneas permiten acceder al atributo formControlName/ngModel
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return PlexIntComponent_1; }),
                    multi: true
                },
                {
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return PlexIntComponent_1; }),
                    multi: true
                },
            ],
            template: "\n        <div class=\"form-group\" [ngClass]=\"{'has-danger': hasDanger() }\">\n            <label *ngIf=\"label\" class=\"form-control-label\">{{label}}<span *ngIf=\"control.name && esRequerido\" class=\"requerido\"></span></label>\n            <div [ngClass]=\"{'input-group': prefix || suffix || prefixParent?.children.length > 0 || suffixParent?.children.length > 0} \">\n                <span *ngIf=\"prefix\" class=\"input-group-addon\" [innerHTML]=\"prefix\"></span>\n                <span #prefixParent [hidden]=\"prefixParent?.children.length === 0\" class=\"input-group-addon\">\n                    <ng-content select=\"[left]\"></ng-content>\n                </span>\n                <input #ref type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [placeholder]=\"placeholder\" [disabled]=\"disabled\" [readonly]=\"readonly\" (input)=\"onChange($event.target.value)\" (change)=\"disabledEvent($event)\">\n                <span *ngIf=\"suffix\" class=\"input-group-addon\" [innerHTML]=\"suffix\"></span>\n                <span #suffixParent [hidden]=\"suffixParent?.children.length === 0\" class=\"input-group-addon\">\n                    <ng-content select=\"[right]\"></ng-content>\n                </span>\n            </div>\n            <plex-validation-messages *ngIf=\"hasDanger()\" [control]=\"control\"></plex-validation-messages>\n        </div>\n    ",
        }),
        __metadata("design:paramtypes", [core_1.Renderer])
    ], PlexIntComponent);
    return PlexIntComponent;
}());
exports.PlexIntComponent = PlexIntComponent;
//# sourceMappingURL=../../../src/lib/int/int.component.js.map