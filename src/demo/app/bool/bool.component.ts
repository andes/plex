import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'bool.html',
})
export class BoolDemoComponent implements OnInit {
    public modelo: any;
    constructor() { }

    ngOnInit() {
        this.modelo = { checkbox: false, slide: false, getType: () => { return this.modelo.slide ? 'info' : 'default'; } };
    }
}
