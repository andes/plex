import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../../../service/paciente.service';
import { Paciente } from '../../../../../service/paciente';
import { Observable } from 'rxjs';

@Component({
    selector: 'plex-datos-relaciones',
    templateUrl: './datos-relaciones.component.html',
})

export class DatosRelacionesComponent implements OnInit {

    pacientes$: Observable<Paciente[]>;
    selectedId: string;
    public modelo1 = { select: null };
    public templateModel2: any;
    public opciones6 = [];
    nuevaRelacion = false;

    constructor(
        private pacienteService: PacienteService,

    ) { }

    ngOnInit() {
        this.pacientes$ = this.pacienteService.getPacientes();

        // relaciones
        this.opciones6 = [{
            id: 1,
            nombre: 'Abuelo/a',
        },
                          {
                              id: 2,
                              nombre: 'Hermano/a',
                          },
                          {
                              id: 3,
                              nombre: 'Hijo/a"',
                          },
                          {
                              id: 4,
                              nombre: 'Nieto/a"',
                          },
                          {
                              id: 5,
                              nombre: 'Otro"',
                          },
                          {
                              id: 6,
                              nombre: 'Progenito/a"',
                          },
                          {
                              id: 7,
                              nombre: 'Tutor/a"',
                          }
        ];

        // plex-text
        this.templateModel2 = { nombre: null, min: 8, max: 8 };
    }

    agregarRelacion() {
        this.nuevaRelacion = !this.nuevaRelacion;
    }
}
