import { Plex } from './../../../lib/core/service';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'button.html',
})
export class ButtonDemoComponent {
    public modelo = {
        campo1: 'XXX'
    };
    constructor(private plex: Plex) { }

    onClick() {
        alert('Click handler was fired');
    }

    guardar($event) {
        if ($event.formValid) {
            this.plex.info('success', 'Formulario OK');
        } else {
            this.plex.info('warning', 'Completar datos requeridos');
        }
    }
}
