import { Component, OnInit } from '@angular/core';

// Importo un servicio de prueba
import { ServiceDemoSelect } from './select.service';

@Component({
    templateUrl: 'select.html',
})
export class SelectDemoComponent implements OnInit {
    public opciones: any[];
    public modelo1 = { select: null };
    public rModelo1 = { select: null };
    public modelo2 = { select: null };
    public modelo3 = { select: null };
    public modelo4 = { select: null };

    constructor(public servicio: ServiceDemoSelect) { }

    ngOnInit() {
        // Opciones
        this.opciones = [{
            id: 1,
            nombre: 'Argentina',
            continente: 'Latinoamerica',
        }, {
            id: 2,
            nombre: 'México',
            continente: 'Norteamérica',
        },
        {
            id: 3,
            nombre: 'Francia',
            continente: 'Europa',
        }];

        this.modelo1.select = this.opciones[1];
        this.rModelo1.select = this.opciones[2];
    }

    loadData(event) {
        // Event tiene una propiedad 'query' que contiene el texto que el usuario ha escrito en el input.
        // Esto permite enviar a las APIs un parámetro para hacer las búsquedas más eficientes
        this.servicio.get(event.query).subscribe(event.callback);
    }

    agregarPais() {
        this.opciones.push({
            id: 999,
            nombre: 'Etiopa',
            continente: 'Africa',
        });
    }
}
