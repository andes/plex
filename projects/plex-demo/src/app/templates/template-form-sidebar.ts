import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Plex } from '@andes/plex';
import { TemplateData } from './template-data.interface';


@Component({
    templateUrl: 'template-form-sidebar.html'
})
export class TemplateBotoneraSidebarComponent implements OnInit {
    // Propiedades privadas

    // Propiedades públicas
    public modelo: TemplateData;
    public opcionesLugarNacimiento: any[] = [{ id: '1', nombre: 'Neuquén' }, { id: '2', nombre: 'Centenario' }, { id: '3', nombre: 'Zapala City' }, { id: '4', nombre: 'Plottier' }];
    public opcionesSexo: any[] = [{ id: 'femenino', label: 'femenino' }, { id: 'masculino', label: 'masculino' }, { id: 'otro', label: 'otro' }];

    // Eventos
    @Output() save: EventEmitter<TemplateData> = new EventEmitter<TemplateData>();

    // Constructor
    constructor(private plex: Plex) { }

    // Métodos
    ngOnInit() {
        this.modelo = {
            apellido: 'García',
            nombre: 'Josefina',
            sexo: 'femenino',
            fechaNacimiento: new Date()
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
