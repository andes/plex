"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DateTimeDemoComponent = /** @class */ (function () {
    function DateTimeDemoComponent() {
    }
    DateTimeDemoComponent.prototype.ngOnInit = function () {
        // Tepmlate-Form1 model
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
        // Form4: Disabled
        this.model4 = {
            fechaHora: null,
            disabled: true
        };
    };
    DateTimeDemoComponent.prototype.updateMaxHora = function () {
        this.tModel.minHora = moment().add(30, 'minutes').add(1, 'days');
    };
    DateTimeDemoComponent.prototype.horaPlus = function () {
        return moment(this.tModel.hora).add(30, 'minutes');
    };
    DateTimeDemoComponent.prototype.onBlur = function () {
    };
    DateTimeDemoComponent.prototype.onChange = function (date) {
    };
    DateTimeDemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'datetime.html',
        })
    ], DateTimeDemoComponent);
    return DateTimeDemoComponent;
}());
exports.DateTimeDemoComponent = DateTimeDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/datetime/datetime.component.js.map