import { Component, Input } from '@angular/core';
import { PacienteService } from '../templates/service/paciente.service';

@Component({
    templateUrl: 'table.html',
})

export class TableDemoComponent {

    // Permite :hover y click()
    @Input() selectable = true;

    // Muestra efecto de selección
    @Input() selected = false;

    public sortBy: string;
    public sortOrder = 'desc';
    botonera = true;

    public columns = [
        {
            key: true,
            label: 'columna 1',
        },
        {
            key: true,
            label: 'columna 2',
        },
        {
            key: true,
            label: 'columna 3',
        },
        {
            key: true,
            label: 'columna 4',
        },
        {
            key: true,
            label: 'columna 5',
        }
    ];

    public datos = [
        { label: 'edad', valor: '41 años', type: 'success' },
        { label: 'documento', valor: '29.879.253', type: 'info' },
        { label: 'sexo', valor: 'Masculino', type: 'default' },
        { label: 'género', valor: 'Hospital Provincial de Neuquen Castro Rendon', type: 'warning' },
        { label: 'fecha de nacimiento', valor: '14 de Julio de 1953', type: 'success' },
        { label: 'CUIL', valor: '20-16879253-5', type: 'warning' },
        { label: 'Nota', valor: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis. Lorem ipsum sonnet.', type: 'warning' },
        { label: 'Comience buscando un paciente en la barra superior', valor: 'Ingrese al menos tres caracteres. Si la búsqueda no arroja el resultado esperado, presione el botón "Paciente Nuevo"', type: 'warning' }
    ];

    constructor(
        public pacienteService: PacienteService,
    ) { }


    toggleColumns() {
        //this.pacienteService.columnsMapa.next(this.columns);
    }

    sortTable(event: string) {
        if (this.sortBy === event) {
            this.sortOrder = (this.sortOrder === 'asc') ? 'desc' : 'asc';
            this.pacienteService.sortOrder.next(this.sortOrder);
        } else {
            this.sortBy = event;
            this.pacienteService.sortBy.next(event);
            this.pacienteService.sortOrder.next('desc');
        }
    }
}
