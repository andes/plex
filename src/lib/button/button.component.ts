import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-button',
    templateUrl: 'button.html',
    host: {
        '[attr.disabled]': 'disabled',
        '(click)': 'haltDisabledEvents($event)',
    },
})
export class PlexButtonComponent {
    @Input() label: string;
    @Input() icon: string;
    @Input() type: string;
    @Input() disabled: boolean;

    constructor() {
        this.type = 'default';
        this.disabled = false;
    }

    haltDisabledEvents($event: Event) {
        console.log(this.disabled);
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
}
