import { Component, OnInit, Input } from '@angular/core';
import { Plex } from '../../../../../lib/core/service';

@Component({
    selector: 'plex-filters',
    styleUrls: ['./plex-filters.scss'],
    template: `
    <section class="hidden" [ngClass]="{'desplegado' : desplegado === true}">
        <plex-button *ngIf="masFiltros === true" class="botonDesplegar" type="info" size="sm" [icon]="desplegado ? 'chevron-down' : 'chevron-up'" (click)="desplegarInputs()"></plex-button>
        <ng-content></ng-content>
        <ng-content select="masFiltros"></ng-content>
    </section>
`,
})

export class PlexFiltersComponent implements OnInit {

    @Input() columns: 'auto' | 'span' = 'auto';
    masFiltros = false;

    constructor(
        private plex: Plex,
    ) { }

    ngOnInit() {

    }

    get cssColumns() {
        return this.columns === 'auto' ? 'col-auto' : 'col-span';
    }

    desplegado = true;

    desplegarInputs() {
        this.desplegado = !this.desplegado;
    }
}