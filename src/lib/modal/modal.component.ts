import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'plex-modal',
    template: `
        <div *ngIf="showed" class="plex-modal" (click)="$event.stopPropagation();close();">
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
export class PlexModalComponent {

    /**
     * Muestra una cruz para cerrar el modal.
     */
    @Input() allowClose = false;

    /**
     * Emite un evento cuando se cierra el modal.
     */

    @Output() closed = new EventEmitter<void>();

    showed = false;

    public show() {
        this.showed = true;
    }

    public close() {
        this.showed = false;
        this.closed.emit();
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        // Nos aseguramos de no bloquear el teclado si el usuario está escribiendo (isComposing)
        if (event['isComposing'] && !this.showed) {
            return false;
        }
        if (event.which === 27) {
            return this.close();
        }
    }
}
