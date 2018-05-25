import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-badge',
    template: `
        <span class="badge badge-{{type}}">
            <ng-content></ng-content>
        </span>
                `,
})
export class PlexBadgeComponent {
    @Input() type: string;

    // Funciones privadas

    constructor() {
        this.type = 'success';
    }
}
