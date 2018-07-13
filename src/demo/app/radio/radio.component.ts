import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'radio.html',
})
export class RadioDemoComponent implements OnInit {
    public modelo: any;
    constructor() { }

    ngOnInit() {
        this.modelo = { radio: null };
    }
}
