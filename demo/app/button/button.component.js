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
var ButtonDemoComponent = /** @class */ (function () {
    function ButtonDemoComponent(plex) {
        this.plex = plex;
        this.modelo = {
            campo1: null
        };
        this.color = 'red';
    }
    ButtonDemoComponent.prototype.ngOnInit = function () {
        this.plex.updateTitle([{ name: 'Plex', route: '/' }, { name: 'Button' }]);
    };
    ButtonDemoComponent.prototype.onClick = function () {
        alert('Click handler was fired');
    };
    ButtonDemoComponent.prototype.onDisabledClick = function () {
        alert('ESTE HANDLER NO DEBERÍA EJECUTARSE. SI SE EJECUTA ES UN POR UN BUG DE ANGULAR/PLEX');
    };
    ButtonDemoComponent.prototype.guardar = function ($event) {
        if ($event.formValid) {
            this.plex.info('success', 'Formulario OK');
        }
        else {
            this.plex.info('warning', 'Completar datos requeridos');
        }
    };
    ButtonDemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'button.html',
        }),
        __metadata("design:paramtypes", [service_1.Plex])
    ], ButtonDemoComponent);
    return ButtonDemoComponent;
}());
exports.ButtonDemoComponent = ButtonDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/button/button.component.js.map