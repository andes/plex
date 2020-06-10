import { Component, Input, HostListener, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
    selector: 'plex-modal',
    template: `
        <div *ngIf="showed" class="plex-modal" (click)="$event.stopPropagation();backdropClick();">
            <div class="plex-modal-content" (click)="$event.stopPropagation();">
                <header>
                    <div *ngIf="allowClose" class="plex-modal-close" (click)="close();">
                        <i class="mdi mdi-close">
                    </i></div>
                    <ng-content select="plex-icon"></ng-content>
                    <ng-content select="plex-modal-title"></ng-content>
                    <ng-content select="plex-modal-subtitle"></ng-content>
                </header>
                <ng-content select="main"></ng-content>
                <footer>
                    <ng-content select="plex-button[modal][left]"></ng-content>
                    <ng-content select="plex-button[modal][right]"></ng-content>
                </footer>
            </div>
        </div>
    `,
})
export class PlexModalComponent implements OnInit {

    /**
     * Muestra una cruz para cerrar el modal.
     */
    @Input() allowClose = false;

    /**
     * Habilita cerrar el modal haciendo haciendo click afuera.
     */
    @Input() allowBackdropClose = true;

    /**
     * Habilita cerrar el modal con la tecla esc.
     */
    @Input() allowEscClose = true;

    /**
     * El modal se visualiza abierto al arrancar.
     */
    @Input() startOpen = false;

    /**
     * Emite un evento cuando se cierra el modal.
     */

    @Output() closed = new EventEmitter<void>();

    showed = false;

    ngOnInit() {
        if (this.startOpen) {
            this.showed = true;
        }
    }

    public show() {
        this.showed = true;
    }

    public close() {
        this.showed = false;
        this.closed.emit();
    }

    public backdropClick() {
        if (this.allowBackdropClose) {
            this.close();
        }
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        // Nos aseguramos de no bloquear el teclado si el usuario está escribiendo (isComposing)
        if (event['isComposing'] && !this.showed) {
            return false;
        }
        if (event.which === 27) {
            if (this.allowEscClose) {
                return this.close();
            }
        }
    }
}
