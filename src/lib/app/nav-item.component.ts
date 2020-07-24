import { Component, Input, HostBinding, HostListener, ViewChild } from '@angular/core';
import { PlexHelpComponent } from '../help/help.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'div[nav-item]',
    template: `
        <ng-content select="plex-icon"></ng-content>
        <plex-help [icon]="null" (close)="onClose()">
            <div info>
                <ng-content></ng-content>
            </div>
        </plex-help>


    `,
})
export class NavItemComponent {

    @HostBinding('class') classList = 'action hidden-md-down';

    @HostBinding('class.hover') opened = false;

    @ViewChild(PlexHelpComponent) plexHelp;

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
