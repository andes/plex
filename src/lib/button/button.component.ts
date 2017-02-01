import { Component, Input, HostBinding, HostListener } from '@angular/core';

@Component({
    selector: 'plex-button',
    templateUrl: 'button.html'
})
export class PlexButtonComponent {
    @Input() label: string;
    @Input() icon: string;
    @Input() type: string;
    @Input() @HostBinding('attr.disabled') disabled: boolean;

    constructor() {
        this.type = 'default';
        this.disabled = false;
    }

    @HostListener('click')
    haltDisabledEvents($event: Event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
}
