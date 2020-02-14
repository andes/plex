import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'plex-detail',
    template: `
        <section [ngClass]="cssDirection" class="size-{{size}}">
            <div class="contenedor-elementos-graficos">
                <ng-content select="plex-icon"></ng-content>
                <ng-content select="img"></ng-content>
            </div>
            <div class="contenedor-textos" [ngClass]="{ 'd-flex flex-column': direction === 'column'  }">
                <ng-content select="plex-badge"></ng-content>
                <ng-content select="div[title]"></ng-content>
                <ng-content select="div[subtitle]"></ng-content>
                <hr>
            </div>
        </section>

        <section [ngClass]="cssDirection" class="contenedor-datos-secundarios">
            <ng-container *ngFor="let dato of items">
                <plex-label titulo="{{ dato.label }}" subtitulo="{{ dato.valor }}"></plex-label>
            </ng-container>
            <ng-content select="plex-label"></ng-content>
        </section>

    `,
})

export class PlexDetailComponent {
    @Input() direction: 'column' | 'row' = 'row';
    @Input() size: 'xs' | 'md' | 'lg' = 'md';
    @Input() items: [];

    get cssDirection() {
        return this.direction === 'row' ? 'direction-row' : 'direction-column';
    }


}
