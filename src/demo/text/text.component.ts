import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'text.html',
})
export class TextDemoComponent {
    private form1: FormGroup;
    private form2: FormGroup;
    public model1: any;
    public model2: any;
    public tModel: any;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        // Tepmlate-Form1 model
        this.tModel = { nombre: null };

        // Form1: Sin validador
        this.model1 = { nombre: null };
        this.form1 = this.formBuilder.group({
            nombre: [''],
        });
        this.form1.valueChanges.subscribe((value) => {
            this.model1 = value;
        })

        // Form2: Doble validación
        this.model2 = { nombre: null };
        this.form2 = this.formBuilder.group({
            nombre: ['', [Validators.required, Validators.minLength(5)]],
        });
        this.form2.valueChanges.subscribe((value) => {
            this.model2 = value;
        })
    }
}
