import { Paciente } from './paciente';

export class Solicitud {
    id: Number;
    fecha: string;
    servicio: string;
    unidadOrganizativa: string;
    organizacion: string;
    organizacionId: number;
    paciente: Paciente;
    profesional: string;
    prestacion: String;
    organizacionOrigen: string;
    profesionalOrigen: string;
    prestacionOrigen: String;
    estado: String;
    registros: Boolean;
}
