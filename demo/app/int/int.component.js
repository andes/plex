"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IntDemoComponent = /** @class */ (function () {
    function IntDemoComponent() {
    }
    IntDemoComponent.prototype.ngOnInit = function () {
        // Tepmlate-Form1 model
        this.tModel = { valor: null };
        this.model1 = { valor: null };
        this.model2 = { valor: null };
    };
    IntDemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'int.html',
        })
    ], IntDemoComponent);
    return IntDemoComponent;
}());
exports.IntDemoComponent = IntDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/int/int.component.js.map