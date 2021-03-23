import { Component, Input, ViewChildren, QueryList, AfterContentInit, AfterViewChecked, ContentChildren, ElementRef, Renderer2 } from '@angular/core';
import { PlexLabelComponent } from '../label/label.component';

@Component({
    selector: 'plex-grid',
    template: `
            <section class="cols-{{ cols }} grid-column-span-{{ span }} size-{{ size }} type-{{ type }}" responsive>
               <ng-content></ng-content>
            </section>
    `,
})

export class PlexGridComponent implements AfterViewChecked {

    @Input() type: 'auto' | 'full';
    @Input() size: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'auto';

    @Input() cols: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    @Input() span: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';


    @Input() colSm: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    @Input() colMd: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    @Input() colLg: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

    @ContentChildren(PlexLabelComponent) plexLabels: QueryList<PlexLabelComponent>;
    @ContentChildren(PlexLabelComponent, { read: ElementRef }) plexLabelsElement: QueryList<ElementRef>;

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
