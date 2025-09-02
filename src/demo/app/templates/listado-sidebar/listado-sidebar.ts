import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

// Servicios y modelo
import { PacienteService } from '../service/paciente.service';
import { Paciente } from '../service/paciente';

import { Plex } from './../../../../lib/core/service';

@Component({
    templateUrl: 'listado-sidebar.html',
    styleUrls: ['listado-sidebar.scss'],
})

export class ListadoSidebarComponent implements OnInit {

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
    foco = 'main';
    public prueba = '';
    public cambio = '';
    constructor(
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
            nombre: 'Argentina',
            continente: 'Latinoamerica',
        },
                         {
                             id: 2,
                             nombre: 'Brasil',
                             continente: 'Latinoamerica',
                         },
                         {
                             id: 3,
                             nombre: 'Hospital Provincial Neuquen "Dr. Eduardo Castro Rendón"',
                             continente: 'Latinoamerica',
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

}
