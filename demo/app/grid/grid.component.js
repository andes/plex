"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GridDemoComponent = /** @class */ (function () {
    function GridDemoComponent() {
        this.img = [
            {
                url: 'https://images.unsplash.com/photo-1560582861-45078880e48e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            },
            {
                url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            },
            {
                url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            },
            {
                url: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            },
            {
                url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            },
            {
                url: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            },
        ];
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
    GridDemoComponent = __decorate([
        core_1.Component({
            templateUrl: './grid.component.html',
        })
    ], GridDemoComponent);
    return GridDemoComponent;
}());
exports.GridDemoComponent = GridDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/grid/grid.component.js.map