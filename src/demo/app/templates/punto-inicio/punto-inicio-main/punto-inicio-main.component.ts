import { Component, OnInit } from '@angular/core';
import { AgendaService } from './../../service/agenda.service';
import { Agenda } from './../../service/agenda';
import { Plex } from './../../../../../lib/core/service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'plex-punto-inicio-main',
    templateUrl: './punto-inicio-main.component.html',
})
export class PuntoInicioMainComponent implements OnInit {

    sidebarValue = 10;
    filtros = false;
    @Output() eventoSidebar = new EventEmitter<number>();

    agendas$: Observable<Agenda[]>;
    selectedId: string;

    public duracion = '1 hs. 34 min.';
    public plex: Plex;
    public tModel: any;
    public opciones: any[];
    public options: any[];
    public modelo1 = { select: null };
    public modelo2 = {
        select: null,
        soloLectura: false,
        selectMultiple: null
    };
    // public prueba = '';
    public templateModel2: any;
    public modelo: any;

    public showModal = false;

    foco = 'main';
    public prueba = '';
    public cambio = '';

    updateMaxHora() {
        this.tModel.minHora = moment().add(30, 'minutes').add(1, 'days');
    }

    horaPlus() {
        return moment(this.tModel.hora).add(30, 'minutes');
    }

    onChange() {
        this.plex.info('success', 'Este cartel se demoro un segundo en aparecer después de escribir.');
    }


    constructor(
        private agendaService: AgendaService,
        private router: Router,
    ) { }

    ngOnInit() {

        // plex-datetime
        this.tModel = {
            fechaHora: null,
            fecha: null,
            hora: null,
            horados: null,
            disabled: false,
            min: new Date(1970, 0, 1),
            minHora: moment().add(30, 'minutes'),
            maxHora: moment().add(180, 'minutes'),
            fechaDecounce: new Date(1970, 0, 1),
        };

        // plex-phone
        // plex-float
        this.tModel = { valor: null };

        // Radio
        this.options = [
            {
                label: 'todas',
                key: 1,
            },
            {
                label: 'mías',
                key: 2,
            },
        ]

        // plex-select
        this.opciones = [{
            id: 1,
            nombre: 'Consulta de medicina general',
            continente: 'Prestación',
        },
        {
            id: 2,
            nombre: 'Exámen médico del adulto',
            continente: 'Prestación',
        },
        {
            id: 3,
            nombre: 'Consulta de niño sano',
            continente: 'Prestación',
        }];

        this.modelo1.select = this.modelo2.select = this.opciones[1];

        // plex-text
        this.templateModel2 = { nombre: null, min: 10, max: 15 };

        // plex-bool
        this.modelo = { checkbox: false, slide: false };

        this.agendas$ = this.agendaService.getAgendas();
    }

    enviarSidebar() {
        this.eventoSidebar.emit(this.sidebarValue);
        this.sidebarValue = 8;
    }

    selected(agenda) {
        this.selectedId = agenda.id;
        this.router.navigate(['templates', 'punto-inicio', this.selectedId]);
        this.enviarSidebar();
    }

    mostrarFiltros() {
        this.filtros = !this.filtros;
    }
}
