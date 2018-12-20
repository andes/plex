import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { Plex } from '../../../lib/core/service';
import { TemplateData } from './template-data.interface';

@Component({
    templateUrl: 'template-form.html'
})
export class TemplateFormComponent implements OnInit {
    // Propiedades privadas
    // ...

    // Propiedades públicas
    modelo: TemplateData;

    // Opciones que se consultan desde la base de datos
    opcionesLugarNacimiento: any[] = [{ id: '1', nombre: 'Neuquén' }, { id: '2', nombre: 'Centenario' }, { id: '3', nombre: 'Zapala City' }, { id: '4', nombre: 'Plottier' }];
    opcionesSexo: any[] = [{ id: 'femenino', label: 'femenino' }, { id: 'masculino', label: 'masculino' }, { id: 'otro', label: 'otro' }];

    // Eventos
    @Output() save: EventEmitter<TemplateData> = new EventEmitter<TemplateData>();

    // Constructor
    constructor(private plex: Plex) {
        this.plex.updateTitle([{
            route: '/',
            name: 'MÓDULO'
        }, {
            name: 'Nuevo registro'
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

    /**
     * Guarda los datos del formulario y emite el dato guardado
     *
     * @param {any} $event formulario a validar
     */
    guardar($event) {
        if ($event.formValid) {
            // ...
            this.plex.info('success', 'Los datos están correctos');
            this.save.emit(this.modelo);
        } else {
            this.plex.info('warning', 'Completar datos requeridos');
        }
    }
}
