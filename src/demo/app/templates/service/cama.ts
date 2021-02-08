import { Paciente } from './paciente';

export class Cama {
    id: number;
    nombre: string;
    tipo: string;
    sector: string;
    organizacion: string;
    estado: string;
    equipamiento: [
        {
            respirador: boolean;
            oxigeno: boolean;
            monitor: boolean;
        }
    ];
    paciente: Paciente;
    especialidad: string;
    nota: string;
}
