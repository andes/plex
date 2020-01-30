import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../service/paciente.service';
import { Paciente } from '../../../service/paciente';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'sidebar-detalle',
  templateUrl: './sidebar-detalle.component.html',
})
export class SidebarDetalleComponent implements OnInit {

  public listadoPaciente: Paciente[];
  paciente$: Observable<Paciente>;

  constructor(
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    this.paciente$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.pacienteService.getPaciente(params.get('id')))
    );
  }

  gotoPacientes(paciente: Paciente) {
    let pacienteId = paciente ? paciente.id : null;
    this.router.navigate(['/listado-sidebar', { id: pacienteId, foo: 'foo' }]);
  }
}

