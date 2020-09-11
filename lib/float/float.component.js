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
var REGEX = /^\s*(\-)?(\d*|(\d*((,|\.)\d*)))\s*$/;
var PlexFloatComponent = /** @class */ (function () {
    function PlexFloatComponent(renderer) {
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
    PlexFloatComponent_1 = PlexFloatComponent;
    Object.defineProperty(PlexFloatComponent.prototype, "esRequerido", {
        get: function () {
            return validator_functions_1.hasRequiredValidator(this.control);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexFloatComponent.prototype, "autoFocus", {
        set: function (value) {
            // Cada vez que cambia el valor vuelve a setear el foco
            if (this.renderer) {
                this.renderer.invokeElementMethod(this.ref.nativeElement, 'focus');
            }
        },
        enumerable: true,
        configurable: true
    });
    PlexFloatComponent.prototype.disabledEvent = function (event) {
        event.stopImmediatePropagation();
        return false;
    };
    PlexFloatComponent.prototype.validate = function (c) {
        return this.validateFn(c);
    };
    PlexFloatComponent.prototype.ngOnChanges = function (changes) {
        // Cuando cambias las cotas, devuelve una nueva función de validación
        if (changes.min || changes.max) {
            this.validateFn = validator_functions_1.numberValidator(REGEX, this.min, this.max);
        }
    };
    // Inicialización
    PlexFloatComponent.prototype.ngOnInit = function () { };
    PlexFloatComponent.prototype.ngAfterViewInit = function () {
        if (this.autoFocus) {
            this.renderer.invokeElementMethod(this.ref.nativeElement, 'focus');
        }
    };
    // Actualización Modelo -> Vista
    PlexFloatComponent.prototype.writeValue = function (value) {
        this.renderer.setElementProperty(this.ref.nativeElement, 'value', typeof value === 'undefined' ? '' : value);
    };
    PlexFloatComponent.prototype.hasDanger = function () {
        return this.control.name && (this.control.dirty || this.control.touched) && !this.control.valid;
    };
    // Actualización Vista -> Modelo
    PlexFloatComponent.prototype.registerOnTouched = function () {
    };
    PlexFloatComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (value) {
            // Estas líneas evitan que se muestren caracteres no permitidos en el input
            if ((value === '') || REGEX.test(value)) {
                _this.lastValue = value.toString().replace('.', ',');
            }
            else {
                _this.writeValue(_this.lastValue);
                value = _this.lastValue;
            }
            // Emite los eventos
            var val = ((value == null) || (value === '')) ? null : Number.parseFloat(value.toString().replace(',', '.'));
            fn(val);
            _this.change.emit({
                value: val
            });
        };
    };
    var PlexFloatComponent_1;
    __decorate([
        core_1.ViewChild('ref', { static: true }),
        __metadata("design:type", core_1.ElementRef)
    ], PlexFloatComponent.prototype, "ref", void 0);
    __decorate([
        core_1.ContentChild(forms_1.NgControl, { static: true }),
        __metadata("design:type", Object)
    ], PlexFloatComponent.prototype, "control", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexFloatComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexFloatComponent.prototype, "prefix", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexFloatComponent.prototype, "suffix", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexFloatComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexFloatComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexFloatComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PlexFloatComponent.prototype, "min", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PlexFloatComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PlexFloatComponent.prototype, "autoFocus", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexFloatComponent.prototype, "change", void 0);
    PlexFloatComponent = PlexFloatComponent_1 = __decorate([
        core_1.Component({
            selector: 'plex-float',
            // Las siguientes líneas permiten acceder al atributo formControlName/ngModel
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return PlexFloatComponent_1; }),
                    multi: true
                },
                {
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return PlexFloatComponent_1; }),
                    multi: true
                }
            ],
            template: "\n         <div class=\"form-group\" [ngClass]=\"{'has-danger': hasDanger() }\">\n            <label *ngIf=\"label\" class=\"form-control-label\">{{label}}<span *ngIf=\"control.name && esRequerido\" class=\"requerido\"></span></label>\n            <div [ngClass]=\"{'input-group': prefix || suffix ||   suffixParent?.children.length > 0 ||  prefixParent?.children.length > 0}\">\n                <span *ngIf=\"prefix\" class=\"input-group-addon\" [innerHTML]=\"prefix\"></span>\n                <span #prefixParent [hidden]=\"prefixParent?.children.length === 0\" class=\"input-group-addon\">\n                    <ng-content select=\"[left]\"></ng-content>\n                </span>\n                <input #ref type=\"text\" class=\"form-control\" [disabled]=\"disabled\" [placeholder]=\"placeholder\" [disabled]=\"disabled\" [readonly]=\"readonly\" (input)=\"onChange($event.target.value)\" (change)=\"disabledEvent($event)\">\n                <span *ngIf=\"suffix\" class=\"input-group-addon\" [innerHTML]=\"suffix\"></span>\n                <span #suffixParent [hidden]=\"suffixParent?.children.length === 0\" class=\"input-group-addon\">\n                    <ng-content select=\"[right]\"></ng-content>\n                </span>\n            </div>\n            <plex-validation-messages *ngIf=\"hasDanger()\" [control]=\"control\"></plex-validation-messages>\n        </div>\n    ",
        }),
        __metadata("design:paramtypes", [core_1.Renderer])
    ], PlexFloatComponent);
    return PlexFloatComponent;
}());
exports.PlexFloatComponent = PlexFloatComponent;
//# sourceMappingURL=../../../src/lib/float/float.component.js.map