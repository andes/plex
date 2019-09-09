import { Component } from '@angular/core';

@Component({
    selector: 'plex-modal',
    template: `
        <div *ngIf="showed" class="plex-modal" (click)="$event.stopPropagation();close();">
            <div class="plex-modal-content" (click)="$event.stopPropagation();">
                <header>
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
    private showed = false;

    public show() {
        this.showed = true;
    }

    public close() {
        this.showed = false;
    }
}
