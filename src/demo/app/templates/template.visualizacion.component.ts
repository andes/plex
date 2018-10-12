import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { Plex } from '../../../lib/core/service';
import { TemplateData } from './template-data.interface';

@Component({
    templateUrl: 'template.visualizacion.html'
})
export class TemplateVisualizacionComponent implements OnInit {
    // Propiedades privadas

    // Propiedades públicas
    public modelo: TemplateData;

    //
    public opcionesLugarNacimiento: any[] = [{ id: '1', nombre: 'Neuquén' }, { id: '2', nombre: 'Centenario' }, { id: '3', nombre: '' }, { id: '4', nombre: 'Plottier' }];
    public opcionesSexo: any[] = [{ id: 'femenino', label: 'femenino' }, { id: 'masculino', label: 'masculino' }, { id: 'otro', label: 'otro' }];
    // Eventos
    @Output() save: EventEmitter<TemplateData> = new EventEmitter<TemplateData>();

    // Constructor
    constructor(private plex: Plex) { }

    // Métodos (privados y públicos)

    ngOnInit() {
        // Dummy load
        this.modelo = {
            apellido: 'García',
            nombre: 'Josefina',
            sexo: 'femenino',
            fechaNacimiento: new Date(),
            tieneHijos: false
        };
    }
}
