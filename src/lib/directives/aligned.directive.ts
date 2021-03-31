import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[aligned]'
})
export class AlignedDirective {
    @Input() aligned: 'start' | 'end' | 'center' | 'middle' = 'middle';

    @HostBinding('class.d-flex') flex = true;
    @HostBinding('class.justify-content-center') flex2 = true;

    @HostBinding('class.align-items-start') get start() {
        return this.aligned === 'start';
    }

    @HostBinding('class.align-items-end') get end() {
        return this.aligned === 'end';
    }

    @HostBinding('class.align-items-center') get center() {
        return !this.aligned || this.aligned === 'center';
    }
}
