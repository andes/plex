import { Component } from '@angular/core';
import { Plex } from '../../../lib/core/service';
import { HeaderPacienteComponent } from '../header-paciente/header-paciente.component';
import { DropdownItem } from '../../../lib/dropdown/dropdown-item.inteface';

@Component({
    templateUrl: 'home.html'
})
export class HomeDemoComponent {
    public field = '';
    public tooltip = 'Este es un tooltip<br>multilinea que ocupa mucho espacio';
    public data = [];
    public items: DropdownItem[];

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

        this.loadData();
    }

    ngOnInit() {
        this.items = [
            { label: 'Ir a inicio', icon: 'dna', route: '/incio' },
            { label: 'Ir a ruta inexistente', icon: 'flag', route: '/ruta-rota' },
            { divider: true },
            { label: 'Item con handler', icon: 'wrench', handler: (() => { alert('Este es un handler'); }) }
        ];
    }

    guardar($event) {
        // Ejemplo de como limpiar el navbar
        this.plex.clearNavbar();
    }

    loadData() {
        // tslint:disable-next-line:no-console
        console.log('Loading data on scroll');
        const max = Math.random() * 20 + 5;
        for (let i = 0; i < max; i++) {
            this.data = [...this.data, { identificador: Math.round(Math.random() * 1000) + 1 }];
        }
    }
}
