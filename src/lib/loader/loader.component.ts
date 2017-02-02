import { Component, OnInit, Input, Output, forwardRef, ElementRef, Renderer, EventEmitter } from '@angular/core';

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