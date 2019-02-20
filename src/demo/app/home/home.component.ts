import { Component } from '@angular/core';
import { Plex } from '../../../lib/core/service';
import { HeaderPacienteComponent } from '../header-paciente/header-paciente.component';

@Component({
    templateUrl: 'home.html'
})
export class HomeDemoComponent {
    public field = '';
    public tooltip = 'Este es un tooltip<br>multilinea que ocupa mucho espacio';

    constructor(public plex: Plex) {
        this.plex.updateTitle('Bienvenido a Plex');

        this.plex.setNavbarItem(HeaderPacienteComponent, {
            paciente: {
                nombre: 'Mariano',
                apellido: 'Botta',
                sexo: 'masculino',
                documento: '34934522'
            }
        });

        this.plex.updateTitle([{
            route: '/',
            name: 'PLEX'
        }, {
            route: '/',
            name: 'Componentes'
        }]);
    }

    guardar($event) {
        // Ejemplo de como limpiar el navbar
        this.plex.clearNavbar();
    }
}
