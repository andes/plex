import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'int.html',
})
export class IntDemoComponent implements OnInit {
    public model1: any;
    public model2: any;
    public tModel: any;

    ngOnInit() {
        // Tepmlate-Form1 model
        this.tModel = { valor: null };
        this.model1 = { valor: null };
        this.model2 = { valor: null };
    }
}
