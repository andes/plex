import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'plex-group',
    template: `
        <div>
            <div class="plex-group" class="spacing-{{spacing}}">
                <ng-content select="plex-badge[size=sm]"></ng-content>
                <ng-content select="plex-button[size=sm]"></ng-content>
                <plex-dropdown icon="dots-vertical" type="link" size="sm" class="group-dropdown ml-1" [right]="true">
                    <ng-content select="plex-group-item"></ng-content>
                </plex-dropdown>
            </div>
        </div>
    `,
})

export class PlexGroupComponent implements AfterViewInit {
    @Input() spacing = 1;

    constructor(
        private elementRef: ElementRef,
    ) { }

    ngAfterViewInit() {
        const group = this.elementRef.nativeElement.querySelector('plex-group-item');

        if (group) {
            const dropdown = this.elementRef.nativeElement.querySelector('plex-dropdown');
            dropdown.className = 'd-inline-block';
        }
    }
}
