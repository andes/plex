import { Directive, HostListener, ComponentRef, ViewContainerRef, Input, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { TooltipContentComponent } from './tooltip-content.component';


@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[tooltip],[title]'
})
// tslint:disable-next-line:directive-class-suffix
export class TooltipComponent {
    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    private tooltipComp: ComponentRef<TooltipContentComponent>;
    private visible: boolean;

    // -------------------------------------------------------------------------
    // Inputs / Outputs
    // -------------------------------------------------------------------------

    // tslint:disable-next-line:no-input-rename
    @Input('title') content: string | TooltipContentComponent;
    @Input()
    set tooltip(value: string | TooltipContentComponent) {
        this.content = value;
    }
    @Input() tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
    @Input()
    set titlePosition(value: 'top' | 'bottom' | 'left' | 'right') {
        this.tooltipPosition = value;
    }
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
        if (this.tooltipDisabled || this.visible || !this.content) {
            return;
        }

        this.visible = true;
        if (typeof this.content === 'string') {
            const factory = this.resolver.resolveComponentFactory(TooltipContentComponent);
            if (!this.visible) {
                return;
            }

            this.tooltipComp = this.viewContainerRef.createComponent(factory);
            this.tooltipComp.instance.hostElement = this.viewContainerRef.element.nativeElement;
            this.tooltipComp.instance.content = this.content as string;
            this.tooltipComp.instance.placement = this.tooltipPosition;
            this.tooltipComp.instance.animation = this.tooltipAnimation;
        } else {
            const tooltip = this.content as TooltipContentComponent;
            tooltip.hostElement = this.viewContainerRef.element.nativeElement;
            tooltip.placement = this.tooltipPosition;
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
        if (this.tooltipComp) {
            this.tooltipComp.destroy();
        }

        if (this.content instanceof TooltipContentComponent) {
            (this.content as TooltipContentComponent).hide();
        }
    }
}
