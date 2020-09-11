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
var icon_component_1 = require("../icon/icon.component");
var bool_component_1 = require("../bool/bool.component");
var badge_component_1 = require("../badge/badge.component");
var button_component_1 = require("../button/button.component");
var PlexItemComponent = /** @class */ (function () {
    function PlexItemComponent(elRef, ref) {
        this.elRef = elRef;
        this.ref = ref;
        this.selected = false;
        this.imgs = false;
        this.svgs = false;
    }
    PlexItemComponent.prototype.hasIcons = function () {
        return this.plexIcons.length > 0 || this.imgs;
    };
    PlexItemComponent.prototype.hasCheckbox = function () {
        return this.plexBools.length > 0;
    };
    PlexItemComponent.prototype.hasBotonera = function () {
        return this.plexButtons.length > 0 || this.plexBadges.length > 0;
    };
    PlexItemComponent.prototype.ngAfterViewInit = function () {
        this.imgs = !!this.elRef.nativeElement.querySelector('img');
        var elementos = this.elRef.nativeElement.querySelectorAll('.item-list > svg');
        this.svgs = elementos.length > 0;
        this.ref.detectChanges();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexItemComponent.prototype, "selected", void 0);
    __decorate([
        core_1.ContentChildren(icon_component_1.PlexIconComponent, { descendants: false }),
        __metadata("design:type", core_1.QueryList)
    ], PlexItemComponent.prototype, "plexIcons", void 0);
    __decorate([
        core_1.ContentChildren(bool_component_1.PlexBoolComponent, { descendants: false }),
        __metadata("design:type", core_1.QueryList)
    ], PlexItemComponent.prototype, "plexBools", void 0);
    __decorate([
        core_1.ContentChildren(badge_component_1.PlexBadgeComponent, { descendants: false }),
        __metadata("design:type", core_1.QueryList)
    ], PlexItemComponent.prototype, "plexBadges", void 0);
    __decorate([
        core_1.ContentChildren(button_component_1.PlexButtonComponent, { descendants: false }),
        __metadata("design:type", core_1.QueryList)
    ], PlexItemComponent.prototype, "plexButtons", void 0);
    PlexItemComponent = __decorate([
        core_1.Component({
            selector: 'plex-item',
            template: "\n        <section class=\"item\" [class.selected]=\"selected\">\n            <div class=\"item-row\">\n                <div class=\"elementos-graficos\">\n                    <ng-content select=\"plex-bool\"></ng-content>\n                    <ng-content select=\"plex-icon\"></ng-content>\n                    <ng-content select=\"img\"></ng-content>\n                    <ng-content select=\"svg\"></ng-content>\n                </div>\n                <div class=\"item-list\"\n                    [class.has-icon]=\"plexIcons?.length > 0 || imgs || svgs\"\n                    [class.has-checkbox]=\"plexBools?.length > 0\"\n                    >\n                    <ng-content></ng-content>\n                </div>\n            </div>\n            <div *ngIf=\"hasBotonera()\" class=\"botonera\">\n                <div>\n                    <ng-content select=\"plex-badge\"></ng-content>\n                    <ng-content select=\"plex-button\"></ng-content>\n                    <ng-content select=\"upload-file\"></ng-content>\n                </div>\n                <ng-content select=\"plex-dropdown[icon]\"></ng-content>\n            </div>\n        </section>\n    "
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.ChangeDetectorRef])
    ], PlexItemComponent);
    return PlexItemComponent;
}());
exports.PlexItemComponent = PlexItemComponent;
//# sourceMappingURL=../../../src/lib/item-list/item.component.js.map