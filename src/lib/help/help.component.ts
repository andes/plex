import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { PlexType } from './../core/plex-type.type';
import { HelpService } from './services/help.service';

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
export class PlexHelpComponent implements OnInit {

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
    parentElement;
    id;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private helpService: HelpService,
    ) { }

    ngOnInit(): void {
        this.id = Math.floor(Math.random() * 1000);
    }

    get content() {
        return (this.icon && this.icon.length > 0) || (this.tituloBoton && this.tituloBoton.length > 0);
    }

    public toggleClose() {
        this.closed = true;
        this.close.emit();
    }

    public toggle() {
        this.helpService.closePreviuos(this.id);

        this.closed = !this.closed;
        if (!this.closed) {
            this.helpService.setHelp(this);

            setTimeout(() => {
                const offset = this.elementRef.nativeElement.getBoundingClientRect().top;
                const card = this.elementRef.nativeElement.querySelector('.card.open');

                card.style.top = `${offset - 25}px`;
            }, 0);

            this.open.emit();

            this.unlisten = this.renderer.listen('document', 'click', () => {
                this.toggleClose();
                this.unlisten();
            });

            this.parentElement = this.elementRef.nativeElement.closest('.plex-box-content');
            this.parentElement?.addEventListener('scroll', () => {
                if (this.parentElement?.scrollTop > 0) {
                    this.toggleClose();
                }
            }, false);
        } else {
            this.toggleClose();

            this.close.emit();
            this.helpService.setHelp(null);
            if (this.unlisten) {
                this.unlisten();
            }
        }
    }
}
