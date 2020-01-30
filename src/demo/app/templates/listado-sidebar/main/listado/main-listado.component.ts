import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../service/paciente.service';
import { Paciente } from '../../../service/paciente';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'main-listado',
  templateUrl: './main-listado.component.html',
})
export class MainListadoComponent implements OnInit {

  // public listadoPaciente: Paciente[];
  pacientes$: Observable<Paciente[]>
  selectedId: Number;

  constructor(
    private pacienteService: PacienteService,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit() {

    this.pacientes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.pacienteService.getPacientes();
      })
    );

    // this.pacienteService.getPacientes();
  }
}
