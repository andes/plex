import { PlexType } from './../core/plex-type.type';
import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
    selector: 'plex-title',
    template: `
        <div role="heading" [attr.aria-level]="ariaLevel" class="plex-title d-flex flex-row justify-content-between align-items-center" responsive>
            <div class="nav-title" justify="start">
                <span *ngIf="hasBackButton" class="hover mr-2" (click)="onBack()">
                    <plex-icon name="flecha-izquierda" size="lg" type="info"></plex-icon>
                </span>
                <div class="plex-title-label {{ size }} {{ cssType }}"> {{ titulo }} </div>
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
export class PlexTitleComponent implements OnInit {
    @Input() titulo: string;
    @Input() size: 'sm' | 'md' | 'xl' | 'lg' = 'lg';
    @Input() type: PlexType = 'info';
    @Output() back = new EventEmitter();

    hasBackButton = false;

    // Asigna un aria-level al heading según su tamaño
    get ariaLevel() {
        return (this.size === 'xl' || this.size === 'lg') ? 1 : (this.size === 'md' ? 2 : 3);
    }

    get cssType(): string {
        return this.type ? 'text-' + this.type : '';
    }

    constructor() {

    }

    ngOnInit() {
        this.hasBackButton = this.back.observers.length > 0;
    }

    onBack() {
        this.back.emit();
    }
}
