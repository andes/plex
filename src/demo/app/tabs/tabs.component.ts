import { Plex } from './../../../lib/core/service';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'tabs.html',
})
export class TabsDemoComponent {
    public activo = 0;

    constructor(private plex: Plex) { }

    public next() {
        this.activo++;
        if (this.activo > 2) {
            this.activo = 0;
        }
    }

    public cambio(value) {
        this.plex.toast('info', 'Tab seleccionado: ' + value);
        this.activo = value;
    }
}
