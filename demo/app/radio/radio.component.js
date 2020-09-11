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
var RadioDemoComponent = /** @class */ (function () {
    function RadioDemoComponent() {
        this.modelo = {
        // radio: 2
        };
        this.opciones = [
            { id: 1, label: 'Rojo' },
            { id: 2, label: 'Verde' }
        ];
    }
    RadioDemoComponent.prototype.ngOnInit = function () {
    };
    RadioDemoComponent.prototype.borrar = function () {
        this.modelo = {};
    };
    RadioDemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'radio.html',
        }),
        __metadata("design:paramtypes", [])
    ], RadioDemoComponent);
    return RadioDemoComponent;
}());
exports.RadioDemoComponent = RadioDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/radio/radio.component.js.map