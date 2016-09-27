import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'text.html',
})
export class TextDemoComponent {
    private form: FormGroup;    
    public modelo: any;
    constructor(private formBuilder: FormBuilder) { }


    ngOnInit() {
        this.form = this.formBuilder.group({
            nombre: ['', [Validators.required, Validators.minLength(5)]],
        });

        this.form.valueChanges.subscribe((value) => {
            this.modelo = value;
        })
    }
}
