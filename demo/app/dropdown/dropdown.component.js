"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DropdownDemoComponent = /** @class */ (function () {
    function DropdownDemoComponent() {
        this.lista = [
            {
                titulo: 'Titulo del primer item',
                subtitulo: 'Este es el subtitulo del primer item',
            },
            {
                titulo: 'Titulo del segundo item',
                subtitulo: 'Este es el subtitulo del segundo item',
            },
            {
                titulo: 'Titulo del tercer item',
                subtitulo: 'Este es el subtitulo del tercer item',
            },
        ];
    }
    DropdownDemoComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Ir a inicio', icon: 'home', route: '/incio' },
            { label: 'Ir a ruta inexistente', icon: 'flag', route: '/ruta-rota' },
            { divider: true },
            { label: 'Item con handler', icon: 'account', handler: (function () { alert('Este es un handler'); }) }
        ];
        // Form1: Sin validador
        this.templateModel1 = { nombre: null };
    };
    DropdownDemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'dropdown.html',
        })
    ], DropdownDemoComponent);
    return DropdownDemoComponent;
}());
exports.DropdownDemoComponent = DropdownDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/dropdown/dropdown.component.js.map