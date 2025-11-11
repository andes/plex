import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Cama } from '../../../../service/cama';
import { CamaService } from '../../../../service/cama.service';

@Component({
    selector: 'plex-recurso-detalle',
    templateUrl: './recurso-detalle.component.html',
})
export class RecursoDetalleComponent implements OnInit {

    public listadoCama: Cama[];
    cama$: Observable<Cama>;

    public viewOptions = true;
    public selectedOption = '1';

    constructor(
        private camaService: CamaService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {

        this.cama$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.camaService.getCama(params.get('id')))
        );
    }

    gotoCamas(cama: Cama) {
        const camaId = cama ? cama.id : null;
        this.router.navigate(['/listado-sidebar', { id: camaId, foo: 'foo' }]);
    }
}
