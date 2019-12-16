import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-icon',
    template: `<i class="{{prefix}} {{prefix}}-{{name}} text-{{type}}"></i> `,
})
export class PlexIconComponent {
    @Input() prefix = 'mdi';
    @Input() name: string;
    @Input() type: 'success' | 'info' | 'warning' | 'danger' | 'primary';

    constructor() {

    }

}
