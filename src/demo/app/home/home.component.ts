import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Plex } from '../../../lib/core/service';
import { HeaderPacienteComponent } from '../header-paciente/header-paciente.component';

@Component({
    templateUrl: 'home.html'
})
export class HomeDemoComponent implements OnInit {
    public field = '';
    public tooltip = 'Este es un tooltip<br>multilinea que ocupa mucho espacio';
    public data = [];
    documento = '45979360';

    constructor(public plex: Plex, private ref: ChangeDetectorRef) {
        this.plex.updateTitle('Bienvenido a Plex');
        this.loadData();
    }

    ngOnInit() {
        this.ref.detectChanges();
    }

    guardar($event) {
        // Ejemplo de como limpiar el navbar
        this.plex.clearNavbar();
    }

    loadData() {
        const max = Math.random() * 20 + 5;
        for (let i = 0; i < max; i++) {
            this.data = [...this.data, { identificador: Math.round(Math.random() * 1000) + 1 }];
        }
    }

    helpClick() {
    }
}
