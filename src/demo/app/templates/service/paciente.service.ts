import { Injectable } from '@angular/core';
import { Paciente } from './paciente';
import { PACIENTES } from './mock-pacientes';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class PacienteService {

    constructor() {
    }

    getPacientes(): Observable<Paciente[]> {
        return of(PACIENTES);
    }

    getPaciente(id: number | string) {
        return this.getPacientes().pipe(
            map((pacientes: Paciente[]) => pacientes.find(paciente => paciente.id === +id))
        );
    }

}
