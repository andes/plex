import { PlexType } from './../core/plex-type.type';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-title',
    template: `
        <div role="heading" [attr.aria-level]="ariaLevel" class="plex-title d-flex flex-row justify-content-between align-items-center" responsive>
            <div class="nav-title" justify="start">
                <span *ngIf="backNav" class="hover">
                    <plex-icon name="flecha-izquierda" size="lg" type="info" (click)="backNav()"></plex-icon>
                </span>
                <div class="plex-title-label {{ size }} {{ cssType }} ml-2"> {{ titulo }} </div>
            </div>
            <div class="title-content">
                <ng-content></ng-content>
            </div>
        </div>
        <div>
            <ng-content select="plex-tabs"></ng-content>
            <ng-content select="plex-wrapper"></ng-content>
        </div>
    `
})
export class PlexTitleComponent {
    @Input() titulo: string;
    @Input() size: 'sm' | 'md' | 'xl' | 'lg' = 'lg';
    @Input() type: PlexType = 'info';
    @Input() backNav: Function;

    // Asigna un aria-level al heading según su tamaño
    get ariaLevel() {
        return (this.size === 'xl' || this.size === 'lg') ? 1 : (this.size === 'md' ? 2 : 3);
    }

    get cssType(): string {
        return this.type ? 'text-' + this.type : '';
    }

    constructor() {

    }
}
