import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AgendaService } from './../../../service/agenda.service';
import { Agenda } from './../../../service/agenda';

@Component({
    selector: 'plex-detalle-agenda',
    templateUrl: './detalle-agenda.component.html',
})
export class DetalleAgendaComponent implements OnInit {

    public listadoAgenda: Agenda[];
    agenda$: Observable<Agenda>;

    public options = [
        {
            label: 'turnos vigentes',
            key: '1'
        },
        {
            label: 'historial de turnos',
            key: '2'
        },
    ];


    constructor(
        private agendaService: AgendaService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {

        // mostrar detalle agenda
        this.agenda$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.agendaService.getAgenda(params.get('id')))
        );
    }

    gotoAgendas(agenda: Agenda) {
        const agendaId = agenda ? agenda.id : null;
        this.router.navigate(['/punto-inicio-sidebar', { id: agendaId }]);
    }
}
