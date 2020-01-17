import { Component, OnInit } from '@angular/core';

// Servicios y modelo
import { PacienteService } from '../../../../service/paciente.service';
import { Paciente } from '../../../../service/paciente';

@Component({
    templateUrl: 'listado-sidebar.html',
    styleUrls: ['listado-sidebar.scss'],
})
export class ListadoSidebarComponent implements OnInit {

    public listadoPaciente: Paciente[];

    constructor(private pacienteService: PacienteService) {
    }

    ngOnInit() {
        this.pacienteService.getPacientes();
    }

}
