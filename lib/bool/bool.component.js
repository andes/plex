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
var PlexBoolComponent = /** @class */ (function () {
    function PlexBoolComponent() {
        this.readonly = false;
        this.change = new core_1.EventEmitter();
        // Funciones privadas
        this.onChange = function (_) { };
        this.type = 'checkbox';
    }
    PlexBoolComponent_1 = PlexBoolComponent;
    // Inicialización
    PlexBoolComponent.prototype.ngOnInit = function () { };
    PlexBoolComponent.prototype.ngAfterViewInit = function () { };
    // Actualización Modelo -> Vista
    PlexBoolComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    // Actualización Vista -> Modelo
    PlexBoolComponent.prototype.registerOnTouched = function (fn) { };
    PlexBoolComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (value) {
            fn(value);
            _this.change.emit({
                value: value
            });
        };
    };
    PlexBoolComponent.prototype.innerChange = function () {
        this.onChange(this.value);
    };
    var PlexBoolComponent_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexBoolComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexBoolComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexBoolComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexBoolComponent.prototype, "change", void 0);
    PlexBoolComponent = PlexBoolComponent_1 = __decorate([
        core_1.Component({
            selector: 'plex-bool',
            providers: [
                // Permite acceder al atributo formControlName/ngModel
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return PlexBoolComponent_1; }),
                    multi: true,
                }
            ],
            template: " <!-- Slide -->\n                <mat-slide-toggle *ngIf=\"type == 'slide'\" [(ngModel)]=\"value\" (change)=\"innerChange()\" [disabled]=\"readonly\" (click)=\"$event.stopPropagation()\">\n                    <span *ngIf=\"label\">\n                    {{label}}\n                </span>\n                </mat-slide-toggle>\n\n                <!-- Checbox -->\n                <mat-checkbox *ngIf=\"type == 'checkbox'\" [(ngModel)]=\"value\" (change)=\"innerChange()\" [disabled]=\"readonly\" (click)=\"$event.stopPropagation()\">\n                    <span *ngIf=\"label\">\n                    {{label}}\n                </span>\n                </mat-checkbox>\n                ",
        }),
        __metadata("design:paramtypes", [])
    ], PlexBoolComponent);
    return PlexBoolComponent;
}());
exports.PlexBoolComponent = PlexBoolComponent;
//# sourceMappingURL=../../../src/lib/bool/bool.component.js.map