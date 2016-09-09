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
// https://github.com/angular/angular/blob/d2ad871279c410334314def0be5c5d0599f4368e/modules/%40angular/forms/src/directives/validators.ts
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var PlexNumberComponent = (function () {
    function PlexNumberComponent() {
        this.isError = false;
        // note that this must be named as the input name + "Change"
        this.plexModelChange = new core_1.EventEmitter();
    }
    PlexNumberComponent.prototype.ngOnInit = function () {
        // console.log("INIT:");
        // console.log("form: " + this.form);
        // console.log("control: " + this.control);
        // console.log("plexName: " + this.plexName);
        // console.log("plexPlaceholder: " + this.plexPlaceholder);
        // console.log(this.form.controls);
    };
    PlexNumberComponent.prototype.updateData = function (value) {
        this.plexModel = value;
        this.plexModelChange.emit(value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormControl)
    ], PlexNumberComponent.prototype, "control", void 0);
    __decorate([
        // * requerido si o si: usado para identificar el control dentro del formulario
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], PlexNumberComponent.prototype, "form", void 0);
    __decorate([
        // * requerido si o si: usado para identificar el control dentro del formulario
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexNumberComponent.prototype, "plexName", void 0);
    __decorate([
        // * requerido si o si: usado para identificar el control dentro del formulario
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexNumberComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexNumberComponent.prototype, "plexAutofocus", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexNumberComponent.prototype, "plexClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexNumberComponent.prototype, "plexDisabled", void 0);
    __decorate([
        // Bug: Poder pasar una funcion a validar como parametro
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexNumberComponent.prototype, "plexLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PlexNumberComponent.prototype, "plexMaxLength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PlexNumberComponent.prototype, "plexMinLength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexNumberComponent.prototype, "plexModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexNumberComponent.prototype, "plexPlaceholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexNumberComponent.prototype, "plexReadOnly", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexNumberComponent.prototype, "isError", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PlexNumberComponent.prototype, "plexModelChange", void 0);
    PlexNumberComponent = __decorate([
        core_1.Component({
            selector: 'plex-number',
            template: "\n    <div [formGroup]=\"form\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': control.touched && !control.valid }\">\n\n            <label >{{plexLabel}}</label>\n            <input type=\"number\" formControlName=\"{{plexName}}\" class=\"form-control {{plexClass}}\" placeholder=\"{{plexPlaceholder}}\"\n\n                [attr.minlength]=\"plexMinLength\"\n                [attr.maxlength]=\"plexMaxLength\"\n                [attr.readonly]=\"plexReadOnly\"\n\n                [attr.autofocus]=\"plexAutofocus\"\n                [attr.disabled]=\"plexDisabled\"\n\n\n                [(ngModel)]=\"plexModel\" (ngModelChange)=\"updateData($event)\"\n            />\n\n            <validation-messages [control]=\"control\"></validation-messages>\n\n        </div>\n    </div>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], PlexNumberComponent);
    return PlexNumberComponent;
}());
exports.PlexNumberComponent = PlexNumberComponent;
//# sourceMappingURL=plex-number.component.js.map