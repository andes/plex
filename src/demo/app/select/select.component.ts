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
    private form1: FormGroup;

    public selectableItems: any[];
    public tModel: any;
    public modelo: any;
    
    
    constructor(private formBuilder: FormBuilder, private serviceDemoSelect: ServiceDemoSelect) {}

    ngOnInit() {
        
        // Template form
        this.serviceDemoSelect.get().subscribe(resultado => {this.selectableItems = resultado; this.tModel = resultado[0]});

        // Reactive form
        this.form1 = this.formBuilder.group({
            modelo : this.serviceDemoSelect.get().subscribe(resultado => {this.selectableItems = resultado; this.modelo = resultado[0]})
        });

         this.form1.valueChanges.subscribe((value) => {
            this.serviceDemoSelect.get().subscribe(resultado => {this.modelo = value})
        })     
            
    }

}