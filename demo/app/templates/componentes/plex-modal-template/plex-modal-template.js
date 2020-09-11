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
var ModalTemplateComponent = /** @class */ (function () {
    function ModalTemplateComponent() {
        this.motivoAccesoHuds = new core_1.EventEmitter();
        this.motivosAccesoHuds = [
            { id: 'auditoria', label: 'Procesos de Auditoría' },
            { id: 'urgencia', label: 'Intervención de Urgencia/Emergencia' },
            { id: 'administrativo', label: 'Procesos Administrativos' },
            { id: 'continuidad', label: 'Intervención en el proceso de cuidado del paciente' }
        ];
        this.contenido = '';
        this.motivoSelected = null;
    }
    ModalTemplateComponent.prototype.openModal = function (index) {
        this.modalRefs.find(function (x, i) { return i === index; }).show();
    };
    ModalTemplateComponent.prototype.closeModal = function (index, formulario) {
        this.modalRefs.find(function (x, i) { return i === index; }).close();
        if (formulario) {
            formulario.reset();
        }
    };
    ModalTemplateComponent.prototype.motivoSelect = function () {
        return this.motivoSelected === null;
    };
    ModalTemplateComponent.prototype.notificarAccion = function (flag) {
        var _this = this;
        if (flag) {
            var item = this.motivosAccesoHuds.find(function (elem) { return elem.id === _this.motivoSelected; });
            this.motivoAccesoHuds.emit(item.label);
        }
        else {
            this.motivoAccesoHuds.emit(null);
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ModalTemplateComponent.prototype, "motivoAccesoHuds", void 0);
    __decorate([
        core_1.ViewChildren('modal'),
        __metadata("design:type", core_1.QueryList)
    ], ModalTemplateComponent.prototype, "modalRefs", void 0);
    ModalTemplateComponent = __decorate([
        core_1.Component({
            selector: 'plex-modal-template',
            templateUrl: 'plex-modal-template.html'
        })
    ], ModalTemplateComponent);
    return ModalTemplateComponent;
}());
exports.ModalTemplateComponent = ModalTemplateComponent;
//# sourceMappingURL=../../../../../../src/demo/app/templates/componentes/plex-modal-template/plex-modal-template.js.map