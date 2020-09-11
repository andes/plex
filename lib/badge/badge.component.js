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
var PlexBadgeComponent = /** @class */ (function () {
    function PlexBadgeComponent() {
        this.size = 'md';
        this.type = 'success';
    }
    PlexBadgeComponent.prototype.ngOnChanges = function () {
        if (this.color && this.color.length > 0) {
            this.badgeIcon.nativeElement.style.setProperty('--badge-color', this.color);
            this.badgeBtn.nativeElement.style.setProperty('--badge-color', this.color);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexBadgeComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexBadgeComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexBadgeComponent.prototype, "color", void 0);
    __decorate([
        core_1.ViewChild('badgeIcon', { static: true }),
        __metadata("design:type", core_1.ElementRef)
    ], PlexBadgeComponent.prototype, "badgeIcon", void 0);
    __decorate([
        core_1.ViewChild('badgeBtn', { static: true }),
        __metadata("design:type", core_1.ElementRef)
    ], PlexBadgeComponent.prototype, "badgeBtn", void 0);
    PlexBadgeComponent = __decorate([
        core_1.Component({
            selector: 'plex-badge',
            template: "\n        <span #badgeIcon class=\"badge badge-{{ type }} badge-{{ size }}\">\n            <ng-content select=\"plex-icon\"></ng-content>\n            <ng-content></ng-content>\n        </span>\n        <span #badgeBtn class=\"btn-badge btn-badge-{{ type }}\">\n            <ng-content select=\"plex-button\"></ng-content>\n            <ng-content select=\"plex-datetime\"></ng-content>\n        </span>\n        ",
        }),
        __metadata("design:paramtypes", [])
    ], PlexBadgeComponent);
    return PlexBadgeComponent;
}());
exports.PlexBadgeComponent = PlexBadgeComponent;
//# sourceMappingURL=../../../src/lib/badge/badge.component.js.map