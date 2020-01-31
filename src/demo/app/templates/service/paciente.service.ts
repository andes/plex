import { Injectable } from '@angular/core';
import { Paciente } from './paciente';
import { PACIENTES } from './mock-pacientes';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class PacienteService {

    // getPacientes(): Observable<Paciente[]> {
    //   return of(PACIENTES);
    // }


    pacientes: any[] = [
        {
            id: 321453221,
            documento: '36307632',
            cuil: '20-36307632-5',
            activo: true,
            estado: 'temporal',
            nombre: 'Fernanda Agustina',
            apellido: 'Sastre Maranelli',
            nombreCompleto: 'Fernanda Agustina Sastre Maranelli',
            alias: '',
            contacto: 2993420134,
            sexo: undefined,
            genero: undefined,
            fechaNacimiento: '20/09/1992',
            tipoIdentificacion: '',
            numeroIdentificacion: '',
            edad: 27,
            edadReal: 'null',
            fechaFallecimiento: null,
            domicilio: 'Avenida San Juan 798',
            estadoCivil: undefined,
            foto: 'https://library.kissclipart.com/20180901/krw/kissclipart-user-thumbnail-clipart-user-lorem-ipsum-is-simply-bfcb758bf53bea22.jpg',
            relaciones: 'null',
            financiador: 'ISSN',
            identificadores: 'null',
            claveBlocking: 'null',
            entidadesValidadoras: 'ISSN',
            scan: 'null',
            reportarError: false,
            notaError: '',
        },
        {
            id: 53290854,
            documento: '12532632',
            cuil: '20-12532632-5',
            activo: true,
            estado: 'temporal',
            nombre: 'Pedro Ernesto',
            apellido: 'Martinez Valenzuela',
            nombreCompleto: '',
            alias: '',
            contacto: 2993420134,
            sexo: undefined,
            genero: undefined,
            fechaNacimiento: '20/09/1957',
            tipoIdentificacion: '',
            numeroIdentificacion: '',
            edad: 63,
            edadReal: 'null',
            fechaFallecimiento: null,
            domicilio: 'Avenida San Juan 798',
            estadoCivil: undefined,
            foto: 'https://library.kissclipart.com/20180901/krw/kissclipart-user-thumbnail-clipart-user-lorem-ipsum-is-simply-bfcb758bf53bea22.jpg',
            relaciones: 'null',
            financiador: 'ISSN',
            identificadores: 'null',
            claveBlocking: 'null',
            entidadesValidadoras: 'ISSN',
            scan: 'null',
            reportarError: false,
            notaError: '',
        }
    ];


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
