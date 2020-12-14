import { PlexSize } from './../core/plex-size.type';
import { PlexType } from './../core/plex-type.type';
import { Component, Input, ElementRef, ViewChild, OnChanges, ContentChildren, QueryList } from '@angular/core';
import { PlexButtonComponent } from '../button/button.component';

@Component({
    selector: 'plex-badge',
    template: `
        <span #badgeIcon class="badge badge-{{ type }} badge-{{ size }}" [class.badge-btn]="hasButton()">
            <ng-content select="plex-icon"></ng-content>
            <ng-content></ng-content>
        </span>
        <span *ngIf="hasButton()" #badgeBtn class="btn-badge btn-badge-{{ type }}">
            <ng-content select="plex-button"></ng-content>
            <ng-content select="plex-datetime"></ng-content>
        </span>
        `,
})
export class PlexBadgeComponent implements OnChanges {
    @Input() type: PlexType;
    @Input() size: PlexSize = 'md';
    @Input() color: string;
    @ContentChildren(PlexButtonComponent, { descendants: false }) plexButtons: QueryList<PlexButtonComponent>;

    @ViewChild('badgeIcon', { static: true }) badgeIcon: ElementRef;

    @ViewChild('badgeBtn', { static: true }) badgeBtn: ElementRef;

    constructor() {
        this.type = 'success';
    }

    ngOnChanges() {
        if (this.color && this.color.length > 0) {
            this.badgeIcon.nativeElement.style.setProperty('--badge-color', this.color);
            this.badgeBtn.nativeElement.style.setProperty('--badge-color', this.color);
        }
    }

    hasButton() {
        return this.plexButtons.length > 0;
    }
}
