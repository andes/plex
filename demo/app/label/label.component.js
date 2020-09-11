"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LabelDemoComponent = /** @class */ (function () {
    function LabelDemoComponent() {
        this.foto = true;
        this.icon = false;
        this.icono = {
            caracter: 'pencil',
            color: 'info',
        };
        this.datos = [
            { label: 'edad', valor: '41 años', type: 'success' },
            { label: 'documento', valor: '29.879.253', type: 'info' },
            { label: 'sexo', valor: 'Masculino', type: 'default' },
            { label: 'género', valor: 'Hospital Provincial de Neuquen Castro Rendon', type: 'warning' },
            { label: 'fecha de nacimiento', valor: '14 de Julio de 1953', type: 'success' },
            { label: 'CUIL', valor: '20-16879253-5', type: 'warning' },
            { label: 'Nota', valor: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis. Lorem ipsum sonnet.', type: 'warning' },
            { label: 'Comience buscando un paciente en la barra superior', valor: 'Ingrese al menos tres caracteres. Si la búsqueda no arroja el resultado esperado, presione el botón "Paciente Nuevo"', type: 'warning' }
        ];
    }
    LabelDemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'label.html',
        })
    ], LabelDemoComponent);
    return LabelDemoComponent;
}());
exports.LabelDemoComponent = LabelDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/label/label.component.js.map