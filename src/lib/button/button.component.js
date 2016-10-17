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
var PlexButtonComponent = (function () {
    function PlexButtonComponent() {
        this.type = "default";
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexButtonComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexButtonComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexButtonComponent.prototype, "type", void 0);
    PlexButtonComponent = __decorate([
        core_1.Component({
            selector: 'plex-button',
            template: "<button class=\"btn btn-{{type}}\">\n                <i *ngIf=\"icon\" class=\"mdi mdi-{{icon}}\"></i>\n                <span *ngIf=\"title\">\n                  {{title}}\n                </span>\n            </button>"
        }), 
        __metadata('design:paramtypes', [])
    ], PlexButtonComponent);
    return PlexButtonComponent;
}());
exports.PlexButtonComponent = PlexButtonComponent;
//# sourceMappingURL=button.component.js.map