import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../../../../service/paciente.service';
import { Paciente } from '../../../../../../service/paciente';

@Component({
  selector: 'sidebar-detalle',
  templateUrl: './sidebar-detalle.component.html',
})
export class SidebarDetalleComponent implements OnInit {

  public listadoPaciente: Paciente[];

  constructor(private pacienteService: PacienteService) {

  }
  ngOnInit() {

    this.pacienteService.getPacientes();

  }
}

