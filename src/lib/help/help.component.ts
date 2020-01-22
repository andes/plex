import { Component, Input, Renderer2 } from '@angular/core';

@Component({
    selector: 'plex-help',
    template: `
    <div class="toggle-{{ type }}" [ngClass]="{'closed': closed, 'open': !closed}">
        <plex-button *ngIf="!tituloBoton" type="info" size="sm" [icon]="icon" (click)="toggleOpenClose();$event.stopImmediatePropagation();"></plex-button>
        <plex-button *ngIf="tituloBoton" type="info" size="sm" [label]="tituloBoton" (click)="toggleOpenClose();$event.stopImmediatePropagation();"></plex-button>
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
            <plex-button type="danger" size="sm" icon="close" (click)="toggleOpenClose();$event.stopImmediatePropagation();"></plex-button>
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

    constructor(private renderer: Renderer2) { }

    public toggleOpenClose() {
        this.closed = !this.closed;
        if (!this.closed) {
            this.unlisten = this.renderer.listen('document', 'click', (event) => {
                this.toggleOpenClose();
                this.unlisten();
            });
        } else {
            if (this.unlisten) {
                this.unlisten();
            }
        }
    }
}

