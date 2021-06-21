import { Component, Input, ViewChildren, QueryList, AfterContentInit, AfterViewChecked, ContentChildren, ElementRef, Renderer2 } from '@angular/core';
import { PlexSize } from '../core/plex-size.type';
import { PlexLabelComponent } from '../label/label.component';

@Component({
    selector: 'plex-grid',
    template: `
               <ng-content></ng-content>
    `,
})

export class PlexGridComponent implements AfterViewChecked {

    /**
     * Propiedades desde CSS
     *
     * type= auto|full
     * size= xs|sm|md|lg|xl
     * cols= 1|2|3|4|5|6|7|8|9|10|11|12
     * span= 1|2|3|4|5|6|7|8|9|10|11|12
     * ENCOLUMNADO RESPONSIVE MANUAL(Funciona con directiva RESPONSIVE)
     * colsSm= 1|2|3|4|5|6|7|8|9|10|11|12
     * colsMd= 1|2|3|4|5|6|7|8|9|10|11|12
     * colsLg= 1|2|3|4|5|6|7|8|9|10|11|12
     *
     */

    @ContentChildren(PlexLabelComponent) plexLabels: QueryList<PlexLabelComponent>;
    @ContentChildren(PlexLabelComponent, { read: ElementRef }) plexLabelsElement: QueryList<ElementRef>;
    @Input() size: PlexSize;
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
