import { Component } from '@angular/core';

@Component({
    templateUrl: './mininav.html'
})
export class MininavDemoComponent {


    menu = [
        {
            nombre: 'accordion',
            icono: 'view-day',
            link: 'accordion'
        },
        {
            nombre: 'card',
            icono: 'card-account-details',
            link: 'card'
        },
        {
            nombre: 'detail',
            icono: 'account',
            link: 'detail'
        },
        {
            nombre: 'templates',
            icono: 'view-grid',
            link: 'templates'
        },
        {
            nombre: 'wrapper',
            icono: 'view-quilt',
            link: 'wrapper'
        },
        {
            nombre: 'grid',
            icono: 'view-grid',
            link: 'grid'
        },
        {
            nombre: 'slider',
            icono: 'interaccion',
            link: 'slider'
        },
    ];

    anchors = [
        {
            nombre: 'mi huds',
            icono: 'paciente',
            target: 'miHuds'
        },
        {
            nombre: 'mis consultas',
            icono: 'medico',
            target: 'misConsultas'
        },
        {
            nombre: 'mis documentos',
            icono: 'documento',
            target: 'misDocumentos'
        },
    ];
}
