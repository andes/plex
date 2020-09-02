import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

// Servicios y modelo
import { AgendaService } from '../service/agenda.service';
import { Agenda } from '../service/agenda';
import { PacienteService } from '../service/paciente.service';
import { Paciente } from '../service/paciente';
import { Plex } from './../../../../lib/core/service';
import { EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'plex-punto-inicio',
    templateUrl: './punto-inicio.component.html',
    styleUrls: ['./punto-inicio.component.scss']
})
export class PuntoInicioComponent implements OnInit {

    sidebarValue = 10;
    @Output() eventoSidebar = new EventEmitter<number>();


    recibirSidebar($event) {
        this.sidebarValue = $event;
        console.log(this.sidebarValue);
    }

    contraerSidebar() {
        this.eventoSidebar.emit(this.sidebarValue);
        this.sidebarValue = 10;
    }

    cards = [
        {
            titulo: 'Agendas y turnos', subtitulo: 'Propias y de otros profesionales', icono: 'star', botones: ['opcion-1', 'opcion-2'], estado: 'pendiente', fecha: '27/11/20'
        },
        {
            titulo: 'Solicitudes', subtitulo: 'Desde organizaciones o ámbitos ', icono: 'account', botones: ['opcion-1', 'opcion-2'], estado: 'pendiente', fecha: '27/11/20'
        },
        {
            titulo: 'Interconsultas', subtitulo: 'Recibidas y realizadas', icono: 'clock', botones: ['opcion-1', 'opcion-2'], estado: 'pendiente', fecha: '27/11/20'
        },
    ];

    constructor(
        private agendaService: AgendaService,
        private pacienteService: PacienteService,
        private route: ActivatedRoute,
        private plex: Plex
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
    }


    public tModel: any;
    public opciones: any[];
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

    // public listadoPaciente: Paciente[];
    pacientes$: Observable<Paciente[]>;
    agendas$: Observable<Agenda[]>;
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

}
