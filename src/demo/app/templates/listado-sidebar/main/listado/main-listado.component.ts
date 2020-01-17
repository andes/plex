import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../../../../service/paciente.service';
import { Paciente } from '../../../../../../service/paciente';

@Component({
  selector: 'main-listado',
  templateUrl: './main-listado.component.html',
})
export class MainListadoComponent implements OnInit {

  public listadoPaciente: Paciente[];

  constructor(private pacienteService: PacienteService) {

  }
  ngOnInit() {

    this.pacienteService.getPacientes();
  }
}
