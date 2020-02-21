import { Component, Input, ElementRef, ViewChild, OnChanges } from '@angular/core';

@Component({
    selector: 'plex-badge',
    template: `
        <span #badge class="badge badge-{{ type }} badge-{{ size }}">
            <ng-content select="plex-icon"></ng-content>
            <ng-content></ng-content>
        </span>
        <span #badgeBtn class="btn-badge btn-badge-{{ type }}">
            <ng-content select="plex-button"></ng-content>
        </span>
        `,
})
export class PlexBadgeComponent implements OnChanges {
    @Input() type: 'success' | 'info' | 'warning' | 'danger' | 'default';
    @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
    @Input() color: string;

    @ViewChild('badge', { static: true }) el: ElementRef;

    @ViewChild('badgeBtn', { static: true }) badgeBtn: ElementRef;

    constructor() {
        this.type = 'success';
    }

    ngOnChanges() {
        if (this.color && this.color.length > 0) {
            this.el.nativeElement.style.setProperty('--badge-color', this.color);
            this.badgeBtn.nativeElement.style.setProperty('--badge-color', this.color);
        }

    }

}
