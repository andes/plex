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
var help_component_1 = require("../help/help.component");
var NavItemComponent = /** @class */ (function () {
    function NavItemComponent() {
        this.classList = 'action hidden-md-down';
        this.opened = false;
    }
    NavItemComponent.prototype.click = function () {
        if (!this.opened) {
            event.stopImmediatePropagation();
            this.plexHelp.toogle();
            this.opened = true;
        }
    };
    NavItemComponent.prototype.onClose = function () {
        this.opened = false;
    };
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "classList", void 0);
    __decorate([
        core_1.HostBinding('class.hover'),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "opened", void 0);
    __decorate([
        core_1.ViewChild(help_component_1.PlexHelpComponent, { static: false }),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "plexHelp", void 0);
    __decorate([
        core_1.HostListener('click', ['event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavItemComponent.prototype, "click", null);
    NavItemComponent = __decorate([
        core_1.Component({
            // tslint:disable-next-line: component-selector
            selector: 'div[nav-item]',
            template: "\n        <ng-content select=\"plex-icon\"></ng-content>\n        <plex-help [icon]=\"null\" (close)=\"onClose()\">\n            <div info>\n                <ng-content></ng-content>\n            </div>\n        </plex-help>\n\n\n    ",
        })
    ], NavItemComponent);
    return NavItemComponent;
}());
exports.NavItemComponent = NavItemComponent;
//# sourceMappingURL=../../../src/lib/app/nav-item.component.js.map