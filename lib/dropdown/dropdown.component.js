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
var service_1 = require("../../lib/core/service");
var PlexDropdownComponent = /** @class */ (function () {
    function PlexDropdownComponent(plex, renderer) {
        this.plex = plex;
        this.renderer = renderer;
        this.size = 'md';
        this.onOpen = new core_1.EventEmitter();
        this.open = false;
        this.disabled = false;
        this.type = 'secondary';
        this.right = false;
    }
    PlexDropdownComponent.prototype.toggleMenu = function () {
        var _this = this;
        this.open = !this.open;
        if (this.open) {
            this.onOpen.emit();
            this.unlisten = this.renderer.listen('document', 'click', function (event) {
                _this.toggleMenu();
                _this.unlisten();
            });
        }
        else {
            if (this.unlisten) {
                this.unlisten();
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexDropdownComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexDropdownComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], PlexDropdownComponent.prototype, "open", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], PlexDropdownComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexDropdownComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], PlexDropdownComponent.prototype, "right", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexDropdownComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(), core_1.HostBinding('attr.disabled'),
        __metadata("design:type", Boolean)
    ], PlexDropdownComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], PlexDropdownComponent.prototype, "onOpen", void 0);
    PlexDropdownComponent = __decorate([
        core_1.Component({
            selector: 'plex-dropdown',
            template: " <div class=\"dropdown\" [ngClass]=\"{show: open}\">\n                    <button plexRipples data-toggle=\"dropdown\" class=\"btn btn-{{type}} {{( 'size' ? 'btn-' + size : '' )}}\" [ngClass]=\"{'dropdown-toggle': label}\" type=\"button\" [disabled]=\"disabled\" (click)=\"toggleMenu(); $event.stopImmediatePropagation();\">\n                    <plex-icon *ngIf=\"icon\" [name]=\"icon\" [size]=\"size\"></plex-icon>\n                    {{label}}\n                    </button>\n                    <ul class=\"dropdown-menu\" [ngClass]=\"{'dropdown-menu-right': right, 'dropdown-menu-left': !right}\">\n                    <li *ngFor=\"let item of items\">\n                        <!--Item con router asociado-->\n                        <ng-template [ngIf]=\"!item.divider && item.route\">\n                        <a plexRipples class=\"dropdown-item\" href=\"#\" [routerLink]=\"item.route\" routerLinkActive=\"active\" (click)=\"open=false\">\n                            <plex-icon *ngIf=\"item.icon\" type=\"default\" [name]=\"item.icon\"></plex-icon>\n                            {{item.label}}</a>\n                        </ng-template>\n                        <!--Item con handler asociado-->\n                        <ng-template [ngIf]=\"!item.divider && item.handler\">\n                        <a plexRipples class=\"dropdown-item\" href=\"#\" (click)=\"toggleMenu(); item.handler($event); false;\">\n                            <plex-icon *ngIf=\"item.icon\" type=\"default\" [name]=\"item.icon\"></plex-icon>\n                            {{item.label}}</a>\n                        </ng-template>\n                        <!--Divider-->\n                        <ng-template [ngIf]=\"item.divider\">\n                        <div role=\"separator\" class=\"dropdown-divider\"></div>\n                        </ng-template>\n                    </li>\n                    </ul>\n                </div>",
        }),
        __metadata("design:paramtypes", [service_1.Plex, core_1.Renderer2])
    ], PlexDropdownComponent);
    return PlexDropdownComponent;
}());
exports.PlexDropdownComponent = PlexDropdownComponent;
//# sourceMappingURL=../../../src/lib/dropdown/dropdown.component.js.map