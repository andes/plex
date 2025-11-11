import { Component, HostBinding, ContentChild, HostListener, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { PlexIconComponent } from '../icon/icon.component';
import { PlexHelpComponent } from '../help/help.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'div[nav-item]',
    template: `
        <plex-help class="no-icon" btnSize="lg" btnType="link" size="lg" (close)="onClose()">
            <div info>
                <ng-content select=":not(plex-icon)"></ng-content>
            </div>
        </plex-help>
    `,
})
export class NavItemComponent implements AfterViewInit {
    @HostBinding('class') classList = 'action hidden-sm-down';

    @HostBinding('class.hover') opened = false;

    @ViewChild(PlexHelpComponent) plexHelp;

    @ContentChild(PlexIconComponent) plexIcon: PlexIconComponent;

    constructor(private cd: ChangeDetectorRef) { }

    ngAfterViewInit() {
        if (this.plexIcon) {
            const iconName = this.plexIcon.name;
            this.plexHelp.icon = iconName;
        }
        this.cd.detectChanges();
    }

    @HostListener('click', ['event'])
    click() {
        if (!this.opened) {
            event.stopImmediatePropagation();
            this.plexHelp.toggle();
            this.opened = true;
        }
    }

    onClose() {
        this.opened = false;
    }
}
