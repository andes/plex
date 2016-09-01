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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var validation_service_1 = require('./app/service/validation.service');
var ValidationMessagesComponent = (function () {
    function ValidationMessagesComponent() {
    }
    Object.defineProperty(ValidationMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return validation_service_1.ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormControl)
    ], ValidationMessagesComponent.prototype, "control", void 0);
    ValidationMessagesComponent = __decorate([
        core_1.Component({
            selector: 'control-messages',
            template: "<div *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ValidationMessagesComponent);
    return ValidationMessagesComponent;
}());
exports.ValidationMessagesComponent = ValidationMessagesComponent;
//# sourceMappingURL=message-validator.component.js.map