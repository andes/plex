import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { PlexType } from './../core/plex-type.type';
import { HelpService } from './services/help.service';

@Component({
    selector: 'plex-help',
    template: `
        <plex-button
            [type]="btnType"
            [size]="btnSize"
            [icon]="tituloBoton ? null : icon"
            [label]="tituloBoton || null"
            (click)="$event.stopPropagation()"
            [matMenuTriggerFor]="helpMenu"
            [class.help-button-active]="!!menuTrigger?.menuOpen">
        </plex-button>

        <mat-menu class="plex-help {{sizeClass()}}" #helpMenu="matMenu" [hasBackdrop]="true" direction="up"
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
        </mat-menu>
    `
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
    @Input() maxHeight = '90vh';

    @Output() close = new EventEmitter();
    @Output() open = new EventEmitter();

    @ViewChild(MatMenuTrigger) menuTrigger?: MatMenuTrigger;
    @ViewChild(MatMenuTrigger, { read: ElementRef }) triggerEl?: ElementRef<HTMLElement>;

    sizeClass(): string {
        return this.size;
    }

    private btnContainer: HTMLElement;
    constructor(private helpService: HelpService) { }

    ngAfterViewInit(): void {
        this.menuTrigger?.menuOpened.subscribe(() => {
            this.open.emit();
            const triggerBtn = this.triggerEl?.nativeElement;
            const sidebarParent = triggerBtn?.closest('plex-layout-sidebar') as HTMLElement | null;
            const sidebarInverted = sidebarParent?.attributes?.getNamedItem('type')?.value === 'invert';
            if (this.inverted !== false || sidebarInverted) {
                const menuContent = document.querySelector('.mat-mdc-menu-panel.plex-help');

                if (menuContent) {
                    menuContent.classList.add('inverted');
                }
            }
            this.btnContainer = sidebarParent ?? triggerBtn?.closest('plex-layout-main') as HTMLElement | null;
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
                const overlayBox = document.querySelector('.cdk-overlay-connected-position-bounding-box') as HTMLElement | null;
                if (overlayBox) {
                    overlayBox?.style.setProperty('left', '8px', 'important');
                    overlayBox?.style.setProperty('right', `${this.btnContainer?.offsetWidth}px`, 'important');
                }
                return this.btnContainer?.offsetWidth ? `${this.btnContainer?.offsetWidth}px` : '100vw';
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
