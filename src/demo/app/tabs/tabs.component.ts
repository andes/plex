import { Plex } from './../../../lib/core/service';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'tabs.html',
})
export class TabsDemoComponent {
    public activo = 0;
    public mostrar = false;

    constructor(private plex: Plex) {
        setInterval(() => {
            this.mostrar = !this.mostrar;
            this.plex.toast('info', 'Cambió el tab');
        }, 2000);
    }

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
