import { Component, OnInit } from '@angular/core';
import { Plex } from '../../../../../lib/core/service';

@Component({
    selector: 'plex-filters',
    templateUrl: './plex-filters.component.html',
})
export class PlexFiltersComponent implements OnInit {

    public tModel: any;
    public opciones: any[];
    public modelo1 = { select: null };
    public modelo2 = {
        select: null,
        soloLectura: false,
        selectMultiple: null
    };
    public prueba = '';
    public templateModel2: any;

    constructor(
        private plex: Plex,
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
            nombre: 'Chile',
            continente: 'Latinoamerica',
        }];

        this.modelo1.select = this.modelo2.select = this.opciones[1];

        // plex-text
        this.templateModel2 = { nombre: null, min: 10, max: 15 };
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

    desplegado = false;

    desplegarInputs() {
        this.desplegado = !this.desplegado;
    }
}
