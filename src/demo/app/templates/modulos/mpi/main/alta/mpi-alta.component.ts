import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../../service/paciente.service';
import { Paciente } from '../../../../service/paciente';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Plex } from '../../../../../../../lib/core/service';

@Component({
    selector: 'plex-mpi-alta',
    templateUrl: './mpi-alta.component.html',
})
export class MpiAltaComponent implements OnInit {

    public listadoPaciente: Paciente[];
    pacientes$: Observable<Paciente[]>;
    paciente$: Observable<Paciente>;


    constructor(
        private pacienteService: PacienteService,
        private router: Router,
        private route: ActivatedRoute,
        private plex: Plex,
    ) { }

    ngOnInit() {
        this.pacientes$ = this.pacienteService.getPacientes();

        this.paciente$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.pacienteService.getPaciente(params.get('id')))
        );
    }
}
