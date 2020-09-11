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
var WizardDemoComponent = /** @class */ (function () {
    function WizardDemoComponent(plex) {
        this.plex = plex;
        this.config = {
            id: 'demo',
            updatedOn: moment('2018-08-01').toDate(),
            steps: [
                { title: 'Uno', content: 'Contenido uno' },
                { title: 'Dos', content: 'Contenido dos' },
                { title: 'Tres', content: 'Contenido tres' },
                { title: 'Cuatro', content: 'Contenido cuatro' },
            ],
            forceShow: false,
            fullScreen: false,
            showNumbers: false
        };
        this.configFullScreen = {
            id: 'demo-fullscreen',
            updatedOn: moment('2018-08-01').toDate(),
            steps: [
                { title: 'Uno', content: 'Contenido uno', imageClass: 'plex-wizard-demo-1' },
                { title: 'Dos', content: 'Contenido dos', imageClass: 'plex-wizard-demo-2' },
                { title: 'Tres', content: 'Contenido tres', imageClass: 'plex-wizard-demo-1' },
            ],
            forceShow: false,
            fullScreen: true,
            showNumbers: false
        };
        this.field = '';
    }
    WizardDemoComponent.prototype.mostrar = function (fullscreen) {
        if (fullscreen) {
            this.plex.wizard(this.configFullScreen);
        }
        else {
            this.plex.wizard(this.config);
        }
    };
    WizardDemoComponent.prototype.changeForce = function () {
        this.configFullScreen.forceShow = this.config.forceShow;
    };
    WizardDemoComponent.prototype.guardar = function ($event) {
    };
    WizardDemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'wizard.html'
        }),
        __metadata("design:paramtypes", [service_1.Plex])
    ], WizardDemoComponent);
    return WizardDemoComponent;
}());
exports.WizardDemoComponent = WizardDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/wizard/wizard.component.js.map