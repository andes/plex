import {
    Component
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormArray,
    Validators
} from '@angular/forms';

@Component({
    templateUrl: 'select.html',
})
export class SelectDemoComponent {
    
    public selectableItems: any[];
    public selectedItem: any;
    
    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {

        this.selectableItems = [{
            nombre: 'valor del primer item',
            valor: 1
        }, {
            nombre: 'valor del segundo item',
            valor: 2
        },
        {
            nombre: 'valor del tercer item',
            valor: 3
        }];

        //Inicializo el modelo en null la primera vez
        this.selectedItem = "";
            
    }

}