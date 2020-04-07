import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'datetime.html',
})
export class DateTimeDemoComponent implements OnInit {
    public model1: any;
    public model2: any;
    public model3: any;
    public model4: any;
    public tModel: any;
    badgeModel: { fecha: any; };

    ngOnInit() {
        // Tepmlate-Form1 model
        this.tModel = {
            fechaHora: null,
            fecha: null,
            hora: null,
            horados: null,
            disabled: false,
            min: new Date(1970, 0, 1),
            minHora: moment().add(30, 'minutes'),
            maxHora: moment().add(180, 'minutes'),
            fechaDecounce: new Date(1970, 0, 1),
        };

        // Form4: Disabled
        this.model4 = {
            fechaHora: null,
            disabled: true
        };

        this.badgeModel = {
            fecha: moment(),
        };
    }

    updateMaxHora() {
        this.tModel.minHora = moment().add(30, 'minutes').add(1, 'days');
    }

    horaPlus() {
        return moment(this.tModel.hora).add(30, 'minutes');
    }

    onBlur() {
    }

    onChange(date) {

    }
}
