import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'plex-tab',
    template: `<div tabindex="0" role="tabpanel" id="{{ label }}" attr.aria-labelledby="{{ label }}">
                    <ng-content *ngIf='active'></ng-content>
                </div>`,
})
export class PlexTabComponent {

    @Input() label: string;

    @Input() icon: string;

    @Input() active: boolean;

    @Input() allowClose: boolean;

    @Input() color = 'default';

    @Output() toggle = new EventEmitter<boolean>();

}
