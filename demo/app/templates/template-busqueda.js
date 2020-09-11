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
var service_1 = require("../../../lib/core/service");
var select_service_1 = require("./../select/select.service");
var TemplateBusquedaComponent = /** @class */ (function () {
    // Constructor
    function TemplateBusquedaComponent(plex, servicio) {
        this.plex = plex;
        this.servicio = servicio;
        // Propiedades privadas
        // Propiedades públicas
        this.listados = [];
        this.seleccion = [];
        this.sexoArray = [];
        this.mostrarMasOpciones = false;
        this.loader = true;
        // Eventos
        this.selected = new core_1.EventEmitter();
        this.plex.updateTitle([{
                route: '/',
                name: 'MÓDULO'
            }, {
                name: 'Buscar'
            }]);
        this.listados = [
            {
                id: 1,
                fecha: 'Mon Feb 14 2018 11:15:52 GMT-0300 (ART)',
                apellido: 'Saddi',
                nombre: 'Nahir',
                sexo: 'femenino',
                pais: 'Argentina'
            },
            {
                id: 2,
                fecha: 'Mon Feb 16 2018 11:15:52 GMT-0300 (ART)',
                apellido: 'Roa',
                nombre: 'Silvina',
                sexo: 'femenino'
            },
            {
                id: 3,
                fecha: 'Mon Feb 20 2018 11:15:52 GMT-0300 (ART)',
                apellido: 'Gabriel',
                nombre: 'Juan',
                sexo: 'masculino'
            },
        ];
    }
    // Métodos (privados y públicos)
    TemplateBusquedaComponent.prototype.ngOnInit = function () {
        // Por defecto ponemos la fecha de hoy
        this.fechaDesde = moment().startOf('day');
        this.fechaHasta = moment().endOf('day');
        this.sexoArray = [{
                id: 1,
                nombre: 'Femenino'
            },
            {
                id: 2,
                nombre: 'Masculino'
            },
            {
                id: 3,
                nombre: 'Otro'
            }];
        this.cargarListado();
    };
    TemplateBusquedaComponent.prototype.refreshSelection = function () {
        this.seleccion = [];
        this.cargarListado();
    };
    TemplateBusquedaComponent.prototype.cargarPaises = function (event) {
        // Event tiene una propiedad 'query' que contiene el texto que el usuario ha escrito en el input.
        // Esto permite enviar a las APIs un parámetro para hacer las búsquedas más eficientes
        if (event.query) {
            this.servicio.get(event.query).subscribe(event.callback);
        }
        else {
            event.callback(null);
        }
    };
    TemplateBusquedaComponent.prototype.cargarListado = function () {
        var _this = this;
        // Simulamos un tiempo de busqueda
        this.loader = true;
        setTimeout(function () {
            _this.loader = false;
            var len = Math.floor(Math.random() * _this.listados.length);
            for (var i = 0; i < len; i++) {
                _this.seleccion.push(_this.listados[i]);
            }
        }, 3000);
    };
    TemplateBusquedaComponent.prototype.seleccionar = function (item) {
        this.plex.info('success', 'Se seleccionó un item');
        this.selected.emit(item);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TemplateBusquedaComponent.prototype, "selected", void 0);
    TemplateBusquedaComponent = __decorate([
        core_1.Component({
            templateUrl: 'template-busqueda.html'
        }),
        __metadata("design:paramtypes", [service_1.Plex, select_service_1.ServiceDemoSelect])
    ], TemplateBusquedaComponent);
    return TemplateBusquedaComponent;
}());
exports.TemplateBusquedaComponent = TemplateBusquedaComponent;
//# sourceMappingURL=../../../../src/demo/app/templates/template-busqueda.js.map