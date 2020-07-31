import { Component, OnInit } from '@angular/core';
import { Plex } from '../../../lib/core/service';


@Component({
    templateUrl: './template-inicio.html',
})
export class TemplateInicioComponent implements OnInit {

    constructor(
        private plex: Plex,
    ) { }

    ngOnInit() {

    }
}