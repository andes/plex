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
var item_component_1 = require("./item.component");
var heading_component_1 = require("./heading.component");
var PlexListComponent = /** @class */ (function () {
    function PlexListComponent() {
        this.striped = true;
        this.size = 'md';
        this.scrolled = new core_1.EventEmitter();
    }
    Object.defineProperty(PlexListComponent.prototype, "styleScroll", {
        get: function () {
            if (this.height) {
                return 'scroll';
            }
        },
        enumerable: true,
        configurable: true
    });
    PlexListComponent.prototype.onScroll = function () {
        this.scrolled.emit();
    };
    PlexListComponent.prototype.ngAfterViewInit = function () {
        var hayIcono = this.plexItems.some(function (item) { return item.hasIcons(); });
        var hayCheckbox = this.plexItems.some(function (item) { return item.hasCheckbox(); });
        var hayBotonera = this.plexItems.some(function (item) { return item.hasBotonera(); });
        if (this.plexHeading) {
            this.plexHeading.setIcon(hayIcono);
            this.plexHeading.setCheckbox(hayCheckbox);
            this.plexHeading.setBotonera(hayBotonera);
            if (this.height) {
                this.plexHeading.setSticky(true);
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexListComponent.prototype, "striped", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexListComponent.prototype, "height", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexListComponent.prototype, "size", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexListComponent.prototype, "scrolled", void 0);
    __decorate([
        core_1.ContentChildren(item_component_1.PlexItemComponent, { descendants: false }),
        __metadata("design:type", core_1.QueryList)
    ], PlexListComponent.prototype, "plexItems", void 0);
    __decorate([
        core_1.ContentChild(heading_component_1.PlexHeadingComponent, { static: false }),
        __metadata("design:type", heading_component_1.PlexHeadingComponent)
    ], PlexListComponent.prototype, "plexHeading", void 0);
    PlexListComponent = __decorate([
        core_1.Component({
            selector: 'plex-list',
            template: "\n    <div [class.striped]=\"striped\" [ngClass]=\"size\" responsive\n         infiniteScroll [infiniteScrollDistance]=\"1\" (scrolled)=\"onScroll()\" [scrollWindow]=\"false\"\n         [style.overflow-y]=\"styleScroll\" [style.height]=\"height\">\n        <ng-content></ng-content>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], PlexListComponent);
    return PlexListComponent;
}());
exports.PlexListComponent = PlexListComponent;
//# sourceMappingURL=../../../src/lib/item-list/list.component.js.map