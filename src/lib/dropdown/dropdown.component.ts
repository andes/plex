import { Component, Input, HostBinding, HostListener } from '@angular/core';
import { Plex } from '../../lib/core/service';
import { MenuItem } from '../../lib/app/menu-item.class';

@Component({
    selector: 'plex-dropdown',
    templateUrl: 'dropdown.html'
})
export class PlexDropdownComponent {
    @Input() label: string;
    @Input() icon: string;
    @Input() open: boolean;
    @Input() menuItems: Object[];
    @Input() @HostBinding('attr.disabled') disabled: boolean;
    
    public list = [
        new MenuItem({ label: 'Opcion 1', icon: 'dna', route: '/incio' }),
        new MenuItem({ label: 'Opcion 2', icon: 'flag', route: '/opcion-2' }),
        new MenuItem({ label: 'Opcion 3', icon: 'flask-empty-outline', route: '/opcion-3' }),
        new MenuItem({ divider: true }),
        new MenuItem({ label: 'Opcion 4', icon: 'wrench', handler: (() => { alert('andó'); return false; }) })
    ];


    constructor(public plex: Plex) {
        this.open = false;
        this.disabled = false;
    }

    dropDown(menu: PlexDropdownComponent, type) {
      this.open = !this.open;
    }

}
