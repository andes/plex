import { Plex } from './../../../lib/core/service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: 'button.html',
})
export class ButtonDemoComponent implements OnInit {
    public modelo = {
        campo1: null
    };

    color = 'red';

    constructor(
        private plex: Plex,
        private server: HttpClient
    ) { }

    ngOnInit(): void {
        this.plex.updateTitle([{ name: 'Plex', route: '/' }, { name: 'Button' }]);
    }

    onClick() {
        this.server.post('https://jsonplaceholder.typicode.com/posts', {}).subscribe(() => {

        });
        this.server.post('https://jsonplaceholder.typicode.com/posts', {}).subscribe(() => {

        });
        // alert('Click handler was fired');
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
