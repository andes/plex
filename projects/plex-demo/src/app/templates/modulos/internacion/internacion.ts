import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { Paciente } from '../../service/paciente';
@Component({
    templateUrl: 'internacion.html',
    styleUrls: ['internacion.scss'],
})

export class InternacionComponent implements OnInit {

    public tModel: any;
    public opciones: any[];
    public opciones1: any[];
    public opciones2: any[];
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
    items = [];
    public prueba = '';
    public cambio = '';
    constructor(
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
            nombre: 'Quirófano 1',
            continente: '',
        },
                         {
                             id: 2,
                             nombre: 'Quirófano 2',
                             continente: '',
                         },
                         {
                             id: 3,
                             nombre: 'Quirófano 3',
                             continente: '',
                         }];

        this.opciones1 = [{
            id: 1,
            nombre: 'cuna',
            continente: '',
        },
                          {
                              id: 2,
                              nombre: 'cama eléctrica',
                              continente: '',
                          },
                          {
                              id: 3,
                              nombre: 'cama estándar',
                              continente: '',
                          },
                          {
                              id: 4,
                              nombre: 'cama terapéutica',
                              continente: '',
                          },
                          {
                              id: 5,
                              nombre: 'cama pediátrica',
                              continente: '',
                          },
        ];

        this.opciones2 = [{
            id: 1,
            nombre: 'Disponible',
            continente: '',
        },
                          {
                              id: 2,
                              nombre: 'Ocupada',
                              continente: '',
                          },
        ];

        this.items = [
            { label: 'Censo diario' },
            { label: 'Censo mensual' },
        ];

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
