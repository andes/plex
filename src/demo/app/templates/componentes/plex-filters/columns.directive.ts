import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[columns]'
})
export class ColumnsDirective {
    @Input() columns: '1' | '2' | '3' = '1';

    @HostBinding('class.flex-grow-1') get 1() {
        return this.columns === '1';
    }

    @HostBinding('class.flex-grow-2') get 2() {
        return this.columns === '2';
    }

    @HostBinding('class.flex-grow-3') get 3() {
        return this.columns === '3';
    }
}