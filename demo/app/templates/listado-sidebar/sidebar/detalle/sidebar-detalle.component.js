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
var paciente_service_1 = require("../../../service/paciente.service");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var options_component_1 = require("../../../../../../lib/options/options.component");
var SidebarDetalleComponent = /** @class */ (function () {
    function SidebarDetalleComponent(pacienteService, route, router) {
        this.pacienteService = pacienteService;
        this.route = route;
        this.router = router;
        this.items = [
            {
                label: 'opcion 1',
                key: '1',
            },
            {
                label: 'opcion 2',
                key: '2',
            },
            {
                label: 'opcion 3',
                key: '3',
            }
        ];
        this.viewOptions = true;
        this.selectedOption = '1';
        this.historial = [
            {
                fecha: '05/03/2020',
                prestacion: 'Exámen médico del adulto',
                estado: 'validada',
            },
            {
                fecha: '23/01/2019',
                prestacion: 'Exámen médico del adulto',
                estado: 'validada',
            },
            {
                fecha: '11/07/2018',
                prestacion: 'Exámen médico del adulto',
                estado: 'validada',
            },
            {
                fecha: '07/11/2017',
                prestacion: 'Exámen médico del adulto',
                estado: 'validada',
            },
            {
                fecha: '21/05/2017',
                prestacion: 'Exámen médico del adulto',
                estado: 'validada',
            },
        ];
    }
    SidebarDetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paciente$ = this.route.paramMap.pipe(operators_1.switchMap(function (params) {
            return _this.pacienteService.getPaciente(params.get('id'));
        }));
    };
    SidebarDetalleComponent.prototype.gotoPacientes = function (paciente) {
        var pacienteId = paciente ? paciente.id : null;
        this.router.navigate(['/listado-sidebar', { id: pacienteId, foo: 'foo' }]);
    };
    SidebarDetalleComponent.prototype.toggleItems = function () {
        if (this.items.length === 2) {
            this.items.push({ label: 'opcion 3', key: '3' });
        }
        else {
            this.items = this.items.filter(function (item) { return item.key !== '3'; });
            this.items = [
                { label: 'otras 1', key: '7' },
                { label: 'otas 2', key: '8' },
            ];
        }
    };
    SidebarDetalleComponent.prototype.onActiveOption = function (opcion) {
        this.selectedOption = opcion;
    };
    __decorate([
        core_1.ContentChild(options_component_1.PlexOptionsComponent, { static: true }),
        __metadata("design:type", options_component_1.PlexOptionsComponent)
    ], SidebarDetalleComponent.prototype, "plexOptions", void 0);
    SidebarDetalleComponent = __decorate([
        core_1.Component({
            selector: 'plex-sidebar-detalle',
            templateUrl: './sidebar-detalle.component.html',
        }),
        __metadata("design:paramtypes", [paciente_service_1.PacienteService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], SidebarDetalleComponent);
    return SidebarDetalleComponent;
}());
exports.SidebarDetalleComponent = SidebarDetalleComponent;
//# sourceMappingURL=../../../../../../../src/demo/app/templates/listado-sidebar/sidebar/detalle/sidebar-detalle.component.js.map