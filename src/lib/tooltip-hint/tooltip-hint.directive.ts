import { Directive, ComponentRef, ViewContainerRef, ComponentFactoryResolver, OnInit, Input, AfterViewInit, Host } from '@angular/core';
import { TooltipHintComponent } from './tooltip-hint.component';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[tooltip], [position:has(tooltip)]',
})
export class TooltipHintDirective implements AfterViewInit {

    private tooltip: ComponentRef<TooltipHintComponent>;
    @Input('tooltip') content: string | TooltipHintComponent;

    @Input()
    set position(value: 'top' | 'right' | 'bottom' | 'left' | 'above' | 'below') {
        if (value === 'top') {
            this.position = 'above';
        }
        if (value === 'bottom') {
            this.position = 'below';
        }
    }

    constructor(
        private viewContainerRef: ViewContainerRef,
        private resolver: ComponentFactoryResolver
    ) {
    }

    ngAfterViewInit(): void {

        const factory = this.resolver.resolveComponentFactory(TooltipHintComponent);
        this.tooltip = this.viewContainerRef.createComponent(factory);
        this.tooltip.instance.hostElement = this.viewContainerRef.element.nativeElement;
        this.tooltip.instance.content = this.content as string;
        this.tooltip.instance.position = this.position as string;

    }

}
