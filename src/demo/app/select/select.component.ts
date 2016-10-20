import {
    Component
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormArray,
    Validators
} from '@angular/forms';

//Importo un servicio de prueba
import { 
    ServiceDemoSelect 
} from './serviceDemoSelect';

@Component({
    templateUrl: 'select.html',
})
export class SelectDemoComponent {
    
    public selectableItems: any[];
    public miModelo: any;
    
    
    constructor(private formBuilder: FormBuilder, private serviceDemoSelect: ServiceDemoSelect) {}

    ngOnInit() {

        //Inicializo el modelo en null la primera vez
        //this.selectedItem = "";

        this.serviceDemoSelect.get().subscribe(resultado => {this.selectableItems = resultado; this.miModelo = resultado[0]});

        //Prueba de datos simples
        // this.selectableItems = [{
        //     nombre: 'valor del primer item',
        //     valor: 1
        // }, {
        //     nombre: 'valor del segundo item',
        //     valor: 2
        // },
        // {
        //     nombre: 'valor del tercer item',
        //     valor: 3
        // }];


        
            
    }

}