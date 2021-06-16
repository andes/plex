import { Component, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';

@Component({
    selector: 'plex-card',
    template: `
    <div tabindex="0" #cardColor class="card bg-{{ mode }}-{{ type }}" [ngClass]="{ 'selectable' : selectable }" [class.selected]="selected">
        <ng-content select="img"></ng-content>
        <ng-content select="plex-icon"></ng-content>
        <div class="d-flex" [ngClass]="cssAlign">
            <ng-content select="plex-badge"></ng-content>
        </div>
        <div class="d-flex mt-2 text-{{ aligned }}" [ngClass]="cssAlign">
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

export class PlexCardComponent implements OnChanges {
    @Input() selected = false;
    @Input() aligned: 'start' | 'end' | 'center' = 'center';
    @Input() selectable = false;
    @Input() align: 'start' | 'end' | 'center' = 'center';
    @Input() size: 'xs' | 'md' | 'lg' | 'block' = 'md';
    @Input() type: 'info' | 'success' | 'warning' | 'danger' | 'dark' | 'custom' | 'default' = 'default';
    @Input() mode: 'filled' | 'outlined' = 'outlined';
    @Input() color: string;

    @ViewChild('cardColor', { static: true }) cardColor: ElementRef;

    constructor() {
    }

    get cssAlign() {
        if (this.aligned === 'center') {
            return 'justify-content-center';
        } else {
            return this.aligned === 'start' ? 'justify-content-start' : 'justify-content-end';
        }
    }

    ngOnChanges() {
        if (this.color && this.color.length > 0) {
            this.cardColor.nativeElement.style.setProperty('--card-color', this.color);
        }

        if (this.color && this.color.length > 0 && this.mode === 'outlined') {
            this.cardColor.nativeElement.style.setProperty('--card-color', this.color + '20');
        }
    }
}
