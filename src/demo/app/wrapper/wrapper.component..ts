import { Component, OnInit } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: './wrapper.html',
})
export class WrapperDemoComponent implements OnInit {

    public tModel: any;
    public opciones: any[];
    public modelo1 = { select: null, radio: null };
    public modelo2 = {
        select: null,
        soloLectura: false,
        selectMultiple: null
    };
    public prueba = '';
    public templateModel2: any;
    public modelo: any;

    public opciones2 = [
        { id: 1, label: 'Rojo' },
        { id: 2, label: 'Verde' }
    ];

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


        // Template-Form2 model
        this.templateModel2 = { nombre: null, min: 10, max: 15 };

        // plex-phone
        // plex-float
        this.tModel = { valor: null };

        // plex-select
        this.opciones = [{
            id: 1,
            nombre: 'Hospital "Dr. Horacio Heller',
            continente: 'Zona metro',
        },
        {
            id: 2,
            nombre: 'Hospital Bouquet Roldán',
            continente: 'Zona metro',
        },
        {
            id: 3,
            nombre: 'Hospital San Martín de los Andes "Dr. Ramón Carrillo"',
            continente: 'Zona tres',
        },
        {
            id: 4,
            nombre: 'Hospital Centenario',
            continente: 'Zona metro',
        },
        {
            id: 5,
            nombre: 'Hospital Provincial Neuquen "Dr. Eduardo Castro Rendón"',
            continente: 'Zona metro',
        }
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

    get cssColumns() {
        return this.columns === 'auto' ? 'col-auto' : 'col-span';
    }
}
