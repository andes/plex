import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-tab',
    template: `<ng-content *ngIf='active'></ng-content>`,
})
export class PlexTabComponent {
    @Input() label: string;
    @Input() icon: string;
    @Input() active: boolean;
    @Input() allowClose: boolean;
    @Input() color = 'default';
}
