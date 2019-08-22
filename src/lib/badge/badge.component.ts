import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-badge',
    template: `
        <span class="badge badge-{{type}} badge-{{size}}">
            <ng-content></ng-content>
        </span>
                `,
})
export class PlexBadgeComponent {
    @Input() type: string;
    @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

    constructor() {
        this.type = 'success';
    }
}
