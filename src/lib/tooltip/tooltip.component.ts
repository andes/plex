import {
    Directive,
    HostListener,
    ComponentRef,
    ViewContainerRef,
    Input,
    OnDestroy,
    ElementRef
} from '@angular/core';
import { TooltipContentComponent } from './tooltip-content.component';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[tooltip],[title]'
})
// tslint:disable-next-line:directive-class-suffix
export class TooltipComponentDirective implements OnDestroy {
    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------

    private componentRef: ComponentRef<TooltipContentComponent> | null = null;

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

    constructor(
        private viewContainerRef: ViewContainerRef,
        private elementRef: ElementRef
    ) { }

    // -------------------------------------------------------------------------
    // Lifecycle callbacks
    // -------------------------------------------------------------------------

    ngOnDestroy(): void {
        this.destroyTooltip();
    }

    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------

    private getEffectiveHost(): HTMLElement {
        const native = this.elementRef.nativeElement as HTMLElement;
        return (native.querySelector('button') as HTMLElement) || native;
    }

    private showTooltip(): void {
        if (this.tooltipDisabled || !this.content) {
            return;
        }

        if (this.content instanceof TooltipContentComponent) {
            const tooltip = this.content as TooltipContentComponent;
            tooltip.hostElement = this.getEffectiveHost();
            tooltip.placement = this.tooltipPosition;
            tooltip.animation = this.tooltipAnimation;
            tooltip.show();
            return;
        }

        if (!this.componentRef) {
            this.componentRef = this.viewContainerRef.createComponent(TooltipContentComponent);
        }

        this.componentRef.instance.hostElement = this.getEffectiveHost();
        this.componentRef.instance.content = this.content as string;
        this.componentRef.instance.placement = this.tooltipPosition;
        this.componentRef.instance.animation = this.tooltipAnimation;

        this.componentRef.changeDetectorRef.detectChanges();
        this.componentRef.instance.show();
    }

    private destroyTooltip(): void {
        if (this.componentRef) {
            this.componentRef.instance.hide();
            this.componentRef.destroy();
            this.componentRef = null;
        }

        if (this.content instanceof TooltipContentComponent) {
            (this.content as TooltipContentComponent).hide();
        }
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    @HostListener('focusin')
    @HostListener('mouseenter')
    show(): void {
        this.showTooltip();
    }

    @HostListener('focusout')
    @HostListener('mouseleave')
    hide(): void {
        this.destroyTooltip();
    }

    @HostListener('click')
    onClick(): void {
        this.destroyTooltip();
    }

    @HostListener('blur')
    onBlur(): void {
        this.destroyTooltip();
    }
}
