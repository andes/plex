import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
    templateUrl: 'bool.html',
})
export class BoolDemoComponent {
    private form1: FormGroup;
    private form2: FormGroup;
    private form3: FormGroup;
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
        })       
    }
}
