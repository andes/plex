import { PlexType } from './../core/plex-type.type';
import { Component, Input, Renderer2, Output, EventEmitter, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'plex-help',
    template: `
    <plex-button class="btn-close" *ngIf="!closed" type="danger" [size]="size" icon="close" (click)="toggle();$event.stopImmediatePropagation();"></plex-button>
    <plex-button class="btn-open" *ngIf="content && closed && !tituloBoton" [type]="btnType" [size]="size" [icon]="icon" (click)="toggle();$event.stopImmediatePropagation();">
    </plex-button>
    <plex-button class="btn-open" *ngIf="content && closed && tituloBoton" [type]="btnType" [size]="size" [label]="tituloBoton" (click)="toggle();$event.stopImmediatePropagation();">
    </plex-button>
    <div class="toggle-help" [ngClass]="{'closed': closed, 'open': !closed}" #plHelpBody>
        <div class="card help" [class.open]="!closed" [class.closed]="closed" [ngClass]="cardSize" (click)="$event.stopImmediatePropagation();">
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

    @Input() cardSize: 'full' | 'half' | 'auto' = 'full';

    @Input() title: string;

    @Input() type: 'info' | 'help' = 'help'; // deprecated

    @Input() btnType: PlexType = 'info';

    @Input() tituloBoton = '';

    @Input() icon = 'help';

    @Output() close = new EventEmitter();

    @Output() open = new EventEmitter();

    private unlisten: Function;

    closed = true;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) { }

    get content() {
        return (this.icon && this.icon.length > 0) || (this.tituloBoton && this.tituloBoton.length > 0);
    }

    public toggle() {
        this.closed = !this.closed;
        if (!this.closed) {

            setTimeout(() => {
                const toggleDiv = this.elementRef.nativeElement.querySelector('div.toggle-help');
                const auto = toggleDiv.querySelector('.auto');
                if (auto) {
                    const offset = toggleDiv.querySelector('.card').getBoundingClientRect().top + 40;
                    toggleDiv.querySelector('div.card-body').style.height = `calc(100vh - ${offset}px)`;
                }
            }, 0);

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
