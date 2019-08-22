import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-label',
    template: `
        <div class="plex-label d-flex flex-column" [ngClass]="size">
            <span *ngIf="titulo" [ngClass]="{'font-weight-bold': tituloBold}">{{ titulo }}</span>
            <small *ngIf="titulo && subtitulo">{{ subtitulo }}</small>
            <ng-content *ngIf="!titulo && !subtitulo"></ng-content>
        </div>
    `
})
export class PlexLabelComponent {
    @Input() titulo: string;
    @Input() tituloBold = true;
    @Input() subtitulo: string;
    @Input() size: 'sm' | 'md' | 'lg' = 'md';

    constructor() {
    }
}
