import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { PlexHelpComponent } from '../../../lib/help/help.component';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// Mock data
import { PacienteService } from './../../app/templates/service/paciente.service';
import { Paciente } from '../templates/service/paciente';

@Component({
    templateUrl: 'help.html',
})
export class HelpDemoComponent implements OnInit {

    showItem = false;
    showContent = false;

    pacientes$: Observable<Paciente[]>;
    paciente$: Observable<Paciente>;
    selectedId: string;

    asyncContent = from([1, 2, 3, 4]).pipe(
        tap((index) => {
            // tslint:disable-next-line:no-console
            console.log('Contenido evaluado recien al abrirse', index);
        })
    );

    constructor(
        private pacienteService: PacienteService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.pacientes$ = this.pacienteService.getPacientes();

        this.paciente$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.pacienteService.getPaciente(params.get('id')))
        );
    }

    agregarItem(paciente, helpTest: PlexHelpComponent) {
        helpTest.toggle();
        this.showItem = !this.showItem;
        this.selectedId = paciente.id;
        this.router.navigate(['help', this.selectedId]);
    }

}
