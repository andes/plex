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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ValidationMessagesComponent = (function () {
    function ValidationMessagesComponent() {
    }
    return ValidationMessagesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormControl)
], ValidationMessagesComponent.prototype, "control", void 0);
ValidationMessagesComponent = __decorate([
    core_1.Component({
        selector: 'plex-validation-messages',
        template: "<div class=\"help-block\" *ngIf=\"control.errors && control.errors.required\">\n                    <span>Valor requerido</span>\n               </div>\n               <div class=\"help-block\" *ngIf=\"control.errors && control.errors.min\">\n                    <span>Valor no permitido</span>\n               </div>\n               <div class=\"help-block\" *ngIf=\"control.errors && control.errors.max\">\n                    <span>Valor no permitido</span>\n               </div>\n               <div class=\"help-block\" *ngIf=\"control.errors && control.errors.minlength\">\n                    <span>Debe ingresar un m\u00EDnimo de {{control.errors.minlength.requiredLength}} caracteres</span>\n               </div>\n               <div class=\"help-block\" *ngIf=\"control.errors && control.errors.format\">\n                    <span>Formato incorrecto</span>\n               </div>\n               "
    }),
    __metadata("design:paramtypes", [])
], ValidationMessagesComponent);
exports.ValidationMessagesComponent = ValidationMessagesComponent;
//# sourceMappingURL=validation-messages.component.js.map