import { Component, AfterViewInit } from '@angular/core';
import { PlexPanelComponent } from './panel.component';

@Component({
    selector: 'plex-accordion',
    templateUrl: 'accordion.html'
})
export class PlexAccordionComponent implements AfterViewInit {
    public accordion: PlexPanelComponent[] = [];

    ngAfterViewInit() {
        if (this.accordion.length) {
            this.accordion[0].active = true;
        }
    }

    addPanel(panel: PlexPanelComponent) {
        if (this.accordion.length === 0) {
            panel.active = true;
        }
        this.accordion.push(panel);
    }

    selectPanel(panel: PlexPanelComponent) {
        panel.active = !panel.active;
    }
}
