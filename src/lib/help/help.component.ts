import { Component, Input, Renderer2, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
    selector: 'plex-help',
    template: `
    <plex-button class="btn-close" *ngIf="!closed" type="danger" [size]="size" icon="close" (click)="toggle();$event.stopImmediatePropagation();"></plex-button>
    <plex-button class="btn-open" *ngIf="content && closed && !tituloBoton" type="info" [size]="size" [icon]="type === 'info'? 'information-variant' : 'help'" (click)="toggle();$event.stopImmediatePropagation();">
    </plex-button>
    <plex-button class="btn-open" *ngIf="content && closed && tituloBoton" type="info" [size]="size" [label]="tituloBoton" (click)="toggle();$event.stopImmediatePropagation();">
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

    @Input() tituloBoton = '';

    @Input() icon: 'help-circle' | 'informacion' = 'help-circle';

    @Output() close = new EventEmitter();

    @Output() open = new EventEmitter();

    private unlisten: Function;

    closed = true;

    constructor(private renderer: Renderer2, private el: ElementRef) { }

    get content() {
        return (this.icon && this.icon.length > 0) || (this.tituloBoton && this.tituloBoton.length > 0);
    }

    public toggle() {

        const card = this.el.nativeElement.querySelector('.card');
        const toggle = this.el.nativeElement.querySelector('.toggle-help');
        const btn = this.el.nativeElement.querySelector('.btn-open');

        // Reset posicionamiento
        this.renderer.removeStyle(toggle, 'right');
        this.renderer.removeStyle(toggle, 'top');

        this.closed = !this.closed;
        if (!this.closed) {

            let right = window.scrollX;
            let top = window.scrollY;

            if (btn) {
                this.renderer.removeStyle(btn, 'top');
                this.renderer.setStyle(btn, 'display', 'inline-block');

                // Para uso normal, con botón/icon de plex-help
                const btnRect = btn.getBoundingClientRect();
                top = btnRect.top - btnRect.height;
                right += 20;

            } else {
                // Para uso con nav-item, sin botón/icon de plex-help
                top += 45;
                this.renderer.setStyle(card, 'width', '45vw');
            }
            // Posicionamiento
            this.renderer.setStyle(toggle, 'top', `${top}px`);
            this.renderer.setStyle(toggle, 'right', `${right}px`);
            this.renderer.setStyle(card, 'display', 'flex');

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
