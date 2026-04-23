import { Component, OnDestroy } from '@angular/core';
import { Plex } from './service';

@Component({
    selector: 'plex-navbar-item-owner',
    template: ''
})
export class PlexNavbarItemOwnerComponent implements OnDestroy {
    /**
     * Token del item que este owner "posee".
     * Se setea desde el servicio al crearlo.
     */
    token!: number;

    constructor(private plex: Plex) { }

    ngOnDestroy() {
        this.plex.clearNavbarItemIfToken(this.token);
    }
}
