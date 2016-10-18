import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { PlexValidator } from '../../../lib/core/validator.service'

@Component({
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
        
    }

    onClick(){
        alert('Clic ok!')
    }
}
