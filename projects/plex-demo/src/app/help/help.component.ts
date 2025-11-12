import { Component, OnInit, ViewChild } from '@angular/core';
import { from, Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { PlexHelpComponent } from '@andes/plex';
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
    timer = 3;

    asyncContent = from([1, 2, 3, 4]).pipe(
        tap((index) => {
            // eslint-disable-next-line no-console
            console.log('Contenido evaluado recien al abrirse', index);
        })
    );

    constructor(
        private pacienteService: PacienteService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    @ViewChild('toggleTest') toggleTest: PlexHelpComponent;

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

    onHelpOpen() {
        // eslint-disable-next-line no-console
        console.log('Help abierto');
    }

    onHelpClose() {
        // eslint-disable-next-line no-console
        console.log('Help cerrado');
    }

    timerCerrar() {
        const interval = setInterval(() => {
            this.timer--;
            if (this.timer === 0) {
                clearInterval(interval);
                this.toggleTest.toggle();
                this.timer = 3;
            }
        }, 1000);
    }
}
