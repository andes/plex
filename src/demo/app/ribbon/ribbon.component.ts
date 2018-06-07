import { Component, HostBinding } from '@angular/core';

@Component({
    templateUrl: './ribbon.html'
})
export class RibbonDemoComponent {
    @HostBinding('class.plex-layout') layout = true;
}
