import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'plex-case-demo',
    templateUrl: './case.component.html',
})
export class CaseDemoComponent implements OnInit {

    contenido = 'este es Un TEXTO de prueba';

    constructor() { }

    ngOnInit(): void { }
}
