import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-icon',
    template: `<i class="{{prefix}} {{prefix}}-{{name}} icon-{{type}} {{ cssSize }}"></i> `,
})
export class PlexIconComponent {
    @Input() prefix = 'mdi';
    @Input() name: string;
    @Input() type: 'light' | 'dark' | 'success' | 'info' | 'warning' | 'danger' | 'default' = 'light';
    // Usar números con mdi, valores string con otro prefix
    @Input() size: '18' | '24' | '36' | '48' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'sm';

    constructor() {

    }

    get cssSize() {
        if (this.size) {
            return `${this.prefix}-${this.size}px`;
        }
        return '';
    }

}
