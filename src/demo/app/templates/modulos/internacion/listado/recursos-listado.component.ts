import { Component, OnInit } from '@angular/core';
import { CamaService } from '../../../service/cama.service';
import { Cama } from '../../../service/cama';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'plex-recursos-listado',
    templateUrl: './recursos-listado.component.html',
})
export class RecursosListadoComponent implements OnInit {

    camas$: Observable<Cama[]>;
    cama$: Observable<Cama>;
    selectedId: string;
    items = [];
    items2 = [];

    organizaciones = [
        {
            nombre: 'hospital de día de obstetricia',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
        {
            nombre: 'hospital de día de pediatria',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
        {
            nombre: 'instituto de rehabilitación de arroyito',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
        {
            nombre: 'servicio de alcoholismo y adicciones',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
        {
            nombre: 'servicio de cardiología infantil',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
        {
            nombre: 'servicio de cirugía cardiovascular adultos',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
        {
            nombre: 'servicio de cirugía cardiovascular infantil',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
        {
            nombre: 'servicio de clínica quirúrgica',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
        {
            nombre: 'servicio de cuidados intermedios de adultos',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
        {
            nombre: 'servicio de genética',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
        {
            nombre: 'servicio de ginecología',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
        {
            nombre: 'servicio de neonatología',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
        {
            nombre: 'servicio de neurología',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
        {
            nombre: 'servicio de obstetricia',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
        {
            nombre: 'servicio de oncología',
            espacios: [
                'habitación 1',
                'habitación 2',
                'habitación 3',
                'habitación 4',
                'box-1',
            ],
        },
    ];

    constructor(
        private camaService: CamaService,
        private router: Router,
        private route: ActivatedRoute,
    ) {

    }
    ngOnInit() {
        this.camas$ = this.camaService.getCamas();

        this.cama$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.camaService.getCama(params.get('id')))
        );

        this.items = [
            { label: 'Censo diario' },
            { label: 'Censo mensual' },
        ];

        this.items2 = [
            { label: 'hoy a las 00:00' },
            { label: 'hoy a las 12:00' },
            { label: 'hoy a las 23:59' },
        ];

    }

    selected(cama) {
        this.selectedId = cama.id;
        this.router.navigate(['templates', 'internacion', this.selectedId]);
    }
}
