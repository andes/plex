import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-card',
    template: `
    <div class="card p-4 d-flex flex-column justify-content-{{ align }} align-items-{{ items }} bg-{{ type }}">
        <ng-content select="plex-badge"></ng-content>
        <ng-content select="plex-label"></ng-content>
        <ng-content select="plex-button"></ng-content>
    </div>
    `,
})

export class PlexCardComponent {

    @Input() align: 'left' | 'right' | 'center' = 'center';
    @Input() items: 'start' | 'end' | 'center' = 'center';
    @Input() size: 'xs' | 'md' | 'lg' | 'block' = 'md';
    @Input() type: 'success' | 'warning' | 'danger' | 'default';

    constructor() {
    }

}
