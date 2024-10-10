import { Component, OnInit } from '@angular/core';
import { Plex } from '../../../lib/core/service';
import { PlexTextToolBar } from '../../../lib/text/text.component';

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

    public qlToolbar: PlexTextToolBar[] = [{
        name: 'fullscreen',
        handler: () => {
            this.fullscreen();
        }
    }];

    public customValidation = (value: any) => {
        return value && (value > 10 && value < 25);
    }

    constructor(private plex: Plex) { }

    onFocus() {
        this.templateModel1.mensaje = 'FOCUSED';
    }

    onFocusout() {
        this.templateModel1.mensaje = 'FOCUS OUT: Debe ingresar su usuario (número de documento)';
    }

    ngOnInit() {
        // Template-Form1 model
        this.templateModel1 = { nombre: null, mensaje: 'Atención: debe ingresar su usuario (número de documento)' };

        // Template-Form2 model
        this.templateModel2 = { nombre: null, min: 10, max: 15 };

        // Form1: Sin validador
        this.model1 = { nombre: null };

        // Form2: Doble validación con min y max
        this.model2 = { nombre: null, min: 10, max: 15 };
    }

    cambio() {

    }

    fullscreen() {
        this.plex.toast('success', 'Fullscreen detected!');
    }

    onChange() {
        this.plex.toast('success', 'Este cartel se demoro un segundo en aparecer después de escribir.', 'Debounce!');
    }
}
