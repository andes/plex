import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'float.html',
})
export class FloatDemoComponent implements OnInit {
    public tModel: any;

    ngOnInit() {
        // Tepmlate-Form1 model
        this.tModel = { valor: null };
    }
}
