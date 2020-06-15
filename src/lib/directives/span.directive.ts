import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[span]'
})
export class SpanDirective {
    @Input() span: 'auto' | '1' | '2' | '3' | '4' | 'full' = 'auto';

    @HostBinding('class.grid-column-full') get full() {
        return this.span === 'full';
    }

    @HostBinding('class.grid-column-auto') get auto() {
        return this.span === 'auto';
    }

    @HostBinding('class.grid-column-span-1') get span1() {
        return this.span === '1';
    }

    @HostBinding('class.grid-column-span-2') get span2() {
        return this.span === '2';
    }

    @HostBinding('class.grid-column-span-3') get span3() {
        return this.span === '3';
    }

    @HostBinding('class.grid-column-span-4') get span4() {
        return this.span === '4';
    }
}