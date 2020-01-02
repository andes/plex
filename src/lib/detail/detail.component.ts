import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'plex-detail',
    template: `
        <section [ngClass]="{'vertical': horizontalidad}">
            <div>
                <ng-content select="plex-icon"></ng-content>
                <img *ngIf="foto" class="rounded-circle cover" src="{{ foto }}" alt="">    
            </div>
            <div>
                <ng-content select="plex-badge"></ng-content>
                <h3 *ngIf="titulo">{{ titulo }}</h3>
                <h5 *ngIf="subtitulo">{{ subtitulo }}</h5>
                <hr class="w-25 float-left">
                <ng-content select="plex-label"></ng-content>
            </div>
        </section>
    `,
})

export class PlexDetailComponent implements OnInit {


    @Input() horizontalidad: boolean;
    @Input() foto: string;
    @Input() icon: string;
    @Input() titulo: string;
    @Input() subtitulo: string;
    @Input() datoSecundario: string;

    ngOnInit() {
    }

}
