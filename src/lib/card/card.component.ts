import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-card',
    template: `
    <div class="card bg-{{ type }}" [ngClass]="{'text-white' : type != 'default'}" [class.selected]="selected">
        <ng-content select="img"></ng-content>
        <ng-content select="plex-icon"></ng-content>
        <div class="d-flex" [ngClass]="cssAlign">
            <ng-content select="plex-badge"></ng-content>
        </div>
        <div class="d-flex mt-2" [ngClass]="cssAlign">
            <ng-content select="plex-label"></ng-content>
        </div>
        <div class="d-flex flex-column mt-2" [ngClass]="cssAlign">
            <ng-content></ng-content>
        </div>
        <div class="d-flex mt-2" [ngClass]="cssAlign">
            <ng-content select="plex-button"></ng-content>
        </div>
    </div>
    `,
})

export class PlexCardComponent {
    @Input() selected = false;
    @Input() align: 'start' | 'end' | 'center' = 'center';
    @Input() size: 'xs' | 'md' | 'lg' | 'block' = 'md';
    @Input() type: 'success' | 'warning' | 'danger' | 'dark' | 'default' = 'default';

    constructor() {
    }

    get cssAlign() {
        if (this.align === 'center') {
            return 'justify-content-center';
        } else {
            return this.align === 'start' ? 'justify-content-start' : 'justify-content-end';
        }
    }
}
