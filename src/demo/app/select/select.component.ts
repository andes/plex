import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Importo un servicio de prueba
import { ServiceDemoSelect } from './select.service';

@Component({
    templateUrl: 'select.html',
})
export class SelectDemoComponent implements OnInit {
    public opciones: any[];
    public form1: FormGroup;
    public modelo1 = { select: null };
    public rModelo1 = { select: null };
    public modelo2 = { select: null };
    public modelo3 = { select: null };
    public modelo4 = { select: null };

    constructor(private formBuilder: FormBuilder, public servicio: ServiceDemoSelect) { }

    ngOnInit() {
        // Opciones
        this.opciones = [{
            id: 1,
            nombre: 'Argentina',
            continente: 'Latinoamerica',
        }, {
            id: 2,
            nombre: 'México',
            continente: 'Norteamérica',
        },
        {
            id: 3,
            nombre: 'Francia',
            continente: 'Europa',
        }];

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
    }

    loadData(event) {
        // Event tiene una propiedad 'query' que contiene el texto que el usuario ha escrito en el input.
        // Esto permite enviar a las APIs un parámetro para hacer las búsquedas más eficientes
        this.servicio.get(event.query).subscribe(event.callback);
    }

    agregarPais() {
        this.opciones.push({
            id: 999,
            nombre: 'Etiopa',
            continente: 'Africa',
        });
    }
}
