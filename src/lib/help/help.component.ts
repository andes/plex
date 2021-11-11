import { Component, Input, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'plex-help',
    template: `
    <plex-button class="btn-close" *ngIf="!closed" type="danger" [size]="size" icon="close" (click)="toggle();$event.stopImmediatePropagation();"></plex-button>
    <plex-button class="btn-open" *ngIf="content && closed && !tituloBoton" [type]="btnType" [size]="size" [icon]="icon" (click)="toggle();$event.stopImmediatePropagation();">
    </plex-button>
    <plex-button class="btn-open" *ngIf="content && closed && tituloBoton" [type]="btnType" [size]="size" [label]="tituloBoton" (click)="toggle();$event.stopImmediatePropagation();">
    </plex-button>
    <div class="toggle-help" [ngClass]="{'closed': closed, 'open': !closed}">
        <div class="card help" [ngClass]="{'open': !closed, 'full': cardSize === 'full', 'half': cardSize === 'half'}" (click)="$event.stopImmediatePropagation();">
            <ng-container *ngIf="!closed">
                <div class="card-body m-3">
                    <plex-title *ngIf="titulo" size="sm" [titulo]="titulo"></plex-title>
                    <h6 *ngIf="type === 'info' && subtitulo">{{ subtitulo }}</h6>
                    <ng-content></ng-content>
                </div>
            </ng-container>
        </div>
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

    @Input() btnType: PlexType = 'info';

    @Input() tituloBoton = '';

    @Input() icon = 'help';

    @Output() close = new EventEmitter();

    @Output() open = new EventEmitter();

    private unlisten: Function;

    closed = true;

    constructor(private renderer: Renderer2) { }

    get content() {
        return (this.icon && this.icon.length > 0) || (this.tituloBoton && this.tituloBoton.length > 0);
    }

    public toggle() {

        this.closed = !this.closed;
        if (!this.closed) {

            this.open.emit();
            this.unlisten = this.renderer.listen('document', 'click', (event) => {
                this.toggle();
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
