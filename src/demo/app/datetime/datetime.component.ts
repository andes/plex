import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'datetime.html',
})
export class DateTimeDemoComponent implements OnInit {
    private form1: FormGroup;
    private form2: FormGroup;
    private form3: FormGroup;
    private form4: FormGroup;
    public model1: any;
    public model2: any;
    public model3: any;
    public model4: any;
    public tModel: any;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        // Tepmlate-Form1 model
        this.tModel = {
            fechaHora: null,
            fecha: null,
            hora: null,
            disabled: false
        };

        // Form1: Sin validador
        this.model1 = { fechaHora: null };
        this.form1 = this.formBuilder.group({
            fechaHora: [''],
        });
        this.form1.valueChanges.subscribe((value) => {
            this.model1 = value;
        });

        // Form2: Doble validación
        this.model2 = { fechaHora: null };
        this.form2 = this.formBuilder.group({
            fechaHora: ['', [Validators.required, Validators.minLength(5)]],
        });
        this.form2.valueChanges.subscribe((value) => {
            this.model2 = value;
        });

        // Form3: Con placeholder
        this.model3 = { fechaHora: null };
        this.form3 = this.formBuilder.group({
            fechaHora: [''],
        });
        this.form3.valueChanges.subscribe((value) => {
            this.model3 = value;
        });

        // Form4: Disabled
        this.model4 = {
            fechaHora: null,
            disabled: true
        };
        this.form4 = this.formBuilder.group({
            fechaHora: [''],
        });
        this.form4.valueChanges.subscribe((value) => {
            this.model4 = value;
        });
    }
}
