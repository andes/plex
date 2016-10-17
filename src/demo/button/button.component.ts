import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PlexValidator } from '../../lib/core/validator.service'

@Component({
    moduleId: module.id,
    templateUrl: 'button.html',
})
export class ButtonDemoComponent {
    private form1: FormGroup;
    private form2: FormGroup;
    public model1: any;
    public model2: any;
    public tModel: any;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        // Tepmlate-Form1 model
        //this.tModel = { valor: null };

        // Form1: Sin validador
        //this.model1 = { valor: null };
        this.form1 = this.formBuilder.group({
          //  valor: [''],
        });
        this.form1.valueChanges.subscribe((value) => {
           // this.model1 = value;
        })

    }
}
