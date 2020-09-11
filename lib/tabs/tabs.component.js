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
var tab_component_1 = require("./tab.component");
var PlexTabsComponent = /** @class */ (function () {
    function PlexTabsComponent() {
        this._activeIndex = 0;
        this.tabs = [];
        // Eventos
        this.change = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
    }
    Object.defineProperty(PlexTabsComponent.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (value) {
            this._activeIndex = value;
            this.doActiveTab(this._activeIndex);
        },
        enumerable: true,
        configurable: true
    });
    PlexTabsComponent.prototype.renderTabs = function () {
        this.tabs = this.children.toArray();
        if (this.tabs.length) {
            this.selectTab(this.tabs[Math.min(this.tabs.length - 1, this._activeIndex)]);
        }
    };
    PlexTabsComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.renderTabs();
            _this.children.changes.subscribe(function () { _this.renderTabs(); });
        });
    };
    PlexTabsComponent.prototype.selectTab = function (tab) {
        var _this = this;
        setTimeout(function () {
            _this._activeIndex = _this.tabs.indexOf(tab);
            _this.doActiveTab(_this._activeIndex);
        });
    };
    PlexTabsComponent.prototype.closeTab = function (tab) {
        this.close.emit(this.tabs.indexOf(tab));
    };
    PlexTabsComponent.prototype.doActiveTab = function (index) {
        this.tabs.forEach(function (t) {
            if (t.active) {
                t.toggle.emit(false);
            }
            t.active = false;
        });
        if (this.tabs.length) {
            var tab = this.tabs[Math.min(this.tabs.length - 1, index)];
            tab.active = true;
            this.change.emit(this._activeIndex);
            tab.toggle.emit(true);
            // Focus tab header
            var tabHeader = this.container.nativeElement.children[this._activeIndex];
            if (tabHeader) {
                tabHeader.scrollIntoViewIfNeeded ? tabHeader.scrollIntoViewIfNeeded() : tabHeader.scrollIntoView();
            }
        }
    };
    __decorate([
        core_1.ContentChildren(tab_component_1.PlexTabComponent),
        __metadata("design:type", core_1.QueryList)
    ], PlexTabsComponent.prototype, "children", void 0);
    __decorate([
        core_1.ViewChild('container', { static: true }),
        __metadata("design:type", core_1.ElementRef)
    ], PlexTabsComponent.prototype, "container", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexTabsComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PlexTabsComponent.prototype, "activeIndex", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexTabsComponent.prototype, "change", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexTabsComponent.prototype, "close", void 0);
    PlexTabsComponent = __decorate([
        core_1.Component({
            selector: 'plex-tabs',
            template: " <section justify>\n                    <ul #container class=\"nav nav-tabs\" [ngClass]=\"size\">\n                        <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" class=\"nav-item nav-item-{{tab.color}}\" [ngClass]=\"{'active': tab.active, 'icon': tab.icon && !tab.label}\">\n                            <a class=\"nav-link\" [ngClass]=\"{active: tab.active}\" plexRipples onclick=\"return false\">\n                                <plex-icon *ngIf=\"tab.icon\" [name]=\"tab.icon\" size=\"sm\" [type]=\"tab.color\"></plex-icon>\n                                <span *ngIf=\"tab.label\">\n                                    {{ tab.label  }}\n                                </span>\n                                <button *ngIf=\"tab.allowClose\" type=\"button\" class=\"close\" (click)=\"closeTab(tab)\"><i class=\"mdi mdi-close\"></i></button>\n                            </a>\n                        </li>\n                    </ul>\n                    <div justify=\"end\">\n                        <ng-content select=\"plex-badge\"></ng-content>\n                        <ng-content select=\"plex-dropdown\"></ng-content>\n                        <ng-content select=\"plex-button\"></ng-content>\n                        <ng-content select=\"plex-help\"></ng-content>\n                    </div>\n                </section>\n                <ng-content></ng-content>\n\n                ",
        })
    ], PlexTabsComponent);
    return PlexTabsComponent;
}());
exports.PlexTabsComponent = PlexTabsComponent;
//# sourceMappingURL=../../../src/lib/tabs/tabs.component.js.map