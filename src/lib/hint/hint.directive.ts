import { Directive, ComponentRef, ViewContainerRef, ComponentFactoryResolver, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { HintComponent } from './hint.component';
import { PlexType } from '../core/plex-type.type';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[hint], [position:has(hint)], [icon:has(hint)], [detach:has(hint)]',
})
export class HintDirective implements OnInit {

    private tooltip: ComponentRef<HintComponent>;
    @Input('hint') content: string | HintComponent;
    @Input() icon;
    @Input() hintType: PlexType = 'default';
    @Input() detach: '' | 'both' | 'right' | 'top' = '';


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
        private resolver: ComponentFactoryResolver,
        private cdr: ChangeDetectorRef
    ) {
    }

    ngOnInit(): void {
        this.cdr.detectChanges();

        const factory = this.resolver.resolveComponentFactory(HintComponent);
        this.tooltip = this.viewContainerRef.createComponent(factory);
        this.tooltip.instance.hostElement = this.viewContainerRef.element.nativeElement;
        // if (!this.tooltip.instance.content) {
        //     return;
        // }
        this.tooltip.instance.content = this.content as string;
        this.tooltip.instance.position = this.position as string;
        this.tooltip.instance.icon = this.icon;
        this.tooltip.instance.hintType = this.hintType;
        this.tooltip.instance.detach = this.detach;
    }

}
