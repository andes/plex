import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { DropdownItem } from '../../../lib/dropdown/dropdown-item.inteface';
import { PlexDropdownComponent } from '../../../lib/dropdown/dropdown.component';

@Component({
    templateUrl: 'dropdown.html',
})
export class DropdownDemoComponent implements OnInit {

    lista = [
        {
            titulo: 'Titulo del primer item',
            subtitulo: 'Este es el subtitulo del primer item',
        },
        {
            titulo: 'Titulo del segundo item',
            subtitulo: 'Este es el subtitulo del segundo item',
        },
        {
            titulo: 'Titulo del tercer item',
            subtitulo: 'Este es el subtitulo del tercer item',
        },
    ];

    public templateModel1: any;
    public items: DropdownItem[];

    ngOnInit() {
        this.items = [
            { label: 'Ir a inicio', icon: 'dna', route: '/incio' },
            { label: 'Ir a ruta inexistente', icon: 'flag', route: '/ruta-rota' },
            { divider: true },
            { label: 'Item con handler', icon: 'wrench', handler: (() => { alert('Este es un handler'); }) }
        ];

        // Form1: Sin validador
        this.templateModel1 = { nombre: null };
    }


}
