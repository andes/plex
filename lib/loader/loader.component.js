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
var PlexLoaderComponent = /** @class */ (function () {
    function PlexLoaderComponent(renderer) {
        this.type = '';
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexLoaderComponent.prototype, "type", void 0);
    PlexLoaderComponent = __decorate([
        core_1.Component({
            selector: 'plex-loader',
            template: " <div class=\"loader-container\">\n                <div *ngIf=\"type == '' || type == 'ball-pulse'\" class=\"loader\">\n                    <div class=\"{{type}}\">\n                        <div></div>\n                        <div></div>\n                        <div></div>\n                    </div>\n                </div>\n                <div *ngIf=\"type == 'ball-pulse-sync'\" class=\"loader\">\n                    <div class=\"{{type}}\">\n                        <div></div>\n                        <div></div>\n                        <div></div>\n                    </div>\n                </div>\n                <div *ngIf=\"type == 'ball-beat'\" class=\"loader\">\n                    <div class=\"ball-beat\">\n                        <div></div>\n                        <div></div>\n                        <div></div>\n                    </div>\n                </div>\n                <div *ngIf=\"type == 'linear'\" class=\"line-loader\">\n                </div>\n            </div>\n            ",
        }),
        __metadata("design:paramtypes", [core_1.Renderer])
    ], PlexLoaderComponent);
    return PlexLoaderComponent;
}());
exports.PlexLoaderComponent = PlexLoaderComponent;
//# sourceMappingURL=../../../src/lib/loader/loader.component.js.map