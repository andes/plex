import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[justify]'
})
export class JustifyDirective {
    @Input() justify: 'start' | 'end' | 'center' | 'between' | 'around' = 'between';

    @HostBinding('class.d-flex') flex = true;
    @HostBinding('class.align-items-center') flex2 = true;

    @HostBinding('class.justify-content-start') get start() {
        return this.justify === 'start';
    }

    @HostBinding('class.justify-content-end') get end() {
        return this.justify === 'end';
    }

    @HostBinding('class.justify-content-center') get center() {
        return this.justify === 'center';
    }

    @HostBinding('class.justify-content-between') get between() {
        return !this.justify || this.justify === 'between';
    }

    @HostBinding('class.justify-content-around') get around() {
        return this.justify === 'around';
    }

}
