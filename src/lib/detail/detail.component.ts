import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'plex-detail',
    template: `
        <section [ngClass]="{'horizontal': horizontalidad}">
            <div>
                <ng-content select="plex-icon"></ng-content>
                <img *ngIf="foto" class="rounded cover" src="{{ foto }}" alt="">    
            </div>
            <div>
                <ng-content select="plex-badge"></ng-content>
                <h3 *ngIf="titulo">{{ titulo }}</h3>
                <h5 *ngIf="subtitulo">{{ subtitulo }}</h5>
                <h6 *ngIf="datoSecundario">{{ datoSecundario }}</h6>
            </div>
        </section>
    `,
})

export class PlexDetailComponent implements OnInit {

    @Input() horizontalidad: boolean;
    @Input() foto: string;
    @Input() titulo: string;
    @Input() subtitulo: string;
    @Input() datoSecundario: string;

    ngOnInit() {
    }

}
