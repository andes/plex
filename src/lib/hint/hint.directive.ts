import { Directive, ComponentRef, ViewContainerRef, ComponentFactoryResolver, OnInit, Input, AfterViewInit, Host } from '@angular/core';
import { HintComponent } from './hint.component';
import { PlexType } from '../core/plex-type.type';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[hint], [position:has(hint)], [icon:has(hint)]',
})
export class HintDirective implements AfterViewInit {

    private tooltip: ComponentRef<HintComponent>;
    @Input('hint') content: string | HintComponent;
    @Input() icon = 'help';
    @Input() hintType: PlexType = 'default';

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

        const factory = this.resolver.resolveComponentFactory(HintComponent);
        this.tooltip = this.viewContainerRef.createComponent(factory);
        this.tooltip.instance.hostElement = this.viewContainerRef.element.nativeElement;
        this.tooltip.instance.content = this.content as string;
        this.tooltip.instance.position = this.position as string;
        this.tooltip.instance.icon = this.icon;

    }

}
