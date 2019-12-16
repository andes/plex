import { Component, Input, ElementRef, ViewChild, OnChanges } from '@angular/core';

@Component({
    selector: 'plex-badge',
    template: `
        <span #badge class="badge badge-{{type}} badge-{{size}}">
            <ng-content></ng-content>
        </span>
                `,
})
export class PlexBadgeComponent implements OnChanges {
    @Input() type: string;
    @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
    @Input() color: string;

    @ViewChild('badge', { static: true }) el: ElementRef;

    constructor() {
        this.type = 'success';
    }

    ngOnChanges() {
        if (this.color && this.color.length > 0) {
            this.el.nativeElement.style.setProperty('--badge-color', this.color);
        }

    }

}
