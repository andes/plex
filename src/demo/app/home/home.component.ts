import { Component, OnInit, HostBinding } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: 'home.html'
})
export class HomeDemoComponent implements OnInit {
    @HostBinding('class.plex-layout') layout = true;
    constructor(public plex: Plex) { }

    ngOnInit() {
        this.plex.updateTitle('Plex: UI/UX para ANDES');
        this.plex.updateMenu([
            { label: 'Ir a inicio', icon: 'dna', route: '/incio' },
            { label: 'Ir a ruta inexistente', icon: 'flag', route: '/ruta-rota' },
            { divider: true },
            { label: 'Item con handler', icon: 'wrench', handler: (() => { alert('Este es un handler'); }) }
        ]);
        this.plex.updateStatus({ API: 'OK' });
        this.plex.toast('danger', 'El archivo de guardó correctamente', 'Información', 4000);
        this.plex.toast('warning', 'El archivo de guardó correctamente', 'Información', 8000);
    }
}
