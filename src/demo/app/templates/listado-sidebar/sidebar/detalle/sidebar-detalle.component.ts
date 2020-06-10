import { Component, OnInit, ContentChild } from '@angular/core';
import { PacienteService } from '../../../service/paciente.service';
import { Paciente } from '../../../service/paciente';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PlexOptionsComponent } from '../../../../../../lib/options/options.component';

@Component({
    selector: 'plex-sidebar-detalle',
    templateUrl: './sidebar-detalle.component.html',
})
export class SidebarDetalleComponent implements OnInit {

    @ContentChild(PlexOptionsComponent, { static: true }) plexOptions: PlexOptionsComponent;

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
    public viewOptions = true;
    public selectedOption = '1';

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

    toggleItems() {
        if (this.items.length === 2) {
            this.items.push({ label: 'opcion 3', key: '3' });
        } else {
            this.items = this.items.filter(item => item.key !== '3');
            this.items = [
                { label: 'otras 1', key: '7' },
                { label: 'otas 2', key: '8' },
            ];
        }
    }

    onActiveOption(opcion) {
        this.selectedOption = opcion;
    }
}

