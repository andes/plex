import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MenuItem } from '../../../lib/app/menu-item.class';
import { PlexDropdownComponent } from '../../../lib/dropdown/dropdown.component';

@Component({
    templateUrl: 'dropdown.html',
})
export class DropdownDemoComponent implements OnInit {

    @Input() items = [
        new MenuItem({ label: 'Ir a inicio', icon: 'dna', route: '/incio' }),
        new MenuItem({ label: 'Ir a ruta inexistente', icon: 'flag', route: '/ruta-rota' }),
        new MenuItem({ divider: true }),
        new MenuItem({ label: 'Item con handler', icon: 'wrench', handler: (() => { alert('Funciona!'); return false; }) })
    ];


    ngOnInit() {}


}
