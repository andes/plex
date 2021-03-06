import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { Plex } from '../../../lib/core/service';
import { TemplateData } from './template-data.interface';

@Component({
    templateUrl: 'template-visualizacion.html'
})
export class TemplateVisualizacionComponent implements OnInit {
    // Propiedades privadas
    // ...

    // Propiedades públicas
    modelo: TemplateData;

    // Constructor
    constructor(private plex: Plex) {
        this.plex.updateTitle([{
            route: '/',
            name: 'MÓDULO'
        }, {
            name: 'Visualización'
        }]);
    }

    // Métodos
    ngOnInit() {
        this.modelo = {
            apellido: 'García',
            nombre: 'Josefina',
            sexo: 'femenino',
            fechaNacimiento: new Date(),
            tieneHijos: false
        };
    }
}
