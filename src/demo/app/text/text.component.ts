import { Component, OnInit } from '@angular/core';

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
}
