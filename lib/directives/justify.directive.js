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
var JustifyDirective = /** @class */ (function () {
    function JustifyDirective() {
        this.justify = 'between';
        this.flex = true;
        this.flex2 = true;
    }
    Object.defineProperty(JustifyDirective.prototype, "start", {
        get: function () {
            return this.justify === 'start';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JustifyDirective.prototype, "end", {
        get: function () {
            return this.justify === 'end';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JustifyDirective.prototype, "center", {
        get: function () {
            return this.justify === 'center';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JustifyDirective.prototype, "between", {
        get: function () {
            return !this.justify || this.justify === 'between';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JustifyDirective.prototype, "around", {
        get: function () {
            return this.justify === 'around';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], JustifyDirective.prototype, "justify", void 0);
    __decorate([
        core_1.HostBinding('class.d-flex'),
        __metadata("design:type", Object)
    ], JustifyDirective.prototype, "flex", void 0);
    __decorate([
        core_1.HostBinding('class.align-items-center'),
        __metadata("design:type", Object)
    ], JustifyDirective.prototype, "flex2", void 0);
    __decorate([
        core_1.HostBinding('class.justify-content-start'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], JustifyDirective.prototype, "start", null);
    __decorate([
        core_1.HostBinding('class.justify-content-end'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], JustifyDirective.prototype, "end", null);
    __decorate([
        core_1.HostBinding('class.justify-content-center'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], JustifyDirective.prototype, "center", null);
    __decorate([
        core_1.HostBinding('class.justify-content-between'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], JustifyDirective.prototype, "between", null);
    __decorate([
        core_1.HostBinding('class.justify-content-around'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], JustifyDirective.prototype, "around", null);
    JustifyDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line:directive-selector
            selector: '[justify]'
        })
    ], JustifyDirective);
    return JustifyDirective;
}());
exports.JustifyDirective = JustifyDirective;
//# sourceMappingURL=../../../src/lib/directives/justify.directive.js.map