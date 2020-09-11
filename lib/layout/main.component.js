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
var PlexLayoutMainComponent = /** @class */ (function () {
    function PlexLayoutMainComponent() {
        this.type = '';
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexLayoutMainComponent.prototype, "type", void 0);
    PlexLayoutMainComponent = __decorate([
        core_1.Component({
            selector: 'plex-layout-main',
            template: "\n        <div class=\"plex-box\" [ngClass]=\"{'plex-box-invert': type == 'invert'}\">\n          <ng-content select=\"header\"></ng-content>\n          <ng-content select=\"plex-title[main]\"></ng-content>\n          <div class=\"plex-box-content\">\n              <ng-content></ng-content>\n          </div>\n        </div>\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], PlexLayoutMainComponent);
    return PlexLayoutMainComponent;
}());
exports.PlexLayoutMainComponent = PlexLayoutMainComponent;
//# sourceMappingURL=../../../src/lib/layout/main.component.js.map