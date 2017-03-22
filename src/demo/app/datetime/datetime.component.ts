import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: 'datetime.html',
})
export class DateTimeDemoComponent implements OnInit {
    public model1: any;
    public model2: any;
    public model3: any;
    public model4: any;
    public tModel: any;

    ngOnInit() {
        // Tepmlate-Form1 model
        this.tModel = {
            fechaHora: null,
            fecha: null,
            hora: null,
            disabled: false,
            min: new Date(1970, 0, 1),
        };

        // Form4: Disabled
        this.model4 = {
            fechaHora: null,
            disabled: true
        };
    }
}
