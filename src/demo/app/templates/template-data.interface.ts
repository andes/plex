export interface TemplateData {
    nombre: string;
    apellido: string;
    sexo: string;
    tieneHijos?: boolean;
    fechaNacimiento: Date;
    lugarNacimiento?: {
        id: String,
        nombre: String,
    };
}
