import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-label',
    template: `
        <div class="plex-label {{ size }} d-flex flex-{{direction}}" [ngClass]="{ 'align-items-center': direction === 'column' }">
            <plex-icon *ngIf="icon" name="{{icon}}" class="text-{{ type }}"></plex-icon>
            <ng-content select="plex-icon"></ng-content>

            <div class="d-flex flex-column" [ngClass]="{ 'align-items-center mt-2': direction === 'column' }">
                <span *ngIf="titulo" class="text-{{ type }}" [ngClass]="{'font-weight-bold': tituloBold}">{{ titulo }}</span>
                <small *ngIf="titulo && subtitulo">{{ subtitulo }}</small>
            </div>
            <ng-content *ngIf="!titulo && !subtitulo"></ng-content>
        </div>
    `
})
export class PlexLabelComponent {
    @Input() titulo: string;
    @Input() tituloBold = true;
    @Input() subtitulo: string;
    @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
    @Input() icon: string;
    @Input() direction: 'column' | 'row' = 'row';
    @Input() type: 'success' | 'info' | 'warning' | 'danger' | 'default';

    constructor() {
    }
}
