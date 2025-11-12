import { Component } from '@angular/core';

@Component({
    templateUrl: 'detail.html',
})

export class DetailDemoComponent {
    contacto = 'dato de contacto';
    direccion = 'calle y numeracion';
    entidadValidadora = 'RENAPER';
    foto = true;
    icon = false;


    icono = {
        caracter: 'pencil',
        color: 'info',
    };

    paciente =
    {
        id: 'ìd00321453221',
        documento: '36307632',
        cuil: '20-36307632-5',
        activo: true,
        estado: 'temporal',
        nombre: 'Fernanda Agustina',
        apellido: 'Sastre Maranelli',
        nombreCompleto: 'Fernanda Agustina Sastre Maranelli',
        alias: '',
        contacto: [this.contacto],
        sexo: undefined,
        genero: undefined,
        fechaNacimiento: '20/09/1992', // Fecha Nacimiento
        tipoIdentificacion: '',
        numeroIdentificacion: '',
        edad: 27,
        edadReal: null,
        fechaFallecimiento: null,
        direccion: [this.direccion],
        estadoCivil: undefined,
        foto: 'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2014/11/new-lead-docs.jpg',
        relaciones: null,
        financiador: 'ISSN',
        identificadores: null,
        claveBlocking: null,
        entidadesValidadoras: [this.entidadValidadora],
        scan: null,
        reportarError: false,
        notaError: ''
    };

    datos = [
        { label: 'edad', valor: '41 años' },
        { label: 'documento', valor: '29.879.253' },
        { label: 'sexo', valor: 'Masculino' },
        { label: 'género', valor: 'Hospital Provincial de Neuquen Castro Rendon' },
        { label: 'fecha de nacimiento', valor: '14 de Julio de 1953' },
        { label: 'CUIL', valor: '20-16879253-5' },
        { label: 'Nota', valor: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis. Lorem ipsum sonnet.' }
    ];

}
