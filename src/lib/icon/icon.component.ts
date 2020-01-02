import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-icon',
    template: `<i class="{{prefix}} {{prefix}}-{{name}} text-{{type}} {{ cssSize }}"></i> `,
})
export class PlexIconComponent {
    @Input() prefix = 'mdi';
    @Input() name: string;
    @Input() type: 'success' | 'info' | 'warning' | 'danger' | 'primary';
    @Input() size: '18' | '24' | '36' | '48';

    constructor() {

    }

    get cssSize() {
        if (this.size) {
            return `${this.prefix}-${this.size}px`;
        }
        return '';
    }

}
