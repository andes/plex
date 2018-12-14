import { Component, OnInit, HostBinding } from '@angular/core';
import { SelectEvent } from './../../../lib/select/select-event.interface';

// Importo un servicio de prueba
import { ServiceDemoSelect } from './select.service';
import { Unsubscribe } from '../../../../index';


@Component({
    templateUrl: 'select.html',
})
export class SelectDemoComponent implements OnInit {
    // Permite el uso de flex-box en el componente
    @HostBinding('class.plex-layout') layout = true;

    public opciones: any[];
    public modelo1 = { select: null };
    public rModelo1 = { select: null };
    public modelo2 = { select: null, soloLectura: false, selectMultiple: null };
    public modelo3 = { select: null };
    public modelo4 = { select: null };

    constructor(public servicio: ServiceDemoSelect) { }

    ngOnInit() {
        // Opciones
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
        this.rModelo1.select = this.opciones[2];

        setTimeout(() => {
            this.modelo2.select = {
                _id: '5821da5ab6f2bac35980c464',
                nombre: 'Arabia Saudita',
                id: '5821da5ab6f2bac35980c464'
            };

        }, 10000);

        /**
         * Ejemplo de unsubscribe decorator.
         * Los dos primeros loadData se cancelan inmediatamente
         */
        this.loadData({ query: 'a' });
        this.loadData({ query: 'a' });
        this.loadData({ query: 'a' });
        this.loadData2({ query: 'b' });
        this.loadData2({ query: 'b' });

    }

    @Unsubscribe()
    loadData(event: SelectEvent) {
        // Event tiene una propiedad 'query' que contiene el texto que el usuario ha escrito en el input.
        // Esto permite enviar a las APIs un parámetro para hacer las búsquedas más eficientes
        if (event.query) {
            return this.servicio.get(event.query).subscribe(event.callback);
        } else {
            event.callback(null);
        }
    }

    @Unsubscribe()
    loadData2(event: SelectEvent) {
        // Event tiene una propiedad 'query' que contiene el texto que el usuario ha escrito en el input.
        // Esto permite enviar a las APIs un parámetro para hacer las búsquedas más eficientes
        if (event.query) {
            return this.servicio.get(event.query).subscribe(event.callback);
        } else {
            event.callback(null);
        }
    }

    cambiarOpciones() {
        // this.modelo1.select = null;
        this.opciones = [{
            id: 2,
            nombre: 'México',
            continente: 'Norteamérica',
        },
        {
            id: 3,
            nombre: 'Francia',
            continente: 'Europa',
        }];
    }
}
