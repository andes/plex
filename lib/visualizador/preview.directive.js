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
var visualizador_component_1 = require("./visualizador.component");
var PreviewDirective = /** @class */ (function () {
    function PreviewDirective(viewContainerRef, resolver, el) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.el = el;
    }
    PreviewDirective.prototype.click = function () {
        var _this = this;
        var source = this.el.nativeElement.src;
        var factory = this.resolver.resolveComponentFactory(visualizador_component_1.PlexVisualizadorComponent);
        this.visualizador = this.viewContainerRef.createComponent(factory);
        this.visualizador.instance.files = [
            source
        ];
        this.visualizador.instance.open();
        this.visualizador.instance.closed.subscribe(function () {
            _this.visualizador.destroy();
            _this.visualizador = null;
        });
    };
    __decorate([
        core_1.HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreviewDirective.prototype, "click", null);
    PreviewDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'img[preview]'
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef,
            core_1.ComponentFactoryResolver,
            core_1.ElementRef])
    ], PreviewDirective);
    return PreviewDirective;
}());
exports.PreviewDirective = PreviewDirective;
//# sourceMappingURL=../../../src/lib/visualizador/preview.directive.js.map