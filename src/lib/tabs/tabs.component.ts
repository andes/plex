import { Component, AfterViewInit } from '@angular/core';
import { PlexTabComponent } from './tab.component';

@Component({
    selector: 'plex-tabs',
    templateUrl: 'tabs.html'
})
export class PlexTabsComponent implements AfterViewInit {
    public tabs: PlexTabComponent[] = [];

    ngAfterViewInit() {
        if (this.tabs.length) {
            this.tabs[0].active = true;
        }
    }

    addTab(tab: PlexTabComponent) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }

    selectTab(tab: PlexTabComponent) {
        this.tabs.forEach((t) => {
            t.active = false;
        });
        tab.active = true;
    }
}