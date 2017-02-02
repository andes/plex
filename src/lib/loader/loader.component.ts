import { Component, Input, Renderer } from '@angular/core';

@Component({
    selector: 'plex-loader',
    templateUrl: 'loader.html',
})
export class PlexLoaderComponent {
    // Propiedades
    @Input() type: string;

    constructor(renderer: Renderer) {
        this.type = '';
    }
}
