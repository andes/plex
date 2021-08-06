import { AfterContentInit, Component, Input, OnDestroy } from '@angular/core';
import { PlexPanelComponent } from './panel.component';


@Component({
    selector: 'plex-accordion',
    template: ` <div id="accordion" role="tablist" aria-multiselectable="true">
                    <ng-content></ng-content>
                </div>
                `,
})

export class PlexAccordionComponent implements AfterContentInit, OnDestroy {
    @Input() activeLast: boolean;
    public panels: PlexPanelComponent[] = [];

    addPanel(panel: PlexPanelComponent) {
        this.panels.push(panel);
    }

    ngAfterContentInit() {
        this.panels.forEach((panel) => {
            panel.toggle.subscribe((open) => {
                if (this.activeLast && open) {
                    this.openPanel(panel);
                }
            });
        });
    }

    openPanel(panel: PlexPanelComponent) {
        this.panels.filter(p => p !== panel).forEach(p => p.active = false);
    }

    ngOnDestroy() {
        if (this.panels) {
            this.panels.forEach((panel) => {
                panel.toggle.unsubscribe();
            });
        }
    }
}
