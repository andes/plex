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
var router_1 = require("@angular/router");
/**
 * ATENCION! SI NO SE ESTABLECE FOCO SE MANTIENE FUNCIONALIDAD ANTERIOR.
 *
 * TIENE UN NGIF SI MAIN = 12
 * HACIENDO QUE EL CONTENIDO DEL SIDEBAR NO SE RENDERIZE.
 * SI SIMPLEMENTE LO OCULTO, PUEDE CAUSAR ERRORES QUE NO SABEMOS
 * NO TODOS LOS SIDEBAR DEBEN ESTAR PREPARADOS
 */
/**
 * Formas de uso:
 *
 * 1. Statico:
 *    Setear main
 * 2. Responsive manual
 *    Setear main=8 y manualmente cambiar el foco de atención
 * 3. Responsive Automatico
 *    Setear aspect=8 y usar >router-outlet> en el sidebar.
 *
 */
var PlexLayoutComponent = /** @class */ (function () {
    function PlexLayoutComponent() {
        // Compatibility mode
        this.maxcolumns = 12;
        this.main = 12;
        this.aspect = null;
        this.foco = null;
    }
    PlexLayoutComponent.prototype.ngOnInit = function () {
        if (this.aspect) {
            this.foco = 'main';
            this.main = 12;
        }
    };
    PlexLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.subscription1) {
            this.subscription1.unsubscribe();
        }
        if (this.subscription2) {
            this.subscription2.unsubscribe();
        }
    };
    PlexLayoutComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // MODO MANUAL
        if (!this.aspect) {
            return;
        }
        if (this.routerOutlet) {
            if (this.routerOutlet.isActivated) {
                this.main = this.aspect;
                this.foco = 'sidebar';
            }
            else {
                this.foco = 'main';
            }
            this.subscription1 = this.routerOutlet.activateEvents.subscribe(function () {
                _this.main = _this.aspect;
                _this.foco = 'sidebar';
            });
            this.subscription2 = this.routerOutlet.deactivateEvents.subscribe(function () {
                _this.main = 12;
                _this.foco = 'main';
            });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexLayoutComponent.prototype, "main", void 0);
    __decorate([
        core_1.ContentChild(router_1.RouterOutlet, { static: true }),
        __metadata("design:type", router_1.RouterOutlet)
    ], PlexLayoutComponent.prototype, "routerOutlet", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexLayoutComponent.prototype, "aspect", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexLayoutComponent.prototype, "foco", void 0);
    PlexLayoutComponent = __decorate([
        core_1.Component({
            selector: 'plex-layout',
            template: "\n    <section responsive>\n        <div class=\"row\">\n            <div class=\"col-{{ main }} h-100\"\n                 [class.focused]=\"foco === 'main'\"\n                 [class.not-focused]=\"foco && foco !== 'main'\">\n                <ng-content select=\"plex-layout-main\"></ng-content>\n            </div>\n            <div class=\"col-{{ maxcolumns - main }} h-100\"\n                 *ngIf=\"(main < maxcolumns && !foco) || !!foco\"\n                 [hidden]=\"main === maxcolumns && foco\"\n                 [class.focused]=\"foco === 'sidebar'\"\n                 [class.not-focused]=\"foco && foco !== 'sidebar'\">\n                <ng-content select=\"plex-layout-sidebar\"></ng-content>\n            </div>\n        </div>\n    </section>\n    <ng-content select=\"plex-layout-footer\"></ng-content>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], PlexLayoutComponent);
    return PlexLayoutComponent;
}());
exports.PlexLayoutComponent = PlexLayoutComponent;
//# sourceMappingURL=../../../src/lib/layout/layout.component.js.map