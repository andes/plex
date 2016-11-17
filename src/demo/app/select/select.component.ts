import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

//Importo un servicio de prueba
import { ServiceDemoSelect } from './serviceDemoSelect';

@Component({
    templateUrl: 'select.html',
})
export class SelectDemoComponent {
    public opciones: any[];
    private form1: FormGroup;
    private form2: FormGroup;
    private form3: FormGroup;
    public modelo1 = { select: null };
    public rModelo1 = { select: null };
    public modelo2 = { select: null };
    public modelo3 = { select: null };

    constructor(private formBuilder: FormBuilder, public servicio: ServiceDemoSelect) { }

    ngOnInit() {
        // Opciones
        this.opciones = [{
            id: 1,
            nombre: 'Argentina',
        }, {
            id: 2,
            nombre: 'Brasil',
        },
        {
            id: 3,
            nombre: 'Chile',
        }];

        // Template form1
        this.modelo1.select = this.opciones[1];

        // Formularios reactivos
        this.rModelo1.select = this.opciones[2];
        this.form1 = this.formBuilder.group({
            select: [null, Validators.required],
        });
        this.form1.patchValue(this.rModelo1);
        this.form1.valueChanges.subscribe((value) => {
            this.rModelo1 = value;
        });

        this.modelo2.select = {
            id: 2,
            nombre: 'Brasil',
        };
    }

    loadData(event) {
        this.servicio.get(event.query).subscribe(event.callback);       
    }
}