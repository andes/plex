import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[columns]'
})
export class ColumnsDirective {
    @Input() columns: 'auto' | '2' | '3' | '4' = 'auto';

    @HostBinding('class.grid-columns-auto') get auto() {
        return this.columns === 'auto';
    }

    @HostBinding('class.grid-columns-span-2') get 2() {
        return this.columns === '2';
    }

    @HostBinding('class.grid-columns-span-3') get 3() {
        return this.columns === '3';
    }

    @HostBinding('class.grid-columns-span-4') get 4() {
        return this.columns === '4';
    }

    @HostBinding('class.grid-columns-default') get default() {
        return !this.columns || this.columns === 'auto';
    }

}