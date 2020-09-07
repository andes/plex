import { Component, OnInit, HostBinding } from '@angular/core';
import { SelectEvent } from './../../../lib/select/select-event.interface';
import { ServiceDemoSelect } from './select.service';

@Component({
    templateUrl: 'select.html',
})
export class SelectDemoComponent implements OnInit {
    // Permite el uso de flex-box en el componente
    @HostBinding('class.plex-layout') layout = true;

    public opciones: any[];
    public modelo1 = { select: null };
    public modelo2 = {
        select: null,
        soloLectura: false,
        selectMultiple: null
    };


    constructor(
        public servicio: ServiceDemoSelect
    ) {
    }

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
    }

    loadData(event: SelectEvent) {
        if (event.query) {
            this.servicio.get(event.query).subscribe(event.callback);
        } else {
            event.callback(null);
        }
    }

    cambiarOpciones() {
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
