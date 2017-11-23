import { Component, AfterViewInit } from '@angular/core';
import { PlexPanelComponent } from './panel.component';

@Component({
    selector: 'plex-accordion',
    template: ` <div id="accordion" role="tablist" aria-multiselectable="true">
                    <ng-content></ng-content>
                </div>
                `,
})
export class PlexAccordionComponent {
    public panels: PlexPanelComponent[] = [];

    addPanel(panel: PlexPanelComponent) {
        this.panels.push(panel);
    }
}
