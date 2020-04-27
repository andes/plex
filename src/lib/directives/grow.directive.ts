import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[grow]'
})
export class GrowDirective {
    @Input() grow: 'auto' | '1' | '2' | '3' | '4' | 'full' = 'auto';

    @HostBinding('class.grid-columns-full') get full() {
        return this.grow === 'full';
    }

    @HostBinding('class.grid-columns-auto') get auto() {
        return this.grow === 'auto';
    }

    @HostBinding('class.grid-columns-span-1') get 1() {
        return this.grow === '1';
    }

    @HostBinding('class.grid-columns-span-2') get 2() {
        return this.grow === '2';
    }

    @HostBinding('class.grid-columns-span-3') get 3() {
        return this.grow === '3';
    }

    @HostBinding('class.grid-columns-span-4') get 4() {
        return this.grow === '4';
    }
}
