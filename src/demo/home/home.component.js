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
var core_1 = require("@angular/core");
var service_1 = require("../../lib/core/service");
var sidebar_item_class_1 = require("../../lib/app/sidebar-item.class");
var HomeDemoComponent = (function () {
    function HomeDemoComponent(plex) {
        this.plex = plex;
    }
    HomeDemoComponent.prototype.ngOnInit = function () {
        var items = [
            new sidebar_item_class_1.SidebarItem('Punto de inicio', 'mdi mdi-arrow-compress-all', '/inicio'),
            new sidebar_item_class_1.SidebarItem('Buscar', 'mdi mdi-magnify', '/text'),
            new sidebar_item_class_1.SidebarItem('Función', 'mdi mdi-arrow-compress-all', function () {
                alert(1);
            })
        ];
        //   {
        //     'titulo': 'Punto de inicio',
        //     'icon': 'mdi mdi-arrow-compress-all',
        //     'accion': '/'
        //   },
        //   {
        //     'titulo': 'Buscar',
        //     'icon': 'mdi mdi-magnify',
        //     'accion': '/'
        //   },
        //   {
        //     'titulo': 'Dashboard',
        //     'icon': 'mdi mdi-chart-bar',
        //     'accion': '/'
        //   }
        // ]
        this.plex.initView("Hola manola", items);
    };
    return HomeDemoComponent;
}());
HomeDemoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.html',
    }),
    __metadata("design:paramtypes", [service_1.PlexService])
], HomeDemoComponent);
exports.HomeDemoComponent = HomeDemoComponent;
//# sourceMappingURL=home.component.js.map