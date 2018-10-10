export interface TemplateData {
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    lugarNacimiento?: {
        id: String,
        nombre: String,
    };
}
