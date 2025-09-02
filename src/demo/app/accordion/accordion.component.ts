import { Component, OnInit } from '@angular/core';
import { SelectEvent } from './../../../lib/select/select-event.interface';
import { ServiceDemoSelect } from './../../app/select/select.service';

@Component({
    templateUrl: 'accordion.html',
})
export class AccordionDemoComponent implements OnInit {
    public test = false;
    public opciones: any[];
    public modelo1 = { select: null };
    public modelo2 = {
        select: null,
        soloLectura: false,
        selectMultiple: null,
        disabled: false,
        required: true
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

    toggle(showed) {
    }

    bool(active) {
    }

}
