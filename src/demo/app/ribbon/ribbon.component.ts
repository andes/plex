import { Component, HostBinding } from '@angular/core';

@Component({
    templateUrl: './ribbon.html',
    styles: [`
        plex-ribbon {
            position: absolute;
            top: -40px !important;
            left: 20px;
        }
    `]
})
export class RibbonDemoComponent {
    @HostBinding('class.plex-layout') layout = true;
}
