import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[align]'
})
export class AlignDirective {
    @Input() align: 'start' | 'end' | 'center' | 'middle' = 'middle';

    // TODO: reveer convivencia de clases con directiva 'justify'
    @HostBinding('class.d-flex') flex = true;
    @HostBinding('class.justify-content-center') flex2 = true;

    @HostBinding('class.align-items-start') get start() {
        return this.align === 'start';
    }

    @HostBinding('class.align-items-end') get end() {
        return this.align === 'end';
    }

    @HostBinding('class.align-items-center') get center() {
        return !this.align || this.align === 'center';
    }
}
