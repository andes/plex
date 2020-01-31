import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

// Servicios y modelo
import { PacienteService } from '../service/paciente.service';
import { Paciente } from '../service/paciente';

@Component({
    templateUrl: 'listado-sidebar.html',
    styleUrls: ['listado-sidebar.scss'],
})
export class ListadoSidebarComponent implements OnInit {

    // public listadoPaciente: Paciente[];
    pacientes$: Observable<Paciente[]>;
    selectedId: Number;
    public prueba = '';
    public cambio = '';
    constructor(
        private pacienteService: PacienteService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.pacientes$ = this.route.paramMap.pipe(
            switchMap(params => {
                this.selectedId = +params.get('id');
                return this.pacienteService.getPacientes();
            })
        );
    }
}
