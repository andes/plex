import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-heading',
    templateUrl: 'heading.html',
    styleUrls: [
        'plex-heading.scss'
    ]
})
export class PlexHeadingComponent {
    @Input() layout: 'completo' | 'contenido' | 'izquierda' | 'derecha' = 'completo';
    @Input() headings: any = {};
    @Input() titulo: string;
    @Input() subtitulo: string;
    @Input() size: 'sm' | 'md' | 'lg' = 'md';

    constructor() {
    }
}
