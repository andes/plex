import { Component, AfterViewInit } from '@angular/core';
import { PlexPanelComponent } from './panel.component';

@Component({
    selector: 'plex-accordion',
    templateUrl: 'accordion.html'
})
export class PlexAccordionComponent {
    public panels: PlexPanelComponent[] = [];

    addPanel(panel: PlexPanelComponent) {
        this.panels.push(panel);
    }
}
