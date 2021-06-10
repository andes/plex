import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventEmitter, Output } from '@angular/core';

// Servicios y modelo
import { Plex } from './../../../../../../lib/core/service';
import { Solicitud } from '../../../service/solicitud';
import { SolicitudService } from '../../../service/solicitud.service';

@Component({
    selector: 'plex-teleprestaciones',
    templateUrl: './punto-inicio-teleprestaciones.html',
})

export class TeleprestacionesComponent implements OnInit {

    sidebarValue = 9;
    @Output() eventoSidebar = new EventEmitter<number>();

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

    solicitudes$: Observable<Solicitud[]>;
    foco = 'main';
    public prueba = '';
    public cambio = '';

    constructor(
        private solicitudService: SolicitudService,
        private plex: Plex,
    ) { }

    ngOnInit() {
        this.solicitudes$ = this.solicitudService.getSolicitudes();
        this.plex.navbarVisible = false;

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

    updateMaxHora() {
        this.tModel.minHora = moment().add(30, 'minutes').add(1, 'days');
    }

    horaPlus() {
        return moment(this.tModel.hora).add(30, 'minutes');
    }

    onChange() {
        this.plex.info('success', 'Este cartel se demoro un segundo en aparecer después de escribir.');
    }

    recibirSidebar($event) {
        this.sidebarValue = $event;
    }

    contraerSidebar() {
        this.eventoSidebar.emit(this.sidebarValue);
        this.sidebarValue = 10;
    }
}
