import { Component, OnInit } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: 'text.html',
})
export class TextDemoComponent implements OnInit {
    public model1: any;
    public model2: any;
    public model3: any;
    public templateModel1: any;
    public templateModel2: any;
    public richText = {
        contenido: '<p>Hello <strong>World</strong></p>'
    };
    public prueba = '';

    constructor(private plex: Plex) { }

    onFocus() {
        this.templateModel1.usuario = 'FOCUSED';
    }

    onFocusout() {
        this.templateModel1.usuario = '';
    }

    ngOnInit() {
        // Template-Form1 model
        this.templateModel1 = { nombre: null };

        // Template-Form2 model
        this.templateModel2 = { nombre: null, min: 10, max: 15 };

        // Form1: Sin validador
        this.model1 = { nombre: null };

        // Form2: Doble validación con min y max
        this.model2 = { nombre: null, min: 10, max: 15 };
    }

    cambio() {

    }

    onChange() {
        this.plex.toast('success', 'Este cartel se demoro un segundo en aparecer después de escribir.', 'Debounce!');
    }
}
