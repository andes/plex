import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-label',
    templateUrl: 'label.html',
    styleUrls: [
        'plex-label.scss'
    ]
})
export class PlexLabelComponent {
    @Input() titulo: string;
    @Input() tituloBold = true;
    @Input() subtitulo: string;
    @Input() size: 'sm' | 'md' | 'lg' = 'md';

    constructor() {
    }
}
