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
var ResponsiveDirective = /** @class */ (function () {
    function ResponsiveDirective(el, render, zone) {
        this.el = el;
        this.render = render;
        this.zone = zone;
        // ResizeObserver es soportado desde la version 64 de Chrome.
        // Tenemos algunos usuarios en la version 59 todavía.
        this.ResizeObserver = window.ResizeObserver;
        this.width = 0;
    }
    ResponsiveDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.ResizeObserver) {
            this.observer = new this.ResizeObserver(function (entries) {
                _this.zone.run(function () {
                    _this.checkDimension();
                });
            });
            this.observer.observe(this.el.nativeElement);
        }
        else {
            this.handler = this.onResize.bind(this);
            window.addEventListener('resize', this.handler);
        }
    };
    ResponsiveDirective.prototype.ngOnDestroy = function () {
        if (this.observer) {
            this.observer.unobserve(this.el.nativeElement);
        }
        if (this.handler) {
            window.removeEventListener('resize', this.handler);
        }
    };
    ResponsiveDirective.prototype.checkDimension = function () {
        this.width = this.el.nativeElement.clientWidth;
        this.render.removeClass(this.el.nativeElement, 'size-sm');
        this.render.removeClass(this.el.nativeElement, 'size-md');
        this.render.removeClass(this.el.nativeElement, 'size-lg');
        this.render.removeClass(this.el.nativeElement, 'size-xl');
        if (this.width >= 1024) {
            this.render.addClass(this.el.nativeElement, 'size-xl');
        }
        else if (this.width >= 768 && this.width < 1024) {
            this.render.addClass(this.el.nativeElement, 'size-lg');
        }
        else if (this.width >= 576 && this.width < 768) {
            this.render.addClass(this.el.nativeElement, 'size-md');
        }
        else if (this.width < 576) {
            this.render.addClass(this.el.nativeElement, 'size-sm');
        }
    };
    ResponsiveDirective.prototype.ngAfterViewChecked = function () {
        if (!this.ResizeObserver) {
            this.checkDimension();
        }
    };
    ResponsiveDirective.prototype.onResize = function () {
        var _this = this;
        this.zone.run(function () {
            _this.checkDimension();
        });
    };
    ResponsiveDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line:directive-selector
            selector: '[responsive]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer2,
            core_1.NgZone])
    ], ResponsiveDirective);
    return ResponsiveDirective;
}());
exports.ResponsiveDirective = ResponsiveDirective;
//# sourceMappingURL=../../../src/lib/directives/responsive.directive.js.map