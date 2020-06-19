import { Component, Input, ViewChildren, QueryList, AfterContentInit, AfterViewChecked, ContentChildren, ElementRef, Renderer2 } from '@angular/core';
import { PlexLabelComponent } from '../label/label.component';

@Component({
    selector: 'plex-detail',
    template: `
        <section [ngClass]="cssDirection" class="size-{{size}}">
            <div class="contenedor-elementos-graficos">
                <ng-content select="plex-icon"></ng-content>
                <ng-content select="img"></ng-content>
            </div>
            <div class="contenedor-textos" [ngClass]="{ 'd-flex flex-column': direction === 'column'  }">
                <span class="d-flex flex-row flex-wrap">
                    <ng-content select="plex-badge"></ng-content>
                </span>
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

export class PlexDetailComponent implements AfterViewChecked {
    @Input() direction: 'column' | 'row' = 'row';
    @Input() size: 'xs' | 'md' | 'lg' = 'md';
    @Input() items: [];

    @ContentChildren(PlexLabelComponent) plexLabels: QueryList<PlexLabelComponent>;
    @ContentChildren(PlexLabelComponent, { read: ElementRef }) plexLabelsElement: QueryList<ElementRef>;

    get cssDirection() {
        return this.direction === 'row' ? 'direction-row' : 'direction-column';
    }

    constructor(private render: Renderer2) {

    }

    ngAfterViewChecked() {
        const labelListElement = this.plexLabelsElement.toArray();
        this.plexLabels.forEach((label: PlexLabelComponent, index) => {
            const native: ElementRef = labelListElement[index];
            if (label.subtitulo.length > 28) {
                this.render.setStyle(native.nativeElement, 'grid-column-end', 'span 2');
            } else {
                this.render.setStyle(native.nativeElement, 'grid-column-end', 'unset');
            }
        });
    }

}
