import { Component, OnInit, HostBinding } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: 'home.html'
})
export class HomeDemoComponent {
    public field = '';
    public tooltip = 'Este es un tooltip<br>multilinea que ocupa mucho espacio';

    constructor(public plex: Plex) {
        this.plex.updateTitle([{ name: 'Internación', route: '/' }, { name: 'Punto de inicio' }]);
    }

    guardar($event) {
    }
}
