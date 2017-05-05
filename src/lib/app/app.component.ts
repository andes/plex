import { Component } from '@angular/core';
import { Plex } from './../core/service';
import { DropdownItem } from './../dropdown/dropdown-item.inteface';

@Component({
    selector: 'plex-app',
    templateUrl: 'app.html',
})
export class PlexAppComponent {
    // Menú de Login
    public loginOpen = false;
    public loginItems: DropdownItem[] = [
        { label: 'Cerrar sesión', icon: 'logout', route: '/logout' },
    ];

    // Menú de Aplicación
    public menuOpen = false;

    constructor(public plex: Plex) { };
}
