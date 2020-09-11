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
var WrapperDemoComponent = /** @class */ (function () {
    function WrapperDemoComponent(plex) {
        this.plex = plex;
        this.modelo1 = { select: null, radio: null };
        this.modelo2 = {
            select: null,
            soloLectura: false,
            selectMultiple: null
        };
        this.prueba = '';
        this.opciones2 = [
            { id: 1, label: 'Rojo' },
            { id: 2, label: 'Verde' }
        ];
    }
    WrapperDemoComponent.prototype.ngOnInit = function () {
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
        // Template-Form2 model
        this.templateModel2 = { nombre: null, min: 10, max: 15 };
        // plex-phone
        // plex-float
        this.tModel = { valor: null };
        // plex-select
        this.opciones = [{
                id: 1,
                nombre: 'Hospital "Dr. Horacio Heller',
                continente: 'Zona metro',
            },
            {
                id: 2,
                nombre: 'Hospital Bouquet Roldán',
                continente: 'Zona metro',
            },
            {
                id: 3,
                nombre: 'Hospital San Martín de los Andes "Dr. Ramón Carrillo"',
                continente: 'Zona tres',
            },
            {
                id: 4,
                nombre: 'Hospital Centenario',
                continente: 'Zona metro',
            },
            {
                id: 5,
                nombre: 'Hospital Provincial Neuquen "Dr. Eduardo Castro Rendón"',
                continente: 'Zona metro',
            }
        ];
        this.modelo1.select = this.modelo2.select = this.opciones[1];
        // plex-text
        this.templateModel2 = { nombre: null, min: 10, max: 15 };
        // plex-bool
        this.modelo = { checkbox: false, slide: false };
    };
    WrapperDemoComponent.prototype.updateMaxHora = function () {
        this.tModel.minHora = moment().add(30, 'minutes').add(1, 'days');
    };
    WrapperDemoComponent.prototype.horaPlus = function () {
        return moment(this.tModel.hora).add(30, 'minutes');
    };
    WrapperDemoComponent.prototype.onChange = function () {
        this.plex.info('success', 'Este cartel se demoro un segundo en aparecer después de escribir.');
    };
    WrapperDemoComponent = __decorate([
        core_1.Component({
            templateUrl: './wrapper.html',
        }),
        __metadata("design:paramtypes", [service_1.Plex])
    ], WrapperDemoComponent);
    return WrapperDemoComponent;
}());
exports.WrapperDemoComponent = WrapperDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/wrapper/wrapper.component.js.map