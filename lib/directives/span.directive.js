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
var SpanDirective = /** @class */ (function () {
    function SpanDirective() {
        this.span = 'auto';
    }
    Object.defineProperty(SpanDirective.prototype, "full", {
        get: function () {
            return this.span === 'full';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpanDirective.prototype, "auto", {
        get: function () {
            return this.span === 'auto';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpanDirective.prototype, "span1", {
        get: function () {
            return this.span === '1';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpanDirective.prototype, "span2", {
        get: function () {
            return this.span === '2';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpanDirective.prototype, "span3", {
        get: function () {
            return this.span === '3';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpanDirective.prototype, "span4", {
        get: function () {
            return this.span === '4';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SpanDirective.prototype, "span", void 0);
    __decorate([
        core_1.HostBinding('class.grid-column-full'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], SpanDirective.prototype, "full", null);
    __decorate([
        core_1.HostBinding('class.grid-column-auto'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], SpanDirective.prototype, "auto", null);
    __decorate([
        core_1.HostBinding('class.grid-column-span-1'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], SpanDirective.prototype, "span1", null);
    __decorate([
        core_1.HostBinding('class.grid-column-span-2'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], SpanDirective.prototype, "span2", null);
    __decorate([
        core_1.HostBinding('class.grid-column-span-3'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], SpanDirective.prototype, "span3", null);
    __decorate([
        core_1.HostBinding('class.grid-column-span-4'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], SpanDirective.prototype, "span4", null);
    SpanDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line:directive-selector
            selector: '[span]'
        })
    ], SpanDirective);
    return SpanDirective;
}());
exports.SpanDirective = SpanDirective;
//# sourceMappingURL=../../../src/lib/directives/span.directive.js.map