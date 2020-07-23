import { Component, Input, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'plex-help',
    template: `
    <div class="toggle-{{ type }}" [ngClass]="{'closed': closed, 'open': !closed}">
        <plex-button *ngIf="!closed" type="danger" [size]="size" icon="close" (click)="toogle();$event.stopImmediatePropagation();"></plex-button>
        <plex-button *ngIf="content && closed && !tituloBoton" type="info" [size]="size" [title]="title" [icon]="type === 'info'? 'informacion' : 'help'" (click)="toogle();$event.stopImmediatePropagation();"></plex-button>
        <plex-button *ngIf="content && closed && tituloBoton" type="info" [size]="size" [label]="tituloBoton" (click)="toogle();$event.stopImmediatePropagation();"></plex-button>
    </div>
    <div class="card help" [ngClass]="{'open': !closed, 'full': cardSize === 'full', 'half': cardSize === 'half'}" (click)="$event.stopImmediatePropagation();">
        <ng-container *ngIf="!closed">
            <div class="card-header">
                <h5>{{ titulo }}</h5>
            </div>
            <div class="card-body m-3">
                <h6 *ngIf="type === 'info' && subtitulo">{{ subtitulo }}</h6>
                <ng-content></ng-content>
            </div>
        </ng-container>
    </div>
    `
})
export class PlexHelpComponent {


    @Input() titulo = '';

    @Input() subtitulo: string;

    @Input() size: 'sm' | 'md' = 'sm';

    @Input() cardSize: 'full' | 'half' = 'full';

    @Input() title: string;

    @Input() type: 'info' | 'help' = 'help'; // deprecated

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
