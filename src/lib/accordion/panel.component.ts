import { Component, Input } from '@angular/core';
import { PlexAccordionComponent } from './accordion.component';

@Component({
  selector: 'plex-panel',
   templateUrl: 'panel.html'
})
export class PlexPanelComponent {
  @Input() label: string;
  @Input() icon: string;
  @Input() content: string;
  @Input() active: boolean;

  constructor(tabs: PlexAccordionComponent) {
    tabs.addPanel(this);
  }
}
