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
var SwalModalDemoComponent = /** @class */ (function () {
    function SwalModalDemoComponent(plex) {
        this.plex = plex;
        this.alertText = 'Se ha detectado un error en la base de datos';
        this.alertTimeout = 0;
        this.toastText = 'Esta es una rica tostada';
        this.toastTimeout = 3000;
        this.confirmText = '¿Desea descargar el archivo?';
    }
    SwalModalDemoComponent.prototype.info = function (type) {
        var params = {
            type: type,
            content: this.alertText,
            title: 'Información',
            confirmButtonText: 'Aceptar',
            timeOut: this.alertTimeout
        };
        this.plex.info(params);
    };
    SwalModalDemoComponent.prototype.toast = function (type) {
        this.plex.toast(type, this.toastText, 'Información', this.toastTimeout);
    };
    SwalModalDemoComponent.prototype.confirm = function () {
        var _this = this;
        var params = {
            content: this.confirmText,
            title: 'El archivo se generó correctamente',
            confirmButtonText: 'Descargar archivo',
            cancelButtonText: 'Cancelar'
        };
        this.plex.confirm(params).then(function (resultado) {
            _this.resultado = resultado;
        });
    };
    SwalModalDemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'swal-modal.html'
        }),
        __metadata("design:paramtypes", [service_1.Plex])
    ], SwalModalDemoComponent);
    return SwalModalDemoComponent;
}());
exports.SwalModalDemoComponent = SwalModalDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/swal-modal/swal-modal.component.js.map