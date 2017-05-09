import { Component, OnInit, HostBinding } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: 'home.html'
})
export class HomeDemoComponent implements OnInit {
    // Permite el uso de flex-box en el componente
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
        this.plex.updateUserInfo({
            "id": "58c6cee39b984012d887a667",
            "usuario": {
                "nombreCompleto": "Haruki Morakami",
                "nombre": "Haruki",
                "apellido": "Morakami",
                "username": 26108063,
                "documento": 26108063
            },
            "roles": [
                [
                    "medico"
                ]
            ],
            "organizacion": {
                "_id": "57e9670e52df311059bc8964",
                "nombre": "HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON",
                "id": "57e9670e52df311059bc8964"
            },
            "permisos": [
                "turnos:planificarAgenda:prestacion:1234",
                "turnos:planificarAgenda:prestacion:5676",
                "turnos:darTurnos:delDia,programados",
                "turnos:darTurnos:paraProfesional",
                "turnos:darTurnos:prestacion:5676",
                "turnos:darTurnos:prestacion:9999"
            ],
            "iat": 1489424099,
            "exp": 1492424099
        });
        this.plex.toast('danger', 'El archivo de guardó correctamente', 'Información', 4000);
        this.plex.toast('warning', 'El archivo de guardó correctamente', 'Información', 8000);
    }
}
