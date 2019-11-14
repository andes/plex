import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Plex } from '../../../lib/core/service';
import { SelectEvent } from './../../../lib/select/select-event.interface';
import { ServiceDemoSelect } from './../select/select.service';

@Component({
    templateUrl: 'template-busqueda.html'
})
export class TemplateBusquedaComponent implements OnInit {
    // Propiedades privadas

    // Propiedades públicas
    listados = [];
    fechaDesde: any;
    fechaHasta: any;
    seleccion: any = [];
    sexoArray: any = [];
    paises: any;
    mostrarMasOpciones = false;
    loader = true;

    // Eventos
    @Output() selected: EventEmitter<any> = new EventEmitter<any>();

    // Constructor
    constructor(private plex: Plex, public servicio: ServiceDemoSelect) {
        this.plex.updateTitle([{
            route: '/',
            name: 'MÓDULO'
        }, {
            name: 'Buscar'
        }]);
        this.listados = [
            {
                id: 1,
                fecha: 'Mon Feb 14 2018 11:15:52 GMT-0300 (ART)',
                apellido: 'Saddi',
                nombre: 'Nahir',
                sexo: 'femenino',
                pais: 'Argentina'
            },
            {
                id: 2,
                fecha: 'Mon Feb 16 2018 11:15:52 GMT-0300 (ART)',
                apellido: 'Roa',
                nombre: 'Silvina',
                sexo: 'femenino'
            },
            {
                id: 3,
                fecha: 'Mon Feb 20 2018 11:15:52 GMT-0300 (ART)',
                apellido: 'Gabriel',
                nombre: 'Juan',
                sexo: 'masculino'
            },
        ];
    }

    // Métodos (privados y públicos)

    ngOnInit() {
        // Por defecto ponemos la fecha de hoy
        this.fechaDesde = moment().startOf('day');
        this.fechaHasta = moment().endOf('day');

        this.sexoArray = [{
            id: 1,
            nombre: 'Femenino'
        },
        {
            id: 2,
            nombre: 'Masculino'
        },
        {
            id: 3,
            nombre: 'Otro'
        }];

        this.cargarListado();

    }

    refreshSelection() {
        this.seleccion = [];
        this.cargarListado();
    }

    cargarPaises(event: SelectEvent) {
        // Event tiene una propiedad 'query' que contiene el texto que el usuario ha escrito en el input.
        // Esto permite enviar a las APIs un parámetro para hacer las búsquedas más eficientes
        if (event.query) {
            this.servicio.get(event.query).subscribe(event.callback);
        } else {
            event.callback(null);
        }
    }

    cargarListado() {
        // Simulamos un tiempo de busqueda
        this.loader = true;
        setTimeout(() => {
            this.loader = false;
            const len = Math.floor(Math.random() * this.listados.length);
            for (let i = 0; i < len; i++) {
                this.seleccion.push(this.listados[i]);
            }
        }, 3000);
    }

    seleccionar(item: any) {
        this.plex.info('success', 'Se seleccionó un item');
        this.selected.emit(item);
    }
}
