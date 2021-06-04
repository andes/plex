import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class TemplateFormReactivoComponent implements OnInit {

  @ViewChild('formulario', { static: true }) formulario: NgForm;
  public formReactivo: FormGroup;
  textoDocumento: string;
  textoTramite: string;
  textoCelular: string;
  textoEmail: string;
  opcionesSexo = [
    { id: 0, nombre: 'femenino' },
    { id: 1, nombre: 'masculino' },
    { id: 2, nombre: 'otro' }
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+[\.]{1}[a-z]{2,4}$';
    const patronDocumento = '^[1-9]{1}[0-9]{4,7}$';
    const patronContactoNumerico = '^[1-9]{3}[0-9]{6,7}$';

    this.formReactivo = this.formBuilder.group({
      documento: ['', Validators.compose([Validators.pattern(patronDocumento)])],
      celular: ['', Validators.compose([Validators.required, Validators.pattern(patronContactoNumerico)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      tramite: ['', Validators.compose([Validators.required])],
      sexo: ['', Validators.compose([Validators.required])]
    });

    this.textoDocumento = "Su número de documento, sin espacios ni puntos.";
    this.textoTramite = "Los 11 dígitos de su número de trámite de documento.";
    this.textoCelular = "Su número de celular, sin 0 y sin 15.";
    this.textoEmail = "Un e-mail válido, ejemplo@ejemplo.com";
  }

  trimEmail(value) {
    this.formReactivo.patchValue({
      email: value.replace(/\s/g, '').toLowerCase()
    });
  }

  validarForm() {
    alert(1);
  }

}
