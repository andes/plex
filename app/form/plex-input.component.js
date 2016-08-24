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
var PlexInputComponent = (function () {
    function PlexInputComponent() {
        this.isError = false;
        // note that this must be named as the input name + "Change"
        this.plexModelChange = new core_1.EventEmitter();
        if (!this.type) {
            this.type = 'text';
        }
        // if (this.id && !this.name){
        //   this.name = this.id;
        // }
        console.log(this.required);
    }
    PlexInputComponent.prototype.updateData = function (value) {
        this.plexModel = value;
        this.plexModelChange.emit(value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexInputComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexInputComponent.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexInputComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexInputComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexInputComponent.prototype, "required", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PlexInputComponent.prototype, "plexModel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexInputComponent.prototype, "labelText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexInputComponent.prototype, "isError", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PlexInputComponent.prototype, "plexModelChange", void 0);
    PlexInputComponent = __decorate([
        core_1.Component({
            selector: 'plex-input',
            // [ngClass]="{'has-error':isError}">
            template: "\n    <div class=\"form-group\">\n\n      <label >\n          {{labelText}}\n      </label>\n\n      <input type=\"{{type}}\" placeholder=\"{{placeholder}}\"\n        class=\"form-control {{ngClass}}\" name=\"{{name}}\" id=\"{{id}}\"\n        [(ngModel)]=\"plexModel\" (ngModelChange)=\"updateData($event)\"\n       />\n     </div>\n     ",
        }), 
        __metadata('design:paramtypes', [])
    ], PlexInputComponent);
    return PlexInputComponent;
}());
exports.PlexInputComponent = PlexInputComponent;
//# sourceMappingURL=plex-input.component.js.map