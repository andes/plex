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
var TooltipHintDemoComponent = /** @class */ (function () {
    function TooltipHintDemoComponent() {
        this.message = '';
    }
    TooltipHintDemoComponent.prototype.ngOnInit = function () { };
    TooltipHintDemoComponent.prototype.alertar = function (e) {
        if (e.target) {
            this.message = '¿Cuántos clicks fallidos hace uno en la vida?';
            alert("Inner HTML: " + this.message);
        }
    };
    TooltipHintDemoComponent = __decorate([
        core_1.Component({
            templateUrl: './tooltip-hint.html'
        }),
        __metadata("design:paramtypes", [])
    ], TooltipHintDemoComponent);
    return TooltipHintDemoComponent;
}());
exports.TooltipHintDemoComponent = TooltipHintDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/tooltip-hint/tooltip-hint.component.js.map