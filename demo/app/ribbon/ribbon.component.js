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
var RibbonDemoComponent = /** @class */ (function () {
    function RibbonDemoComponent() {
        this.layout = true;
    }
    __decorate([
        core_1.HostBinding('class.plex-layout'),
        __metadata("design:type", Object)
    ], RibbonDemoComponent.prototype, "layout", void 0);
    RibbonDemoComponent = __decorate([
        core_1.Component({
            templateUrl: './ribbon.html',
            styles: ["\n        plex-ribbon {\n            position: absolute;\n            top: -40px !important;\n            left: 20px;\n        }\n    "]
        })
    ], RibbonDemoComponent);
    return RibbonDemoComponent;
}());
exports.RibbonDemoComponent = RibbonDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/ribbon/ribbon.component.js.map