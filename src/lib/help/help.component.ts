import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
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
export class PlexHelpComponent implements OnInit, AfterViewInit {

    @Input() titulo = '';

    @Input() subtitulo: string;

    @Input() size: 'sm' | 'md' = 'sm';

    @Input() cardSize: 'full' | 'half' | 'auto' = 'full';

    @Input() title: string;

    @Input() type: 'info' | 'help' = 'help'; // deprecated

    @Input() btnType: PlexType = 'info';

    @Input() tituloBoton = '';

    @Input() icon = 'help';

    @Input() scroll = true;

    @Input() maxHeight = 'auto';

    @Output() close = new EventEmitter();

    @Output() open = new EventEmitter();

    private unlisten: Function;

    closed = true;
    parentElement;
    id;
    posicionInicial;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private helpService: HelpService,
    ) { }

    ngOnInit(): void {
        this.id = Math.floor(Math.random() * 1000);
    }

    ngAfterViewInit() {
        const elem = this.elementRef.nativeElement.getBoundingClientRect();
        this.parentElement = this.elementRef.nativeElement.closest('.plex-box-content');
        this.posicionInicial = elem.top - elem.height;
    }

    get content() {
        return (this.icon && this.icon.length > 0) || (this.tituloBoton && this.tituloBoton.length > 0);
    }

    public toggleClose() {
        this.closed = true;
        this.close.emit();
    }

    public toggle() {
        this.helpService.closePrevious(this.id);

        const helpCard = this.elementRef.nativeElement.querySelector('div.toggle-help .card');

        helpCard.style.overflow = !this.scroll ? 'hidden' : 'auto';
        helpCard.style.maxHeight = this.maxHeight ? `${this.maxHeight}px` : 'auto';

        this.closed = !this.closed;
        if (!this.closed) {
            this.helpService.setHelp(this);

            setTimeout(() => {
                if (this.cardSize === 'auto') {
                    const toggleDiv = this.elementRef.nativeElement.querySelector('div.toggle-help');
                    const offset = toggleDiv.querySelector('.card').getBoundingClientRect().top + 40;
                    toggleDiv.querySelector('div.card-body').style.height = `calc(100vh - ${offset}px)`;
                }
            }, 0);

            this.open.emit();

            this.unlisten = this.renderer.listen('document', 'click', () => {
                this.toggleClose();
                this.unlisten();
            });

            this.parentElement?.addEventListener('scroll', () => {
                if (this.parentElement?.scrollTop > 0) {
                    helpCard.style.top = this.posicionInicial - this.parentElement?.scrollTop + 'px';
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
