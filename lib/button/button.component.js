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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var PlexButtonComponent = /** @class */ (function () {
    function PlexButtonComponent(parentForm) {
        this.parentForm = parentForm;
        this.size = 'md';
        /**
         * Previene el problema del click bubbling. Ver template para más usos de pointer-events
         */
        this.pointerEvents = 'none';
        this.type = 'default';
        this.disabled = false;
    }
    PlexButtonComponent.prototype.clickHandler = function () {
        // Si está asociado a un formulario, fuerza la validación de los controles
        if (this.validateForm) {
            var form = (this.validateForm instanceof forms_1.NgForm) ? this.validateForm : this.parentForm;
            if (!form) {
                throw new Error('plex-button no pudo vincularse a ningún NgForm');
            }
            for (var key in form.controls) {
                form.controls[key].markAsDirty();
            }
            // Inyecta la propiedad para que sea fácilmente accesible desde los controladores
            if (event) {
                event.formValid = form.valid;
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PlexButtonComponent.prototype, "tabIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexButtonComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexButtonComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexButtonComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexButtonComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexButtonComponent.prototype, "validateForm", void 0);
    __decorate([
        core_1.Input(), core_1.HostBinding('attr.disabled'),
        __metadata("design:type", Boolean)
    ], PlexButtonComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), core_1.HostBinding('style.pointer-events'),
        __metadata("design:type", Object)
    ], PlexButtonComponent.prototype, "pointerEvents", void 0);
    __decorate([
        core_1.HostListener('click', ['event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PlexButtonComponent.prototype, "clickHandler", null);
    PlexButtonComponent = __decorate([
        core_1.Component({
            selector: 'plex-button',
            template: "\n        <ng-container *ngIf=\"type\">\n                <button plexRipples style=\"pointer-events: auto\" [tabIndex]=\"tabIndex\" class=\"btn btn-{{type}} {{(size ? 'btn-' + size : '')}}\" [disabled]=\"disabled\">\n                    <plex-icon\n                        *ngIf=\"icon\"\n                        [name]=\"icon\"\n                        type=\"light\"\n                        [size]=\"size\"\n                        [style.pointer-events]=\"disabled ? 'none': null\">\n                    </plex-icon>\n                    <span *ngIf=\"label\" [style.pointer-events]=\"disabled ? 'none': null\">\n                        {{ label }}\n                    </span>\n                    <ng-content *ngIf=\"!icon && !label\"></ng-content>\n                </button>\n            </ng-container>\n    ",
        }),
        __param(0, core_1.Optional()),
        __metadata("design:paramtypes", [forms_1.NgForm])
    ], PlexButtonComponent);
    return PlexButtonComponent;
}());
exports.PlexButtonComponent = PlexButtonComponent;
//# sourceMappingURL=../../../src/lib/button/button.component.js.map