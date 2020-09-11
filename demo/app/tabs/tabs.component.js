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
var service_1 = require("./../../../lib/core/service");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var TabsDemoComponent = /** @class */ (function () {
    function TabsDemoComponent(plex) {
        this.plex = plex;
        this.activo = 1;
        this.activoDinamico = 0;
        this.mostrar = true;
        this.tabs = [
            { label: 'este es un ejemplo re largo', icon: 'account', color: 'procedimiento' },
            { label: 'usuario', icon: 'account', color: 'default' },
            { label: 'semantic tag', icon: 'trastorno', color: 'trastorno' }
        ];
        this.contenidoAsync = rxjs_1.of([1, 2, 3]).pipe(
        // tslint:disable-next-line:no-console
        operators_1.tap(console.log));
    }
    TabsDemoComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Ir a inicio', icon: 'dna', route: '/incio' },
            { label: 'Ir a ruta inexistente', icon: 'flag', route: '/ruta-rota' },
            { divider: true },
            { label: 'Item con handler', icon: 'wrench', handler: (function () { alert('Este es un handler'); }) }
        ];
    };
    TabsDemoComponent.prototype.next = function () {
        this.activo++;
        if (this.activo > 2) {
            this.activo = 0;
        }
    };
    TabsDemoComponent.prototype.previous = function () {
        if (this.activo > 0) {
            this.activo = this.activo - 1;
        }
    };
    TabsDemoComponent.prototype.cambio = function (value) {
        this.plex.toast('info', 'Tab seleccionado: ' + value);
        this.activo = value;
    };
    TabsDemoComponent.prototype.close = function (value) {
        this.plex.toast('danger', 'Tab cerrado: ' + value);
        this.tabs.splice(value, 1);
        if (value < this.activoDinamico) {
            this.activoDinamico--;
        }
    };
    TabsDemoComponent.prototype.add = function () {
        var icons = [
            'folder-outline',
            'folder-search-outline',
            'minus-circle',
            'smoking',
            'skull',
            'airplane-off',
            'folder-edit',
            'microphone-settings',
            'food-off',
            'checkbox-intermediate'
        ];
        var random = Math.round(Math.random() * icons.length);
        this.tabs.push({ label: icons[random], icon: icons[random], color: 'default' });
        this.activoDinamico = this.tabs.length - 1;
    };
    TabsDemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'tabs.html',
        }),
        __metadata("design:paramtypes", [service_1.Plex])
    ], TabsDemoComponent);
    return TabsDemoComponent;
}());
exports.TabsDemoComponent = TabsDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/tabs/tabs.component.js.map