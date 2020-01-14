import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-heading',
    template: `
    <div class="item-list-heading has-icon" [ngClass]="layout">
        <ng-content selector="checkbox"></ng-content>
        <ng-content selector="label"></ng-content>
        <ng-content selector="badge"></ng-content>
        <ng-content selector="button"></ng-content>
    </div>
    `
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
