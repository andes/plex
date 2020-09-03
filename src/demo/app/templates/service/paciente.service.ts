import { Injectable } from '@angular/core';
import { Paciente } from './paciente';
import { PACIENTES } from './mock-pacientes';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class PacienteService {


    private valorInicial = new BehaviorSubject<number>(4);
    valorActual = this.valorInicial.asObservable();

    constructor() {
    }

    cambiaValor(valor: number) {
        this.valorInicial.next(valor);
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
