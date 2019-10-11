import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-help',
    template: `
    <div class="toggle-{{ type }}" [ngClass]="{'closed': closed}">
        <plex-button *ngIf="!closed" type="danger" size="sm" icon="close" (click)="toggleOpenClose()"></plex-button>
        <plex-button *ngIf="closed && !tituloBoton" type="info" size="sm" [icon]="icon" (click)="toggleOpenClose()"></plex-button>
        <plex-button *ngIf="closed && tituloBoton" type="info" size="sm" [label]="tituloBoton" (click)="toggleOpenClose()"></plex-button>
    </div>
    <div class="card {{ type }}" [ngClass]="{'open': !closed}" *ngIf="type === 'help'">
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
    <ng-container *ngIf="!closed && type === 'info'">
        <div class="jumbotron {{ type }}" [ngClass]="{'open': !closed}">
            <h1 class="display-6">{{ titulo }}</h1>
            <p class="lead" *ngIf="subtitulo"><b>{{ subtitulo }}</b></p>
            <ng-content select="[info]"></ng-content>
        </div>
    </ng-container>
    `
})
export class PlexHelpComponent {
    @Input() type: 'info' | 'help' = 'info';
    @Input() titulo = '';
    @Input() subtitulo: string;
    @Input() tituloBoton = '';
    @Input() icon = 'help-circle';
    unlisten: Function;
    closed = true;

    constructor() { }

    public toggleOpenClose() {
        this.closed = !this.closed;
    }
}

