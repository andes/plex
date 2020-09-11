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
var hint_component_1 = require("./hint.component");
var HintDirective = /** @class */ (function () {
    function HintDirective(viewContainerRef, resolver, cdr) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.cdr = cdr;
        // default = Background gris
        this.hintType = 'default';
        this.detach = '';
        this.hintIcon = 'help';
    }
    Object.defineProperty(HintDirective.prototype, "position", {
        set: function (value) {
            if (value === 'top') {
                this.position = 'above';
            }
            if (value === 'bottom') {
                this.position = 'below';
            }
        },
        enumerable: true,
        configurable: true
    });
    HintDirective.prototype.ngOnInit = function () {
        this.cdr.detectChanges();
        var factory = this.resolver.resolveComponentFactory(hint_component_1.HintComponent);
        this.tooltip = this.viewContainerRef.createComponent(factory);
        this.tooltip.instance.hostElement = this.viewContainerRef.element.nativeElement;
        this.tooltip.instance.content = this.content;
        this.tooltip.instance.position = this.position;
        this.tooltip.instance.hintType = this.hintType;
        this.tooltip.instance.detach = this.detach;
        this.tooltip.instance.hintIcon = this.hintIcon;
    };
    __decorate([
        core_1.Input('hint'),
        __metadata("design:type", Object)
    ], HintDirective.prototype, "content", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HintDirective.prototype, "hintType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HintDirective.prototype, "detach", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HintDirective.prototype, "hintIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], HintDirective.prototype, "position", null);
    HintDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line:directive-selector
            selector: '[hint], [position:has(hint)], [icon:has(hint)], [detach:has(hint)]',
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef,
            core_1.ComponentFactoryResolver,
            core_1.ChangeDetectorRef])
    ], HintDirective);
    return HintDirective;
}());
exports.HintDirective = HintDirective;
//# sourceMappingURL=../../../src/lib/hint/hint.directive.js.map