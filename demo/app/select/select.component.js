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
// Importo un servicio de prueba
var select_service_1 = require("./select.service");
var SelectDemoComponent = /** @class */ (function () {
    function SelectDemoComponent(servicio) {
        this.servicio = servicio;
        // Permite el uso de flex-box en el componente
        this.layout = true;
        this.modelo1 = { select: null };
        this.modelo2 = {
            select: null,
            soloLectura: false,
            selectMultiple: null
        };
    }
    SelectDemoComponent.prototype.ngOnInit = function () {
        // Opciones
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
                nombre: 'Chile',
                continente: 'Latinoamerica',
            }];
        this.modelo1.select = this.modelo2.select = this.opciones[1];
        // setTimeout(() => {
        //     this.modelo2.select = {
        //         _id: '5821da5ab6f2bac35980c464',
        //         nombre: 'Arabia Saudita',
        //         id: '5821da5ab6f2bac35980c464'
        //     };
        // }, 1000);
    };
    SelectDemoComponent.prototype.loadData = function (event) {
        if (event.query) {
            this.servicio.get(event.query).subscribe(event.callback);
        }
        else {
            event.callback(null);
        }
    };
    SelectDemoComponent.prototype.cambiarOpciones = function () {
        this.opciones = [{
                id: 2,
                nombre: 'México',
                continente: 'Norteamérica',
            },
            {
                id: 3,
                nombre: 'Francia',
                continente: 'Europa',
            }];
    };
    __decorate([
        core_1.HostBinding('class.plex-layout'),
        __metadata("design:type", Object)
    ], SelectDemoComponent.prototype, "layout", void 0);
    SelectDemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'select.html',
        }),
        __metadata("design:paramtypes", [select_service_1.ServiceDemoSelect])
    ], SelectDemoComponent);
    return SelectDemoComponent;
}());
exports.SelectDemoComponent = SelectDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/select/select.component.js.map