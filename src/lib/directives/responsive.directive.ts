import { Directive, Input, HostBinding, ElementRef } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[responsive]'
})
export class ResponsiveDirective {
    constructor(private el: ElementRef) { }

    get width() {
        return this.el.nativeElement.clientWidth;
    }

    @HostBinding('class.size-xs') get xs() {
        return this.width < 768;
    }

    @HostBinding('class.size-md') get md() {
        return this.width >= 768 && this.width < 1024;
    }

    @HostBinding('class.size-xl') get xl() {
        return this.width >= 1024;
    }
}
