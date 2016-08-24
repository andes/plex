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
var PlexNumberComponent = (function () {
    function PlexNumberComponent() {
        this.isError = false;
        // note that this must be named as the input name + "Change"
        this.plexModelChange = new core_1.EventEmitter();
        // if (this.plexMin){
        //   this.plexMin = parseInt(this.plexMin);
        // }
        // if (this.id && !this.name){
        //   this.name = this.id;
        // }
        console.log(this.plexModel);
    }
    PlexNumberComponent.prototype.updateData = function (value) {
        this.plexModel = value;
        this.plexModelChange.emit(value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexNumberComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexNumberComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexNumberComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexNumberComponent.prototype, "plexAutofocus", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexNumberComponent.prototype, "plexDisabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexNumberComponent.prototype, "plexLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PlexNumberComponent.prototype, "plexMax", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], PlexNumberComponent.prototype, "plexMin", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PlexNumberComponent.prototype, "plexModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexNumberComponent.prototype, "plexRequired", void 0);
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
            // [ngClass]="{'has-error':isError}">
            template: "\n    <div class=\"form-group\">\n\n      <label >\n          {{plexLabel}}\n      </label>\n\n      <input type=\"number\" placeholder=\"{{placeholder}}\"\n      class=\"form-control {{ngClass}}\" name=\"{{name}}\" id=\"{{id}}\"\n\n      [attr.required]=\"plexRequired\" [attr.minlength]=\"plexMin\" [attr.maxlength]=\"plexMax\"\n      [attr.readonly]=\"plexReadOnly\" [attr.disabled]=\"plexDisabled\" [attr.autofocus]=\"plexAutofocus\"\n\n      [(ngModel)]=\"plexModel\" (ngModelChange)=\"updateData($event)\"\n\n      #edad=\"ngModel\"\n      />\n\n    </div>\n     ",
        }), 
        __metadata('design:paramtypes', [])
    ], PlexNumberComponent);
    return PlexNumberComponent;
}());
exports.PlexNumberComponent = PlexNumberComponent;
//# sourceMappingURL=plex-number.component.js.map