import { Directive, HostListener, ComponentRef, ViewContainerRef, Input, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { TooltipContentComponent } from './tooltip-content.component';


@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[tooltip]'
})
// tslint:disable-next-line:directive-class-suffix
export class TooltipComponent {
    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    private tooltip: ComponentRef<TooltipContentComponent>;
    private visible: boolean;

    // -------------------------------------------------------------------------
    // Inputs / Outputs
    // -------------------------------------------------------------------------

    // tslint:disable-next-line:no-input-rename
    @Input('tooltip') content: string | TooltipContentComponent;
    @Input() titlePosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
    @Input() tooltipDisabled: boolean;
    @Input() tooltipAnimation = false;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(private viewContainerRef: ViewContainerRef, private resolver: ComponentFactoryResolver) { }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    @HostListener('focusin')
    @HostListener('mouseenter')
    show(): void {
        if (this.tooltipDisabled || this.visible) {
            return;
        }

        this.visible = true;
        if (typeof this.content === 'string') {
            const factory = this.resolver.resolveComponentFactory(TooltipContentComponent);
            if (!this.visible) {
                return;
            }

            this.tooltip = this.viewContainerRef.createComponent(factory);
            this.tooltip.instance.hostElement = this.viewContainerRef.element.nativeElement;
            this.tooltip.instance.content = this.content as string;
            this.tooltip.instance.placement = this.titlePosition;
            this.tooltip.instance.animation = this.tooltipAnimation;
        } else {
            const tooltip = this.content as TooltipContentComponent;
            tooltip.hostElement = this.viewContainerRef.element.nativeElement;
            tooltip.placement = this.titlePosition;
            tooltip.animation = this.tooltipAnimation;
            tooltip.show();
        }
    }

    @HostListener('focusout')
    @HostListener('mouseleave')
    hide(): void {
        if (!this.visible) {
            return;
        }

        this.visible = false;
        if (this.tooltip) {
            this.tooltip.destroy();
        }

        if (this.content instanceof TooltipContentComponent) {
            (this.content as TooltipContentComponent).hide();
        }
    }
}
