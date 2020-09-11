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
var PlexTitleComponent = /** @class */ (function () {
    function PlexTitleComponent() {
        this.size = 'lg';
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexTitleComponent.prototype, "titulo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexTitleComponent.prototype, "size", void 0);
    PlexTitleComponent = __decorate([
        core_1.Component({
            selector: 'plex-title',
            template: "\n        <div class=\"plex-title d-flex flex-row justify-content-between align-items-center\" responsive>\n            <div class=\"plex-title-label {{ size }}\"> {{ titulo }} </div>\n            <div class=\"title-content\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div>\n            <ng-content select=\"plex-tabs\"></ng-content>\n            <ng-content select=\"plex-wrapper\"></ng-content>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], PlexTitleComponent);
    return PlexTitleComponent;
}());
exports.PlexTitleComponent = PlexTitleComponent;
//# sourceMappingURL=../../../src/lib/title/title.component.js.map