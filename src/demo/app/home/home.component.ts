import { Component, OnInit, HostBinding } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: 'home.html'
})
export class HomeDemoComponent {
    // Permite el uso de flex-box en el componente
    public field = '';
    constructor(public plex: Plex) {}
    guardar($event) {

    }
}
