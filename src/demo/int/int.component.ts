import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PlexValidator } from '../../lib/core/validator.service'

@Component({
    moduleId: module.id,
    templateUrl: 'int.html',
})
export class IntDemoComponent {
    private form1: FormGroup;
    private form2: FormGroup;
    public model1: any;
    public model2: any;
    public tModel: any;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        // Tepmlate-Form1 model
        this.tModel = { valor: null };

        // Form1: Sin validador
        this.model1 = { valor: null };
        this.form1 = this.formBuilder.group({
            valor: [''],
        });
        this.form1.valueChanges.subscribe((value) => {
            this.model1 = value;
        })

        // Form2: Validación múltiple
        this.model2 = { valor: null };
        this.form2 = this.formBuilder.group({
            valor: ['', [Validators.required, PlexValidator.min(3), PlexValidator.max(10)]],
        });
        this.form2.valueChanges.subscribe((value) => {
            this.model2 = value;
        })
    }
}
