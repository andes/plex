import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Plex } from '../../../lib/core/service';

import { TemplateData } from './template-data.interface';

@Component({
    templateUrl: 'template.botoneraSidebar.html'
})
export class TemplateBotoneraSidebarComponent implements OnInit {
    // Propiedades privadas

    // Propiedades públicas
    public modelo: TemplateData;

    // Eventos
    @Output() save: EventEmitter<TemplateData> = new EventEmitter<TemplateData>();

    // Constructor
    constructor(private plex: Plex) { }

    // Métodos (privados y públicos)

    ngOnInit() {
        // this.plex.updateTitle([{ name: 'MPI', route: '/' }, { name: 'This module' }]);

        // Dummy load
        this.modelo = {
            apellido: 'García',
            nombre: 'Josefina',
            fechaNacimiento: new Date()
        };
    }

    guardar($event) {
        if ($event.formValid) {
            this.plex.info('success', 'Los datos están correctos');
            this.save.emit(this.modelo);
        } else {
            this.plex.info('warning', 'Completar datos requeridos');
        }
    }



}
