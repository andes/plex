import { Component, Input, Renderer2, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
    selector: 'plex-help',
    template: `
    <div class="toggle-help" [ngClass]="{'closed': closed, 'open': !closed}">
        <plex-button *ngIf="!closed" type="danger" [size]="size" icon="close" (click)="toggle();$event.stopImmediatePropagation();"></plex-button>
        <plex-button *ngIf="content && closed && !tituloBoton" type="info" [size]="size" title="{{ title }}" [icon]="type === 'info'? 'information-variant' : 'help'" (click)="toggle();$event.stopImmediatePropagation();"></plex-button>
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
        const btn = toggle.querySelector('plex-button');

        const toggleRect = toggle.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();

        this.closed = !this.closed;
        if (!this.closed) {
            const right = cardRect.right - cardRect.left - cardRect.width + toggleRect.width;
            let top;
            if (btn) {
                const btnRect = btn.getBoundingClientRect();
                top = toggleRect.top - (btnRect.height * 2);
            } else {
                top = 21;
            }
            this.renderer.setStyle(toggle, 'top', `${top}px`);
            this.renderer.setStyle(toggle, 'right', `${right}px`);
            this.renderer.setStyle(card, 'display', 'flex');
            this.open.emit();
            this.unlisten = this.renderer.listen('document', 'click', (event) => {
                this.toggle();
                this.unlisten();
            });
        } else {
            this.renderer.removeStyle(toggle, 'right');
            this.renderer.removeStyle(toggle, 'top');

            this.close.emit();
            if (this.unlisten) {
                this.unlisten();
            }
        }
    }
}
