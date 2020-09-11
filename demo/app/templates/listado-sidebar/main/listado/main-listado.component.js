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
var MainListadoComponent = /** @class */ (function () {
    function MainListadoComponent(pacienteService, router) {
        this.pacienteService = pacienteService;
        this.router = router;
    }
    MainListadoComponent.prototype.ngOnInit = function () {
        this.pacientes$ = this.pacienteService.getPacientes();
    };
    MainListadoComponent.prototype.selected = function (paciente) {
        this.selectedId = paciente.id;
        this.router.navigate(['templates', 'listado-sidebar', this.selectedId]);
    };
    MainListadoComponent = __decorate([
        core_1.Component({
            selector: 'plex-main-listado',
            templateUrl: './main-listado.component.html',
        }),
        __metadata("design:paramtypes", [paciente_service_1.PacienteService,
            router_1.Router])
    ], MainListadoComponent);
    return MainListadoComponent;
}());
exports.MainListadoComponent = MainListadoComponent;
//# sourceMappingURL=../../../../../../../src/demo/app/templates/listado-sidebar/main/listado/main-listado.component.js.map