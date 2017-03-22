import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { DropdownItem } from '../../../lib/dropdown/dropdown-item.inteface';
import { PlexDropdownComponent } from '../../../lib/dropdown/dropdown.component';

@Component({
    templateUrl: 'dropdown.html',
})
export class DropdownDemoComponent implements OnInit {
    public items: DropdownItem[];

    ngOnInit() {
        this.items = [
            { label: 'Ir a inicio', icon: 'dna', route: '/incio' },
            { label: 'Ir a ruta inexistente', icon: 'flag', route: '/ruta-rota' },
            { divider: true },
            { label: 'Item con handler', icon: 'wrench', handler: (() => { alert('Este es un handler'); }) }
        ];
    }
}
