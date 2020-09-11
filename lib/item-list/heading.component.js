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
var PlexHeadingComponent = /** @class */ (function () {
    function PlexHeadingComponent(ref) {
        this.ref = ref;
        this.sticky = false;
        this.hasIcon = false;
        this.hasCheckbox = false;
        this.hasBotonera = false;
    }
    PlexHeadingComponent.prototype.setSticky = function (value) {
        this.sticky = value;
        this.ref.detectChanges();
    };
    PlexHeadingComponent.prototype.setIcon = function (value) {
        this.hasIcon = value;
        this.ref.detectChanges();
    };
    PlexHeadingComponent.prototype.setCheckbox = function (value) {
        this.hasCheckbox = value;
        this.ref.detectChanges();
    };
    PlexHeadingComponent.prototype.setBotonera = function (value) {
        this.hasBotonera = value;
        this.ref.detectChanges();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexHeadingComponent.prototype, "sticky", void 0);
    PlexHeadingComponent = __decorate([
        core_1.Component({
            selector: 'plex-heading',
            template: "\n    <section>\n        <div class=\"item-list-heading\"\n            [class.sticky]=\"sticky\"\n            [class.has-icon]=\"hasIcon\"\n            [class.has-checkbox]=\"hasCheckbox\"\n            [class.has-botonera]=\"hasBotonera\">\n            <ng-content selector=\"label\"></ng-content>\n        </div>\n    </section>\n    "
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], PlexHeadingComponent);
    return PlexHeadingComponent;
}());
exports.PlexHeadingComponent = PlexHeadingComponent;
//# sourceMappingURL=../../../src/lib/item-list/heading.component.js.map