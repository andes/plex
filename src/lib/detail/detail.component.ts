import { Component, Input, QueryList, AfterViewChecked, ContentChildren, ElementRef, Renderer2 } from '@angular/core';
import { PlexLabelComponent } from '../label/label.component';
import { PlexButtonComponent } from '../button/button.component';

@Component({
    selector: 'plex-detail',
    template: `
        <section [ngClass]="cssDirection" class="size-{{size}}">
            <div class="contenedor-elementos-graficos">
                <ng-content select="plex-icon"></ng-content>
                <ng-content select="img"></ng-content>
            </div>
            <div class="contenedor-textos" [ngClass]="{ 'd-flex flex-column': direction === 'column'  }">
                <span class="d-flex flex-row flex-wrap justify-content-between">
                    <span class="d-flex align-items-start justify-content-start flex-row flex-wrap cont-badge px-0">
                        <ng-content select="plex-badge"></ng-content>
                    </span>
                    <span *ngIf="hasButton()" class="d-flex align-items-start justify-content-end flex-row flex-wrap cont-button px-0">
                        <ng-content select="plex-button[size=sm]"></ng-content>
                        <ng-content select="plex-dropdown"></ng-content>
                    </span>
                </span>
                <ng-content select="div[title]"></ng-content>
                <ng-content select="div[subtitle]"></ng-content>
                <hr>
            </div>
        </section>
        <plex-grid size="md" type="auto">
            <ng-container *ngFor="let dato of items">
                <plex-label titulo="{{ dato.label }}" subtitulo="{{ dato.valor }}"></plex-label>
            </ng-container>
            <ng-content select="plex-label"></ng-content>
        </plex-grid>
    `,
})

export class PlexDetailComponent implements AfterViewChecked {
    @Input() direction: 'column' | 'row' = 'row';
    @Input() size: 'xs' | 'md' | 'lg' = 'md';
    @Input() items: any[];

    @ContentChildren(PlexLabelComponent) plexLabels: QueryList<PlexLabelComponent>;
    @ContentChildren(PlexLabelComponent, { read: ElementRef }) plexLabelsElement: QueryList<ElementRef>;
    @ContentChildren(PlexButtonComponent, { descendants: false }) plexButtons: QueryList<PlexButtonComponent>;

    get cssDirection() {
        return this.direction === 'row' ? 'direction-row' : 'direction-column';
    }

    hasButton() {
        return this.plexButtons.length > 0;
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
                this.render.setStyle(native.nativeElement, 'grid-column-end', 'span 1');
            }
        });
    }

}
