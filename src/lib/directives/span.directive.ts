import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[span]'
})
export class SpanDirective {
    @Input() span: 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'full' = 'auto';

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

    @HostBinding('class.grid-column-span-5') get span5() {
        return this.span === '5';
    }

    @HostBinding('class.grid-column-span-6') get span6() {
        return this.span === '6';
    }

    @HostBinding('class.grid-column-span-7') get span7() {
        return this.span === '7';
    }

    @HostBinding('class.grid-column-span-8') get span8() {
        return this.span === '8';
    }

    @HostBinding('class.grid-column-span-9') get span9() {
        return this.span === '9';
    }

    @HostBinding('class.grid-column-span-10') get span10() {
        return this.span === '10';
    }

    @HostBinding('class.grid-column-span-11') get span11() {
        return this.span === '11';
    }

    @HostBinding('class.grid-column-span-12') get span12() {
        return this.span === '12';
    }
}
