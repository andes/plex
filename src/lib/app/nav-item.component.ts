import { Component, Input, HostBinding, HostListener, ViewChild, ElementRef, AfterViewInit, ContentChild } from '@angular/core';
import { PlexHelpComponent } from '../help/help.component';
import { PlexIconComponent } from '../icon/icon.component';

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

    ngAfterViewInit() {
        console.log(this.plexHelp, this.plexIcon);

        if (this.plexIcon) {
            const iconName = this.plexIcon.name;

            this.plexHelp.icon = iconName;
        }
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
