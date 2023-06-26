import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-group-item',
    template: `
        <a href="{{link}}" class="group-item">
            <plex-icon style="margin-right: 10px" name="{{icon}}" type="light" size="sm"></plex-icon>
            <span style="margin: 0">{{label}}</span>
        </a>
    `,
})

export class PlexGroupItemComponent {
    @Input() label: string;
    @Input() icon?: string;
    @Input() link?: string;
}
