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
var PlexRibbonComponent = /** @class */ (function () {
    function PlexRibbonComponent(renderer) {
        this.type = 'info';
        this.text = 'demo';
        this.position = 'top-left';
        this.type = 'info';
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexRibbonComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexRibbonComponent.prototype, "text", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexRibbonComponent.prototype, "position", void 0);
    PlexRibbonComponent = __decorate([
        core_1.Component({
            selector: 'plex-ribbon',
            template: "\n    <div class=\"text-center p-1 {{position}} bg-{{type}}\">\n        <div class=\"ribbon\">\n            <div class=\"texto text-white p-1\">\n                {{ text }}\n            </div>\n        </div>\n    </div>"
        }),
        __metadata("design:paramtypes", [core_1.Renderer])
    ], PlexRibbonComponent);
    return PlexRibbonComponent;
}());
exports.PlexRibbonComponent = PlexRibbonComponent;
//# sourceMappingURL=../../../src/lib/ribbon/ribbon.component.js.map