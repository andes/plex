import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'detail.html',
})


export class DetailDemoComponent {
    contacto = 'dato de contacto';
    direccion = 'calle y numeracion';
    entidadValidadora = 'RENAPER';

    paciente =
        {
            id: null,
            documento: '',
            cuil: null,
            activo: true,
            estado: 'temporal',
            nombre: 'Fernando Ariel',
            apellido: 'Sastre',
            nombreCompleto: '',
            alias: '',
            contacto: [this.contacto],
            sexo: undefined,
            genero: undefined,
            fechaNacimiento: null, // Fecha Nacimiento
            tipoIdentificacion: '',
            numeroIdentificacion: '',
            edad: null,
            edadReal: null,
            fechaFallecimiento: null,
            direccion: [this.direccion],
            estadoCivil: undefined,
            foto: null,
            relaciones: null,
            financiador: null,
            identificadores: null,
            claveBlocking: null,
            entidadesValidadoras: [this.entidadValidadora],
            scan: null,
            reportarError: false,
            notaError: ''
        }

}
