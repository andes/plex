"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DetailDemoComponent = /** @class */ (function () {
    function DetailDemoComponent() {
        this.contacto = 'dato de contacto';
        this.direccion = 'calle y numeracion';
        this.entidadValidadora = 'RENAPER';
        this.foto = true;
        this.icon = false;
        this.icono = {
            caracter: 'pencil',
            color: 'info',
        };
        this.paciente = {
            id: 'ìd00321453221',
            documento: '36307632',
            cuil: '20-36307632-5',
            activo: true,
            estado: 'temporal',
            nombre: 'Fernanda Agustina',
            apellido: 'Sastre Maranelli',
            nombreCompleto: 'Fernanda Agustina Sastre Maranelli',
            alias: '',
            contacto: [this.contacto],
            sexo: undefined,
            genero: undefined,
            fechaNacimiento: '20/09/1992',
            tipoIdentificacion: '',
            numeroIdentificacion: '',
            edad: 27,
            edadReal: null,
            fechaFallecimiento: null,
            direccion: [this.direccion],
            estadoCivil: undefined,
            foto: 'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/11/new-lead-docs.jpg',
            relaciones: null,
            financiador: 'ISSN',
            identificadores: null,
            claveBlocking: null,
            entidadesValidadoras: [this.entidadValidadora],
            scan: null,
            reportarError: false,
            notaError: ''
        };
        this.datos = [
            { label: 'edad', valor: '41 años' },
            { label: 'documento', valor: '29.879.253' },
            { label: 'sexo', valor: 'Masculino' },
            { label: 'género', valor: 'Hospital Provincial de Neuquen Castro Rendon' },
            { label: 'fecha de nacimiento', valor: '14 de Julio de 1953' },
            { label: 'CUIL', valor: '20-16879253-5' },
            { label: 'Nota', valor: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis. Lorem ipsum sonnet.' }
        ];
    }
    DetailDemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'detail.html',
        })
    ], DetailDemoComponent);
    return DetailDemoComponent;
}());
exports.DetailDemoComponent = DetailDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/detail/detail.component.js.map