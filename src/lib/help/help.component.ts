import { Component, Input, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'plex-help',
    template: `
    <div class="toggle-{{ type }}" [ngClass]="{'closed': closed, 'open': !closed}">
        <plex-button *ngIf="!closed" type="danger" [size]="size" icon="close" (click)="toogle();$event.stopImmediatePropagation();"></plex-button>
        <plex-button *ngIf="content && closed && !tituloBoton" type="info" [size]="size" title="{{ title }}" [icon]="type === 'info'? 'informacion' : 'help-circle'" (click)="toogle();$event.stopImmediatePropagation();"></plex-button>
        <plex-button *ngIf="content && closed && tituloBoton" type="info" [size]="size" [label]="tituloBoton" (click)="toogle();$event.stopImmediatePropagation();"></plex-button>
    </div>
    <div class="card {{ type }}" [ngClass]="{'open': !closed}" *ngIf="type === 'help'" (click)="$event.stopImmediatePropagation();">
        <ng-container *ngIf="!closed">
            <div class="card-header">
                <h5>{{ titulo }}</h5>
            </div>
            <div class="card-body">
                <ng-content></ng-content>
            </div>
        </ng-container>
    </div>
    <ng-container *ngIf="!closed && type === 'info'">
        <div class="jumbotron {{ type }}" [ngClass]="{'open': !closed}" (click)="$event.stopImmediatePropagation();">
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

    @Input() size: 'sm' | 'md' | 'lg' = 'sm';

    @Input() title: string;

    @Input() tituloBoton = '';

    @Input() icon: 'help-circle' | 'informacion' = 'help-circle';

    @Output() close = new EventEmitter();

    @Output() open = new EventEmitter();

    private unlisten: Function;

    closed = true;

    constructor(private renderer: Renderer2) { }

    get content() {
        return (this.icon && this.icon.length > 0) || (this.tituloBoton && this.tituloBoton.length > 0);
    }

    public toogle() {
        this.closed = !this.closed;
        if (!this.closed) {
            this.open.emit();
            this.unlisten = this.renderer.listen('document', 'click', (event) => {
                this.toogle();
                this.unlisten();
            });
        } else {
            this.close.emit();
            if (this.unlisten) {
                this.unlisten();
            }
        }
    }
}
