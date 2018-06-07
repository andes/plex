import { Component, OnInit, HostBinding } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: 'layout.html'
})
export class LayoutDemoComponent {
    public field = '';
    constructor(public plex: Plex) {}

    guardar($event) {

    }
}
