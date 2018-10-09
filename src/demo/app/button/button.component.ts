import { Plex } from './../../../lib/core/service';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'button.html',
})
export class ButtonDemoComponent {
    public modelo = {
        campo1: null
    };
    constructor(private plex: Plex) {
        this.plex.updateTitle([{ name: 'Plex', route: '/' }, { name: 'Button' }]);
    }

    onClick() {
        alert('Click handler was fired');
    }

    onDisabledClick() {
        alert('ESTE HANDLER NO DEBERÍA EJECUTARSE. SI SE EJECUTA ES UN POR UN BUG DE ANGULAR/PLEX');
    }

    guardar($event) {
        if ($event.formValid) {
            this.plex.info('success', 'Formulario OK');
        } else {
            this.plex.info('warning', 'Completar datos requeridos');
        }
    }
}
