import { Directive, HostBinding, ElementRef, AfterViewChecked, Renderer2 } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[responsive]'
})
export class ResponsiveDirective implements AfterViewChecked {
    constructor(private el: ElementRef, private render: Renderer2) { }
    width = 0;
    ngAfterViewChecked() {
        this.width = this.el.nativeElement.clientWidth;
        this.render.removeClass(this.el.nativeElement, 'size-xs');
        this.render.removeClass(this.el.nativeElement, 'size-md');
        this.render.removeClass(this.el.nativeElement, 'size-xl');

        if (this.width >= 1024) {
            this.render.addClass(this.el.nativeElement, 'size-xl');
        } else if (this.width >= 768 && this.width < 1024) {
            this.render.addClass(this.el.nativeElement, 'size-md');
        } else if (this.width < 768) {
            this.render.addClass(this.el.nativeElement, 'size-xs');
        }

    }
}
