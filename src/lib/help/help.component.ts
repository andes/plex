import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { PlexType } from './../core/plex-type.type';
import { HelpService } from './services/help.service';

@Component({
    selector: 'plex-help',
    template: `
    <plex-button *ngIf="!tituloBoton" [type]="btnType" [size]="btnSize" [icon]="icon"
                (click)="$event.stopPropagation()" [matMenuTriggerFor]="helpMenu"
                [class.help-button-active]="menuTrigger?.menuOpen">
    </plex-button>
    <plex-button *ngIf="tituloBoton" [type]="btnType" [size]="btnSize" [label]="tituloBoton"
                (click)="$event.stopPropagation()" [matMenuTriggerFor]="helpMenu"
                [class.help-button-active]="menuTrigger?.menuOpen">
    </plex-button>
    <!-- Menú de Material -->
    <mat-menu class="plex-help" #helpMenu="matMenu" [hasBackdrop]="true" direction="up"
              [xPosition]="'before'" [yPosition]="'below'" (closed)="onMenuClosed()">
        <div class="help-content" (click)="$event.stopPropagation()"
             [style.max-height]="maxHeight"
             [style.overflow]="scroll ? 'auto' : 'hidden'"
             [style.width]="getMenuWidth()">
            <div class="card-body m-3">
                <plex-title *ngIf="titulo" size="sm" [titulo]="titulo"></plex-title>
                <ng-content></ng-content>
            </div>
        </div>
    </mat-menu>`
})
export class PlexHelpComponent implements OnDestroy, AfterViewInit {

    @Input() titulo = '';
    @Input() subtitulo: string;
    @Input() size: 'sm' | 'md' | 'lg' | 'auto' | 'full' = 'auto';
    @Input() btnSize: 'sm' | 'md' | 'lg' | 'block' = 'sm';
    @Input() title: string;
    @Input() inverted = false;
    @Input() btnType: PlexType = 'info';
    @Input() tituloBoton = '';
    @Input() icon = 'help';
    @Input() scroll = true;
    @Input() maxHeight = '80vh';

    @Output() close = new EventEmitter();
    @Output() open = new EventEmitter();

    @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;

    constructor(
        private helpService: HelpService,
    ) { }

    ngAfterViewInit(): void {
        this.menuTrigger.menuOpened.subscribe(() => {
            this.open.emit();

            if (this.inverted) {
                const menuContent = document.querySelector('.mat-menu-content');

                if (menuContent) {
                    menuContent.classList.add('inverted');
                }
            }
        });
    }

    ngOnDestroy(): void {
        // Asegurarse de que este help no quede registrado en el servicio
        this.helpService.setHelp(null);
    }

    getMenuWidth(): string {
        switch (this.size) {
            case 'sm':
                return '400px';
            case 'md':
                return '600px';
            case 'lg':
                return '800px';
            case 'full':
                return '100vw';
            default:
                return 'auto';
        }
    }

    /**
     * Cierra el menú de ayuda programáticamente
     */
    toggle(): void {
        if (this.menuTrigger && this.menuTrigger.menuOpen) {
            this.menuTrigger.closeMenu();
        }
    }

    onMenuClosed(): void {
        this.close.emit();
        this.helpService.setHelp(null);
    }
}
