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
var PlexRadioComponent = /** @class */ (function () {
    function PlexRadioComponent() {
        this.type = 'vertical';
        this.change = new core_1.EventEmitter();
        // Funciones privadas
        this.onChange = function (_) { };
    }
    PlexRadioComponent_1 = PlexRadioComponent;
    Object.defineProperty(PlexRadioComponent.prototype, "esRequerido", {
        get: function () {
            return validator_functions_1.hasRequiredValidator(this.control);
        },
        enumerable: true,
        configurable: true
    });
    // Inicialización
    PlexRadioComponent.prototype.ngOnInit = function () {
    };
    PlexRadioComponent.prototype.ngAfterViewInit = function () { };
    // Actualización Modelo -> Vista
    PlexRadioComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    // Actualización Vista -> Modelo
    PlexRadioComponent.prototype.registerOnTouched = function (fn) { };
    PlexRadioComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (value) {
            fn(value);
            _this.change.emit({
                value: value
            });
        };
    };
    PlexRadioComponent.prototype.radioChange = function (event) {
        this.control.control.markAsTouched();
        this.onChange(event.value);
    };
    var PlexRadioComponent_1;
    __decorate([
        core_1.ContentChild(forms_1.NgControl, { static: false }),
        __metadata("design:type", Object)
    ], PlexRadioComponent.prototype, "control", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], PlexRadioComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexRadioComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], PlexRadioComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexRadioComponent.prototype, "type", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexRadioComponent.prototype, "change", void 0);
    PlexRadioComponent = PlexRadioComponent_1 = __decorate([
        core_1.Component({
            selector: 'plex-radio',
            providers: [
                // Permite acceder al atributo formControlName/ngModel
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return PlexRadioComponent_1; }),
                    multi: true,
                }
            ],
            template: "<div class=\"form-group\" [ngClass]=\"{'has-danger': (control.dirty || control.touched) && !control.valid }\">\n                <label *ngIf=\"label\" class=\"form-control-label\">{{label}}\n                    <span *ngIf=\"control.name && esRequerido\" class=\"requerido\"></span>\n                </label>\n                <mat-radio-group [(ngModel)]=\"value\">\n                    <mat-radio-button *ngFor=\"let item of data\" [value]=\"item.id\" [disabled]=\"readonly\" (change)=\"radioChange($event)\" [ngClass]=\"{'d-block': type == 'vertical'}\">\n                        {{item.label || item.text}}\n                     </mat-radio-button>\n                 </mat-radio-group>\n                 <!-- Validation -->\n                 <plex-validation-messages *ngIf=\"(control.dirty || control.touched) && !control.valid\" [control]=\"control\"></plex-validation-messages>\n               </div>\n              "
        })
    ], PlexRadioComponent);
    return PlexRadioComponent;
}());
exports.PlexRadioComponent = PlexRadioComponent;
//# sourceMappingURL=../../../src/lib/radio/radio.component.js.map