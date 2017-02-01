import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    templateUrl: 'bool.html',
})
export class BoolDemoComponent implements OnInit {
    public form1: FormGroup;
    public model: any;
    public tModel: any;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {

        // Template form
        this.tModel = { activo: true };

        // Reactive form
        this.model = { activo: false };
        this.form1 = this.formBuilder.group({
            activo: [''],
        });
        this.form1.valueChanges.subscribe((value) => {
            this.model = value;
        });
    }
}
