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
var GrowDirective = /** @class */ (function () {
    function GrowDirective() {
        this.grow = 'auto';
    }
    Object.defineProperty(GrowDirective.prototype, "full", {
        get: function () {
            return this.grow === 'full';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GrowDirective.prototype, "auto", {
        get: function () {
            return this.grow === 'auto';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GrowDirective.prototype, "grow1", {
        get: function () {
            return this.grow === '1';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GrowDirective.prototype, "grow2", {
        get: function () {
            return this.grow === '2';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GrowDirective.prototype, "grow3", {
        get: function () {
            return this.grow === '3';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GrowDirective.prototype, "grow4", {
        get: function () {
            return this.grow === '4';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], GrowDirective.prototype, "grow", void 0);
    __decorate([
        core_1.HostBinding('class.grow-full'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], GrowDirective.prototype, "full", null);
    __decorate([
        core_1.HostBinding('class.grow-auto'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], GrowDirective.prototype, "auto", null);
    __decorate([
        core_1.HostBinding('class.grow-1'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], GrowDirective.prototype, "grow1", null);
    __decorate([
        core_1.HostBinding('class.grow-2'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], GrowDirective.prototype, "grow2", null);
    __decorate([
        core_1.HostBinding('class.grow-3'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], GrowDirective.prototype, "grow3", null);
    __decorate([
        core_1.HostBinding('class.grow-4'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], GrowDirective.prototype, "grow4", null);
    GrowDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line:directive-selector
            selector: '[grow]'
        })
    ], GrowDirective);
    return GrowDirective;
}());
exports.GrowDirective = GrowDirective;
//# sourceMappingURL=../../../src/lib/directives/grow.directive.js.map