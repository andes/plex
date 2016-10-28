import { ViewChild, ContentChild, Component, Input } from '@angular/core';

@Component({
    selector: 'plex-button',
    templateUrl: 'button.html',
})
export class PlexButtonComponent {
    @Input() label: string;
    @Input() icon: string;
    @Input() type: string;
    @Input() disabled: boolean;

    constructor() {
        this.type = "default";
        this.disabled = false;
    }
}
