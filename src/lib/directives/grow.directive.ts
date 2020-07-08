import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[grow]'
})
export class GrowDirective {
    @Input() grow: 'auto' | '1' | '2' | '3' | '4' | 'full' = 'auto';

    @HostBinding('class.grow-full') get full() {
        return this.grow === 'full';
    }

    @HostBinding('class.grow-auto') get auto() {
        return this.grow === 'auto';
    }

    @HostBinding('class.grow-1') get grow1() {
        return this.grow === '1';
    }

    @HostBinding('class.grow-2') get grow2() {
        return this.grow === '2';
    }

    @HostBinding('class.grow-3') get grow3() {
        return this.grow === '3';
    }

    @HostBinding('class.grow-4') get grow4() {
        return this.grow === '4';
    }
}
