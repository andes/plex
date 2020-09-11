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
var service_1 = require("./../core/service");
var PlexAppComponent = /** @class */ (function () {
    function PlexAppComponent(plex, renderer) {
        this.plex = plex;
        this.renderer = renderer;
        this.type = 'inverse';
        this.loginOpen = false;
        this.menuOpen = false;
        this.online = true;
        this.chart = {
            maxPoints: 10,
            dataset: [{ data: [] }],
            labels: [],
            options: {
                // responsive: true,
                scales: {
                    yAxes: [{
                            display: false,
                            gridLines: {
                                display: false
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                },
                tooltips: {
                    enabled: false,
                }
            },
            colors: [{ pointBackgroundColor: 'grey' }]
        };
        this.initAppStatusCheck();
    }
    PlexAppComponent.prototype.initAppStatusCheck = function () {
        var _this = this;
        this.plex.appStatus.subscribe(function (value) {
            _this.online = value.API === 'OK';
            _this.chart.dataset = _this.chart.dataset.slice();
            _this.chart.dataset[0].data = _this.chart.dataset[0].data.splice(1);
            _this.chart.dataset[0].data.push(_this.online ? 1 : 0);
        });
    };
    PlexAppComponent.prototype.ngOnInit = function () {
        this.plex.setViewContainerRef(this.viewContainerRef);
        // Genera N labels vacíos
        this.chart.labels = [];
        for (var i = 0; i < this.chart.maxPoints; i++) {
            this.chart.labels.push('');
        }
        // Inicializa todo el dataset en 1 (= 'Ok')
        for (var i = 0; i < this.chart.maxPoints; i++) {
            this.chart.dataset[0].data.push(1);
        }
    };
    PlexAppComponent.prototype.toggleMenu = function () {
        var _this = this;
        this.menuOpen = !this.menuOpen;
        if (this.menuOpen) {
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
    PlexAppComponent.prototype.onMenuKeyup = function ($event) {
        if ($event.keyCode === 32 || $event.keyCode === 13) {
            this.toggleMenu();
        }
    };
    __decorate([
        core_1.ViewChild('menuItem', { static: true, read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], PlexAppComponent.prototype, "viewContainerRef", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexAppComponent.prototype, "type", void 0);
    PlexAppComponent = __decorate([
        core_1.Component({
            selector: 'plex-app',
            template: " <!--Navigation Bar-->\n                    <nav [hidden]=\"!plex.navbarVisible\" class=\"navbar-inverse fixed-top bg-{{type}}\">\n\n                        <div class=\"navbar-container\">\n                            <ng-content select=\"[navIcon]\"></ng-content>\n\n                            <div class=\"menu-item\">\n                                <ng-template #menuItem></ng-template>\n                            </div>\n                            <div class=\"title hidden-md-down\">\n                                <ng-container *ngFor=\"let item of plex.title; let last = last\">\n                                    <a *ngIf=\"item.route\" [routerLink]=\"item.route\">{{item.name}}</a>\n                                    <span *ngIf=\"!item.route\">{{item.name}}</span>\n                                    <span *ngIf=\"!last\"> / </span>\n                                </ng-container>\n                            </div>\n                        </div>\n\n                        <div class=\"actions\">\n\n                            <!-- Novedades -->\n                            <ng-content select=\"[nav-item]\"></ng-content>\n\n                            <!--App Status-->\n                            <div class=\"action hidden-md-down\">\n                                <plex-icon *ngIf=\"online\" name=\"cloud-check-outline\" type=\"light\" size=\"lg\"></plex-icon>\n                                <plex-icon *ngIf=\"!online\" name=\"cloud-off-outline\" type=\"danger\" size=\"lg\"></plex-icon>\n                                <div class=\"popover popover-bottom\">\n                                    <h3 *ngIf=\"online\" class=\"popover-title bg-success text-white text-center\">Conectividad OK</h3>\n                                    <h3 *ngIf=\"!online\" class=\"popover-title bg-danger text-white text-center\">Problemas con la conectividad</h3>\n\n                                    <div class=\"popover-content\">\n                                        <p *ngIf=\"online\">El servicio ANDES funciona correctamente</p>\n                                        <p *ngIf=\"!online\">El servicio ANDES no est\u00E1 disponible</p>\n                                        <canvas baseChart [datasets]=\"chart.dataset\" [labels]=\"chart.labels\" [options]=\"chart.options\" [colors]=\"chart.colors\" [legend]=\"false\"\n                                            [chartType]=\"'line'\">\n                                        </canvas>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"plex.userInfo\" class=\"userinfo hidden-md-down\">\n                                <div>\n                                    <span>{{plex.userInfo.usuario.nombreCompleto}}</span><br><span *ngIf=\"plex.userInfo.organizacion\">{{plex.userInfo.organizacion.nombre}}</span>\n                                </div>\n                            </div>\n                            <!--Menu-->\n                            <div role=\"button\" *ngIf=\"plex.menu && plex.menu.length\" class=\"action dropdown\" tabindex=\"1\" [ngClass]=\"{show: menuOpen}\" (click)=\"toggleMenu(); $event.stopImmediatePropagation();\" (keyup)=\"onMenuKeyup($event)\">\n                                <plex-icon type=\"light\" size=\"xl\" name=\"menu\"></plex-icon>\n                                <ul class=\"dropdown-menu dropdown-menu-right\">\n                                    <li *ngFor=\"let item of plex.menu; let i = index\">\n                                        <!--Item con router asociado-->\n                                        <ng-template [ngIf]=\"!item.divider && item.route\">\n                                            <a plexRipples class=\"dropdown-item\" href=\"#\" tabindex=\"{{i + 1}}\" [routerLink]=\"item.route\" routerLinkActive=\"active\">\n                                                <plex-icon *ngIf=\"item.icon\" type=\"dark\"  [prefix]=\"item.prefix\" [name]=\"item.icon\"></plex-icon>\n                                                {{item.label}}\n                                                </a>\n                                        </ng-template>\n                                        <!--Item con handler asociado-->\n                                        <ng-template [ngIf]=\"!item.divider && item.handler\">\n                                            <a plexRipples class=\"dropdown-item\" href=\"#\" tabindex=\"{{i + 1}}\" (click)=\"item.handler($event); false;\">\n                                                <plex-icon *ngIf=\"item.icon\" type=\"dark\"  [prefix]=\"item.prefix\" [name]=\"item.icon\"></plex-icon>\n                                                {{item.label}}\n                                                </a>\n                                        </ng-template>\n                                        <!--Divider-->\n                                        <ng-template [ngIf]=\"item.divider\">\n                                            <div role=\"separator\" class=\"dropdown-divider\"></div>\n                                        </ng-template>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <plex-loader *ngIf=\"plex.loaderCount > 0\" class=\"loader\" type=\"linear\"></plex-loader>\n                    </nav>\n\n\n                <!-- Componente de notificaciones Toast -->\n                <simple-notifications></simple-notifications>\n\n                <!-- Componente que muestra un ribbon indicando si se est\u00E1 en un entorno de desarrollo/demo -->\n                <ng-content select=\"plex-ribbon\"></ng-content>\n\n                <!--Contenedor principal-->\n                <div class=\"content\" [ngClass]=\"{'nav-top-margin': plex.navbarVisible, 'nav-top-no-margin': !plex.navbarVisible}\">\n                    <router-outlet></router-outlet>\n                </div>",
        }),
        __metadata("design:paramtypes", [service_1.Plex, core_1.Renderer2])
    ], PlexAppComponent);
    return PlexAppComponent;
}());
exports.PlexAppComponent = PlexAppComponent;
//# sourceMappingURL=../../../src/lib/app/app.component.js.map