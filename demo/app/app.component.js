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
var AppComponent = /** @class */ (function () {
    // Hace que PlexService sea un singleton para toda la aplicación
    function AppComponent(plex) {
        this.plex = plex;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.plex.updateTitle('Plex: UI/UX para ANDES');
        var menu = [
            { label: 'Ir al Inicio', icon: 'mdi mdi-home', route: '/incio' },
            { label: 'Accordion', icon: 'view-day', route: '/accordion' },
            { label: 'Bool', icon: 'checkbox-marked', route: '/bool' },
            { label: 'Box', icon: 'selection', route: '/box' },
            { label: 'Button & Badge', icon: 'solid', route: '/button-badge' },
            { label: 'Card', icon: 'card-account-details', route: '/card' },
            { label: 'DateTime', icon: 'calendar', route: '/datetime' },
            { label: 'Detail', icon: 'account', route: '/detail' },
            { label: 'Dropdown', icon: 'menu-right', route: '/dropdown' },
            { label: 'Help', icon: 'help-circle', route: '/help' },
            { label: 'Float', icon: 'decimal', route: '/float' },
            { label: 'Int', icon: 'numeric', route: '/int' },
            { label: 'Item List', icon: 'format-list-checks', route: '/item' },
            { label: 'Label', icon: 'account-circle', route: '/label' },
            { label: 'Loader', icon: 'dots-horizontal', route: '/loader' },
            { label: 'Swal modal', icon: 'application', route: '/swal-modal' },
            { label: 'Modal', icon: 'application', route: '/modal' },
            { label: 'Nav bar', icon: 'page-layout-header', route: '/navbar' },
            { label: 'Phone', icon: 'phone', route: '/phone' },
            { label: 'Ribbon', icon: 'ribbon', route: '/ribbon' },
            { label: 'Select', icon: 'format-list-bulleted', route: '/select' },
            { label: 'Tabs', icon: 'folder', route: '/tabs' },
            { label: 'Text', icon: 'form-textbox', route: '/text' },
            { label: 'Tooltip & Hint', icon: 'tooltip', route: '/tooltip-hint' },
            { label: 'Wizard', icon: 'auto-fix', route: '/wizard' },
            { label: 'Wrapper', icon: 'view-quilt', route: '/wrapper' },
            { label: 'Grid', icon: 'view-grid', route: '/grid' },
        ];
        this.plex.updateMenu(menu);
        this.plex.updateAppStatus({ API: 'OK' });
        this.plex.updateUserInfo({
            usuario: {
                nombreCompleto: 'Haruki Murakami',
                nombre: 'Haruki',
                apellido: 'Murakami',
                username: 26108063,
                documento: 26108063
            },
            organizacion: {
                _id: '57e9670e52df311059bc8964',
                nombre: 'HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON',
                id: '57e9670e52df311059bc8964'
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'plex-app-root',
            templateUrl: './app.component.html'
        }),
        __metadata("design:paramtypes", [service_1.Plex])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=../../../src/demo/app/app.component.js.map