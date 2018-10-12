import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import { Plex } from '../../../lib/core/service';
import { TemplateData } from './template-data.interface';

@Component({
    templateUrl: 'template.form.html'
})
export class TemplateFormComponent implements OnInit {
    // Propiedades privadas

    // Propiedades públicas
    public modelo: TemplateData;

    // Opciones que se consultan desde la base de datos
    public opcionesLugarNacimiento: any[] = [{ id: '1', nombre: 'Neuquén' }, { id: '2', nombre: 'Centenario' }, { id: '3', nombre: 'Zapala City' }, { id: '4', nombre: 'Plottier' }];
    public opcionesSexo: any[] = [{ id: 'femenino', label: 'femenino' }, { id: 'masculino', label: 'masculino' }, { id: 'otro', label: 'otro' }];

    // Eventos
    @Output() save: EventEmitter<TemplateData> = new EventEmitter<TemplateData>();

    // Constructor
    constructor(private plex: Plex) {
        this.plex.updateTitle([{
            route: '/',
            name: 'MÓDULO'
        }, {
            name: 'CARGA'
        }]);
    }

    // Métodos (privados y públicos)

    ngOnInit() {
        this.plex.updateTitle([{
            route: '/',
            name: 'MÓDULO'
        }, {
            name: 'Carga'
        }]);

        // Dummy load
        this.modelo = {
            apellido: 'García',
            nombre: 'Josefina',
            sexo: 'femenino',
            fechaNacimiento: new Date(),
            tieneHijos: false
        };
    }

    /**
     * Guardar los datos del formulario y emitir el dato guardado
     *
     * @param {any} $event formulario a validar
     * @memberof TemplateFormComponent
     */
    guardar($event) {
        if ($event.formValid) {
            // El dato sexo, como se está mostrando en un radio, tiene formato de objeto. Los correcto es que en la
            // base de datos los guardemos como un string
            this.modelo.sexo = ((typeof this.modelo.sexo === 'string')) ? this.modelo.sexo : (Object(this.modelo.sexo).id);
            this.plex.info('success', 'Los datos están correctos');
            // cuando desea retornar el modelo a otro componente
            this.save.emit(this.modelo);
        } else {
            this.plex.info('warning', 'Completar datos requeridos');
        }
    }
}
