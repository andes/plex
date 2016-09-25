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
var box_footer_component_1 = require('./box-footer.component');
var PlexBoxComponent = (function () {
    function PlexBoxComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexBoxComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexBoxComponent.prototype, "type", void 0);
    PlexBoxComponent = __decorate([
        core_1.Component({
            selector: 'plex-box',
            directives: [box_footer_component_1.PlexBoxFooterComponent],
            template: "<div class=\"box box-{{type}}\" >\n                <div *ngIf=\"title\" class=\"box-header with-border\">\n                  <h3 class=\"box-title\">{{title}}</h3>\n                </div>\n                <div class=\"box-body\">\n                  <ng-content></ng-content>\n                </div>\n                <ng-content select=\"plex-box-footer\"></ng-content>\n            </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], PlexBoxComponent);
    return PlexBoxComponent;
}());
exports.PlexBoxComponent = PlexBoxComponent;
//# sourceMappingURL=box.component.js.map