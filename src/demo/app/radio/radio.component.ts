import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'radio.html',
})
export class RadioDemoComponent implements OnInit {
    public modelo = {
        // radio: 2
    };
    public opciones = [
        { id: 1, label: 'Rojo' },
        { id: 2, label: 'Verde' }
    ]
    constructor() { }

    ngOnInit() {
    }

    borrar() {
        this.modelo = {};
    }
}
