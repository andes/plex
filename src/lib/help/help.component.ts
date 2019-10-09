import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-help',
    template: `
    <div class="card" [ngClass]="{'open': !closed}">
        <plex-button *ngIf="!closed" type="danger" size="sm" icon="close" (click)="toggleClose()"></plex-button>
        <plex-button *ngIf="closed && !tituloBoton" type="info" size="sm" [icon]="icon" (click)="toggleClose()"></plex-button>
        <plex-button *ngIf="closed && tituloBoton" type="info" size="sm" [label]="tituloBoton" (click)="toggleClose()"></plex-button>
        <ng-container *ngIf="!closed">
            <div class="card-header">
                <plex-title [titulo]="titulo" size="sm">
                </plex-title>
            </div>
            <div class="card-body">
                <ng-content></ng-content>
            </div>
        </ng-container>
    </div>
    `
})
export class PlexHelpComponent {
    @Input() titulo = '';
    @Input() tituloBoton = '';
    @Input() icon = 'help';
    closed = true;

    constructor() { }

    toggleClose() {
        this.closed = !this.closed;
    }
}

