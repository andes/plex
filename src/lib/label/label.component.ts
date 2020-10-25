import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-label',
    template: `
        <div class="plex-label {{ size }} d-flex flex-{{direction}}" [ngClass]="{ 'align-items-center': direction === 'column' }">
            <plex-icon *ngIf="icon" name="{{icon}}" class="text-{{ type }}"></plex-icon>
            <ng-content select="plex-icon"></ng-content>
            <p dato *ngIf="dato && !icon"></p>
            <ng-content select="[dato]"></ng-content>
            <section justify="center" class="d-flex w-100 text-{{ type }}" *ngIf="timeline">
                <svg height="100%" width="1" class="timeline" [ngClass]="direction === 'column' ? 'none' : 'vertical'">
                    <line x1="0" y1="0%" x2="0" y2="30%" style="stroke:black;stroke-width:5" />
                </svg>
                <svg height="100%" width="1" class="timeline" [ngClass]="direction === 'column' ? 'none' : 'vertical'">
                    <line x1="-1" y1="70%" x2="-1" y2="100%" style="stroke:black;stroke-width:5" />
                </svg>
                <svg height="1" width="100%" class="timeline" [ngClass]="direction === 'row' ? 'none' : ''">
                    <line x1="0%" y1="0" x2="30%" y2="0" style="stroke:black;stroke-width:5" />
                </svg>
                <svg height="1" width="100%" class="timeline" [ngClass]="direction === 'row' ? 'none' : ''">
                    <line x1="70%" y1="-1" x2="100%" y2="-1" style="stroke:black;stroke-width:5" />
                </svg>
            </section>
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
    @Input() dato: string;
    @Input() timeline: boolean;

    constructor() {
    }
}
