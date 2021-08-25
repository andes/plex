import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './template-inicio.html',
})

export class TemplateInicioComponent implements OnInit {


    templates = [
        {
            titulo: 'Template listado-detalle',
            subtitulo: 'Visualización de datos',
            mode: 'filled',
            type: 'dark',
            url: 'listado-sidebar',
            icon: 'view-quilt',
            selected: false,
        },
        {
            titulo: 'Template ABM',
            subtitulo: 'Carga, eliminación y modificación de datos',
            mode: 'filled',
            type: 'dark',
            url: 'mpi-alta',
            icon: 'view-grid',
            selected: false,
        },
        {
            titulo: 'Template accordions',
            subtitulo: 'Agrupamiento de información en acordiones',
            mode: 'filled',
            type: 'dark',
            url: 'internacion',
            icon: 'view-day',
            selected: false,
        },
        {
            titulo: 'Template puntos de inicio',
            subtitulo: 'Agrupamiento de información en acordiones',
            mode: 'filled',
            type: 'dark',
            url: 'punto-inicio',
            icon: 'adjust',
            selected: false,
        },
    ];

    constructor(private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
    }

    irTemplate(url) {
        this.router.navigate(['templates', url]);
    }
}
