import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'phone.html',
})
export class PhoneDemoComponent implements OnInit {
    public model1: any;
    public model2: any;
    public tModel: any;

    ngOnInit() {
        this.tModel = { valor: null };
        this.model1 = { valor: null };
        this.model2 = { valor: null };
    }
}
