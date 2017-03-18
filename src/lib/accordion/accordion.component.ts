import { Component, AfterViewInit } from '@angular/core';
import { PlexPanelComponent } from './panel.component';

@Component({
    selector: 'plex-accordion',
    templateUrl: 'accordion.html'
})
export class PlexAccordionComponent implements AfterViewInit {
    public panels: PlexPanelComponent[] = [];

    ngAfterViewInit() {
        if (this.panels.length) {
            this.panels[0].active = true;
        }
    }

    addPanel(panel: PlexPanelComponent) {
        if (this.panels.length === 0) {
            panel.active = true;
        }
        this.panels.push(panel);
    }
}
