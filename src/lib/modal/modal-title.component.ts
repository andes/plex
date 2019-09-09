import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-modal-title, plex-modal-subtitle',
    template: `
    <span class="text-{{type}}">
       <ng-content></ng-content>
    </span>
    `,
})
export class PlexModalTitleComponent {
    @Input() type: 'success' | 'info' | 'warning' | 'danger' | 'primary';
}
