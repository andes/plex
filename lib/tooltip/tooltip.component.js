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
var tooltip_content_component_1 = require("./tooltip-content.component");
var TooltipComponent = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function TooltipComponent(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.tooltipPosition = 'top';
        this.tooltipAnimation = false;
    }
    Object.defineProperty(TooltipComponent.prototype, "tooltip", {
        set: function (value) {
            this.content = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipComponent.prototype, "titlePosition", {
        set: function (value) {
            this.tooltipPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    TooltipComponent.prototype.show = function () {
        if (this.tooltipDisabled || this.visible || !this.content) {
            return;
        }
        this.visible = true;
        if (typeof this.content === 'string') {
            var factory = this.resolver.resolveComponentFactory(tooltip_content_component_1.TooltipContentComponent);
            if (!this.visible) {
                return;
            }
            this.tooltipComp = this.viewContainerRef.createComponent(factory);
            this.tooltipComp.instance.hostElement = this.viewContainerRef.element.nativeElement;
            this.tooltipComp.instance.content = this.content;
            this.tooltipComp.instance.placement = this.tooltipPosition;
            this.tooltipComp.instance.animation = this.tooltipAnimation;
        }
        else {
            var tooltip = this.content;
            tooltip.hostElement = this.viewContainerRef.element.nativeElement;
            tooltip.placement = this.tooltipPosition;
            tooltip.animation = this.tooltipAnimation;
            tooltip.show();
        }
    };
    TooltipComponent.prototype.hide = function () {
        if (!this.visible) {
            return;
        }
        this.visible = false;
        if (this.tooltipComp) {
            this.tooltipComp.destroy();
        }
        if (this.content instanceof tooltip_content_component_1.TooltipContentComponent) {
            this.content.hide();
        }
    };
    __decorate([
        core_1.Input('title'),
        __metadata("design:type", Object)
    ], TooltipComponent.prototype, "content", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TooltipComponent.prototype, "tooltip", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TooltipComponent.prototype, "tooltipPosition", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TooltipComponent.prototype, "titlePosition", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TooltipComponent.prototype, "tooltipDisabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TooltipComponent.prototype, "tooltipAnimation", void 0);
    __decorate([
        core_1.HostListener('focusin'),
        core_1.HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipComponent.prototype, "show", null);
    __decorate([
        core_1.HostListener('focusout'),
        core_1.HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TooltipComponent.prototype, "hide", null);
    TooltipComponent = __decorate([
        core_1.Directive({
            // tslint:disable-next-line:directive-selector
            selector: '[tooltip],[title]'
        })
        // tslint:disable-next-line:directive-class-suffix
        ,
        __metadata("design:paramtypes", [core_1.ViewContainerRef, core_1.ComponentFactoryResolver])
    ], TooltipComponent);
    return TooltipComponent;
}());
exports.TooltipComponent = TooltipComponent;
//# sourceMappingURL=../../../src/lib/tooltip/tooltip.component.js.map