import { Component, OnInit, HostBinding } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: 'home.html'
})
export class HomeDemoComponent {
    // Permite el uso de flex-box en el componente
    @HostBinding('class.plex-layout') layout = true;

    constructor(public plex: Plex) {}
}
