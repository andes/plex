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
var router_1 = require("@angular/router");
// Servicios y modelo
var paciente_service_1 = require("../service/paciente.service");
var service_1 = require("./../../../../lib/core/service");
var ListadoSidebarComponent = /** @class */ (function () {
    function ListadoSidebarComponent(pacienteService, route, plex) {
        this.pacienteService = pacienteService;
        this.route = route;
        this.plex = plex;
        this.modelo1 = { select: null };
        this.modelo2 = {
            select: null,
            soloLectura: false,
            selectMultiple: null
        };
        this.showModal = false;
        this.foco = 'main';
        this.prueba = '';
        this.cambio = '';
    }
    ListadoSidebarComponent.prototype.ngOnInit = function () {
        // plex-datetime
        this.tModel = {
            fechaHora: null,
            fecha: null,
            hora: null,
            horados: null,
            disabled: false,
            min: new Date(1970, 0, 1),
            minHora: moment().add(30, 'minutes'),
            maxHora: moment().add(180, 'minutes'),
            fechaDecounce: new Date(1970, 0, 1),
        };
        // plex-phone
        // plex-float
        this.tModel = { valor: null };
        // plex-select
        this.opciones = [{
                id: 1,
                nombre: 'Argentina',
                continente: 'Latinoamerica',
            },
            {
                id: 2,
                nombre: 'Brasil',
                continente: 'Latinoamerica',
            },
            {
                id: 3,
                nombre: 'Hospital Provincial Neuquen "Dr. Eduardo Castro Rendón"',
                continente: 'Latinoamerica',
            }];
        this.modelo1.select = this.modelo2.select = this.opciones[1];
        // plex-text
        this.templateModel2 = { nombre: null, min: 10, max: 15 };
        // plex-bool
        this.modelo = { checkbox: false, slide: false };
    };
    ListadoSidebarComponent.prototype.updateMaxHora = function () {
        this.tModel.minHora = moment().add(30, 'minutes').add(1, 'days');
    };
    ListadoSidebarComponent.prototype.horaPlus = function () {
        return moment(this.tModel.hora).add(30, 'minutes');
    };
    ListadoSidebarComponent.prototype.onChange = function () {
        this.plex.info('success', 'Este cartel se demoro un segundo en aparecer después de escribir.');
    };
    ListadoSidebarComponent = __decorate([
        core_1.Component({
            templateUrl: 'listado-sidebar.html',
            styleUrls: ['listado-sidebar.scss'],
        }),
        __metadata("design:paramtypes", [paciente_service_1.PacienteService,
            router_1.ActivatedRoute,
            service_1.Plex])
    ], ListadoSidebarComponent);
    return ListadoSidebarComponent;
}());
exports.ListadoSidebarComponent = ListadoSidebarComponent;
//# sourceMappingURL=../../../../../src/demo/app/templates/listado-sidebar/listado-sidebar.js.map