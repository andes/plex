import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PacienteService } from '../../../../service/paciente.service';
import { Paciente } from '../../../../service/paciente';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'plex-mpi-sidebar-detalle',
    templateUrl: './mpi-detalle.component.html',
})
export class MpiDetalleComponent implements OnInit {

    sidebar = 12;
    @Output() cerrar = new EventEmitter<number>();

    cerrarSidebar() {
        this.cerrar.emit(this.sidebar);
    }

    public listadoPaciente: Paciente[];
    paciente$: Observable<Paciente>;
    public items = [
        {
            label: 'opcion 1',
            key: '1',
        },
        {
            label: 'opcion 2',
            key: '2',
        },
        {
            label: 'opcion 3',
            key: '3',
        }
    ];

    constructor(
        private pacienteService: PacienteService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    historial = [
        {
            fecha: '05/03/2020',
            prestacion: 'Exámen médico del adulto',
            estado: 'validada',
        },
        {
            fecha: '23/01/2019',
            prestacion: 'Exámen médico del adulto',
            estado: 'validada',
        },
        {
            fecha: '11/07/2018',
            prestacion: 'Exámen médico del adulto',
            estado: 'validada',
        },
        {
            fecha: '07/11/2017',
            prestacion: 'Exámen médico del adulto',
            estado: 'validada',
        },
        {
            fecha: '21/05/2017',
            prestacion: 'Exámen médico del adulto',
            estado: 'validada',
        },
    ];

    ngOnInit() {

        this.paciente$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.pacienteService.getPaciente(params.get('id')))
        );
    }

    gotoPacientes(paciente: Paciente) {
        const pacienteId = paciente ? paciente.id : null;
        this.router.navigate(['/listado-sidebar', { id: pacienteId, foo: 'foo' }]);
    }


}

