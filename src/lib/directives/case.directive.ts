import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[case]'
})
export class CaseDirective {

    @Input() case: 'lowercase' | 'uppercase' | 'capitalize' | 'capitalize-first' | 'none' = 'none';

    @HostBinding('class.text-lowercase') get lowercase() {
        return this.case === 'lowercase';
    }

    @HostBinding('class.text-uppercase') get uppercase() {
        return this.case === 'uppercase';
    }

    @HostBinding('class.text-capitalize') get capitalize() {
        return this.case === 'capitalize';
    }

    @HostBinding('class.text-capitalize-first') get capitalizeFirst() {
        return this.case === 'capitalize-first';
    }


}
