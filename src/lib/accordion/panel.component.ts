import { Component, Input, EventEmitter, Output } from '@angular/core';
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
    @Output() toggle = new EventEmitter();

    constructor(accordion: PlexAccordionComponent) {
        accordion.addPanel(this);
    }

    selectPanel() {
        this.active = !this.active;
        this.toggle.emit(this.active);
    }

}
