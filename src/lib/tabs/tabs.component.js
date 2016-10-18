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
var core_1 = require('@angular/core');
var PlexTabsComponent = (function () {
    function PlexTabsComponent() {
        this.tabs = [];
    }
    PlexTabsComponent.prototype.addTab = function (tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    };
    PlexTabsComponent.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (tab) {
            tab.active = false;
        });
        tab.active = true;
    };
    PlexTabsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'plex-tabs',
            templateUrl: 'tabs.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PlexTabsComponent);
    return PlexTabsComponent;
}());
exports.PlexTabsComponent = PlexTabsComponent;
//# sourceMappingURL=tabs.component.js.map