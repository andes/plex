import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-tooltip',
    templateUrl: 'tooltip.html'
})
export class PlexTooltipComponent {
    @Input() text: string;
    @Input() position: string;

    constructor() {
    }
}
