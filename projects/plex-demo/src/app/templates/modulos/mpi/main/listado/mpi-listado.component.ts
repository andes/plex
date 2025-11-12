import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PacienteService } from '../../../../service/paciente.service';
import { Paciente } from '../../../../service/paciente';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'plex-mpi-listado',
    templateUrl: './mpi-listado.component.html',
})
export class MpiListadoComponent implements OnInit {
    pacientes$: Observable<Paciente[]>;
    selectedId: string;


    sidebar = 8;
    @Output() enviar = new EventEmitter<number>();

    constructor(
        private pacienteService: PacienteService,
        private router: Router,
    ) {

    }
    ngOnInit() {

        this.pacientes$ = this.pacienteService.getPacientes();
    }

    selected(paciente) {
        this.selectedId = paciente.id;
        this.router.navigate(['templates', 'mpi-maquetado', this.selectedId]);
        this.enviar.emit(this.sidebar);
    }
}
