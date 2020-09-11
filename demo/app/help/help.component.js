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
var service_1 = require("../../../lib/core/service");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var HelpDemoComponent = /** @class */ (function () {
    function HelpDemoComponent(plex) {
        this.plex = plex;
        this.showContent = false;
        this.asyncContent = rxjs_1.from([1, 2, 3, 4]).pipe(operators_1.tap(function (index) {
            // tslint:disable-next-line:no-console
            console.log('Contenido evaluado recien al abrirse', index);
        }));
    }
    HelpDemoComponent.prototype.ngOnInit = function () {
    };
    HelpDemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'help.html',
        }),
        __metadata("design:paramtypes", [service_1.Plex])
    ], HelpDemoComponent);
    return HelpDemoComponent;
}());
exports.HelpDemoComponent = HelpDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/help/help.component.js.map