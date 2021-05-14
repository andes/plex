import { Plex } from './../../../lib/core/service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'int.html',
})
export class IntDemoComponent implements OnInit {
    public model1: any;
    public model2: any;
    public tModel: any;

    constructor(private plex: Plex) { }

    ngOnInit() {

        this.plex.updateTitle('Plex Int: Elemento de formulario para números enteros');

        // Tepmlate-Form1 model
        this.tModel = { valor: null };
        this.model1 = { valor: null };
        this.model2 = { valor: null };
    }
}
