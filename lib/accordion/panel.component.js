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
var accordion_component_1 = require("./accordion.component");
var PlexPanelComponent = /** @class */ (function () {
    function PlexPanelComponent(accordion) {
        this.toggle = new core_1.EventEmitter();
        accordion.addPanel(this);
    }
    PlexPanelComponent.prototype.selectPanel = function () {
        this.active = !this.active;
        this.toggle.emit(this.active);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexPanelComponent.prototype, "tituloPrincipal", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexPanelComponent.prototype, "tituloSecundario", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexPanelComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexPanelComponent.prototype, "content", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], PlexPanelComponent.prototype, "active", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexPanelComponent.prototype, "toggle", void 0);
    PlexPanelComponent = __decorate([
        core_1.Component({
            selector: 'plex-panel',
            template: " <div class=\"card\">\n                    <div class=\"card-header\" role=\"tab\" id=\"headingOne\" (click)=\"selectPanel()\">\n                    <h5 class=\"mb-0\">\n                        <a  *ngIf=\"tituloPrincipal\" class=\"card-action\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                            <plex-icon type=\"default\" size=\"xl\" [name]=\"icon\"></plex-icon>\n                            <span class=\"title ml-1\">\n                                {{tituloPrincipal}}\n                            </span>\n                        </a>\n                    </h5>\n                    <ng-content *ngIf=\"!tituloPrincipal\" select=\"[plex-accordion-title]\"></ng-content>\n                    </div>\n\n                    <div id=\"collapseOne\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" [ngClass]=\"{show: active}\">\n                    <div class=\"card-block\">\n                        <h6 class=\"box-title-secundario\" *ngIf=\"tituloSecundario\">{{tituloSecundario}}</h6>\n                        <ng-content class=\"box-title-element\"></ng-content>\n                    </div>\n                    </div>\n                </div>\n                ",
        }),
        __metadata("design:paramtypes", [accordion_component_1.PlexAccordionComponent])
    ], PlexPanelComponent);
    return PlexPanelComponent;
}());
exports.PlexPanelComponent = PlexPanelComponent;
//# sourceMappingURL=../../../src/lib/accordion/panel.component.js.map