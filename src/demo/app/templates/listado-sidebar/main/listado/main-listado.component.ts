import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../service/paciente.service';
import { Paciente } from '../../../service/paciente';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'plex-main-listado',
    templateUrl: './main-listado.component.html',
})
export class MainListadoComponent implements OnInit {

    pacientes$: Observable<Paciente[]>;
    selectedId: string;

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
        this.router.navigate(['templates', 'listado-sidebar', this.selectedId]);
    }
}
