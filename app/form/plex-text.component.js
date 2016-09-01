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
var PlexTextComponent = (function () {
    function PlexTextComponent() {
        this.isError = false;
        // note that this must be named as the input name + "Change"
        this.plexModelChange = new core_1.EventEmitter();
        // console.log(this.form.);
        //         console.log("CONTROL NAME");
        //         console.log(this.form + ".controls." + this.plexName);
        //         return form + ".controls." + plexName;
        //         // if (this.plexMin){
        //         //   this.plexMin = parseInt(this.plexMin);
        //         // }
        //         // if (this.id && !this.name){
        //         //   this.name = this.id;
        //         // }
        //         console.log(this.plexModel);
        //         console.log(this.form);
        //         console.log(this.control);
        console.log("CONSTRUCTOR:");
    }
    PlexTextComponent.prototype.ngOnInit = function () {
        console.log("INIT:");
        console.log("form: " + this.form);
        console.log("control: " + this.control);
        console.log("plexName: " + this.plexName);
        console.log("plexPlaceholder: " + this.plexPlaceholder);
        console.log(this.form.controls);
    };
    PlexTextComponent.prototype.hasError = function () {
        // if (this.form.controls.this.plexName.touched && !form.controls.plexName.valid
        console.log(this.form);
    };
    PlexTextComponent.prototype.controlName = function () {
        // console.log("CONTROL NAME");
        // console.log(form + ".controls." + plexName);
        // return form + ".controls." + plexName;
    };
    PlexTextComponent.prototype.updateData = function (value) {
        this.plexModel = value;
        this.plexModelChange.emit(value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormControl)
    ], PlexTextComponent.prototype, "control", void 0);
    __decorate([
        // * requerido si o si
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroup)
    ], PlexTextComponent.prototype, "form", void 0);
    __decorate([
        // * requerido si o si
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexTextComponent.prototype, "plexName", void 0);
    __decorate([
        // * requerido si o si
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexTextComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexTextComponent.prototype, "plexPlaceholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexTextComponent.prototype, "plexModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexTextComponent.prototype, "plexClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexTextComponent.prototype, "plexAutofocus", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexTextComponent.prototype, "plexDisabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexTextComponent.prototype, "plexLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PlexTextComponent.prototype, "plexMaxLength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PlexTextComponent.prototype, "plexMinLength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PlexTextComponent.prototype, "plexMax", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PlexTextComponent.prototype, "plexMin", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PlexTextComponent.prototype, "plexModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexTextComponent.prototype, "plexRequired", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexTextComponent.prototype, "plexReadOnly", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexTextComponent.prototype, "isError", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PlexTextComponent.prototype, "plexModelChange", void 0);
    PlexTextComponent = __decorate([
        core_1.Component({
            selector: 'plex-text',
            // [ngClass]="{'has-error':isError}">
            template: "\n    <div [formGroup]=\"form\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': control.touched && !control.valid }\">\n\n            <label >{{plexLabel}}</label>\n            <input type=\"text\" formControlName=\"{{plexName}}\" class=\"form-control\" placeholder=\"{{plexPlaceholder}}\"\n\n             [(ngModel)]=\"plexModel\" (ngModelChange)=\"updateData($event)\"\n            />\n\n            <validation-messages [control]=\"control\"></validation-messages>\n\n        </div>\n    </div>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], PlexTextComponent);
    return PlexTextComponent;
}());
exports.PlexTextComponent = PlexTextComponent;
//# sourceMappingURL=plex-text.component.js.map