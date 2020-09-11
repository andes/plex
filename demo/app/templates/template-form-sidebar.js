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
var TemplateBotoneraSidebarComponent = /** @class */ (function () {
    // Constructor
    function TemplateBotoneraSidebarComponent(plex) {
        this.plex = plex;
        this.opcionesLugarNacimiento = [{ id: '1', nombre: 'Neuquén' }, { id: '2', nombre: 'Centenario' }, { id: '3', nombre: 'Zapala City' }, { id: '4', nombre: 'Plottier' }];
        this.opcionesSexo = [{ id: 'femenino', label: 'femenino' }, { id: 'masculino', label: 'masculino' }, { id: 'otro', label: 'otro' }];
        // Eventos
        this.save = new core_1.EventEmitter();
    }
    // Métodos
    TemplateBotoneraSidebarComponent.prototype.ngOnInit = function () {
        this.modelo = {
            apellido: 'García',
            nombre: 'Josefina',
            sexo: 'femenino',
            fechaNacimiento: new Date()
        };
    };
    /**
     * Guarda los datos del formulario y emite el dato guardado
     *
     * @param {any} $event formulario a validar
     */
    TemplateBotoneraSidebarComponent.prototype.guardar = function ($event) {
        if ($event.formValid) {
            // ...
            this.plex.info('success', 'Los datos están correctos');
            this.save.emit(this.modelo);
        }
        else {
            this.plex.info('warning', 'Completar datos requeridos');
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TemplateBotoneraSidebarComponent.prototype, "save", void 0);
    TemplateBotoneraSidebarComponent = __decorate([
        core_1.Component({
            templateUrl: 'template-form-sidebar.html'
        }),
        __metadata("design:paramtypes", [service_1.Plex])
    ], TemplateBotoneraSidebarComponent);
    return TemplateBotoneraSidebarComponent;
}());
exports.TemplateBotoneraSidebarComponent = TemplateBotoneraSidebarComponent;
//# sourceMappingURL=../../../../src/demo/app/templates/template-form-sidebar.js.map