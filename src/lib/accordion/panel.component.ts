import { Component, Input } from '@angular/core';
import { PlexAccordionComponent } from './accordion.component';

@Component({
  selector: 'plex-panel',
   templateUrl: 'panel.html'
})
export class PlexPanelComponent {
  @Input() tituloPrincipal: string;
  @Input() tituloSecundario: string;
  @Input() icon: string;
  @Input() content: string;
  @Input() active: boolean;

  constructor(accordion: PlexAccordionComponent) {
    accordion.addPanel(this);
  }

  selectPanel(panel: PlexPanelComponent) {
      this.active = !this.active;
  }

}
