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
var PlexCardComponent = /** @class */ (function () {
    function PlexCardComponent() {
        this.selected = false;
        this.align = 'center';
        this.size = 'md';
        this.type = 'default';
    }
    Object.defineProperty(PlexCardComponent.prototype, "cssAlign", {
        get: function () {
            return this.align === 'start' ? 'justify-content-start' : 'justify-content-center';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexCardComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexCardComponent.prototype, "align", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexCardComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexCardComponent.prototype, "type", void 0);
    PlexCardComponent = __decorate([
        core_1.Component({
            selector: 'plex-card',
            template: "\n    <div class=\"card bg-{{ type }}\" [ngClass]=\"{'text-white' : type != 'default'}\" [class.selected]=\"selected\">\n        <ng-content select=\"img\"></ng-content>\n        <div class=\"d-flex\" [ngClass]=\"cssAlign\">\n            <ng-content select=\"plex-badge\"></ng-content>\n        </div>\n        <div class=\"d-flex my-2\" [ngClass]=\"cssAlign\">\n            <ng-content select=\"plex-label\"></ng-content>\n        </div>\n        <div class=\"d-flex\" [ngClass]=\"cssAlign\">\n            <ng-content select=\"plex-button\"></ng-content>\n        </div>\n            <ng-content select=\"plex-bool\"></ng-content>\n    </div>\n    ",
        }),
        __metadata("design:paramtypes", [])
    ], PlexCardComponent);
    return PlexCardComponent;
}());
exports.PlexCardComponent = PlexCardComponent;
//# sourceMappingURL=../../../src/lib/card/card.component.js.map