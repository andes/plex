import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, QueryList, ViewChild } from '@angular/core';
import { PlexGridComponent } from '../grid/grid.component';
import { PlexSize } from './../core/plex-size.type';

export interface FileObject {
    url: String;
    ext: String;
}

export type PlexVisualizadorItem = FileObject | string;

@Component({
    selector: 'plex-slider',
    template: `<section id="scroll" #gridContainer>
                <plex-grid type="full" [size]="size">
                    <ng-content></ng-content>
                </plex-grid>
                <span prev class="btn-container" [class.disabled]="!onScrolling">
                    <plex-button icon="chevron-left" type="info" size="md" (click)="prevSlide()">
                    </plex-button>
                </span>
                <span next class="btn-container" [class.disabled]="scrollStop">
                    <plex-button icon="chevron-right"
                                 type="info" size="md"
                                 tooltipPosition="left"
                                 (click)="nextSlide()"
                                 [disabled]="scrollStop">
                    </plex-button>
                </span>
            </section>`,
})


export class PlexSliderComponent implements AfterViewInit {

    @ContentChildren(PlexGridComponent) plexGrid: QueryList<PlexGridComponent>;
    @ViewChild('gridContainer', { static: true }) gridContainer: ElementRef;
    @Input() size: PlexSize = 'md';

    public items: number;
    public itemSize: number;
    public itemsRestantes: number;
    public gridHeight: number;
    public gridWidth: number;
    public totalWidth: number;
    public scrollStop = false;
    public onScrolling = false;

    constructor(
        private elRef: ElementRef,
        private ref: ChangeDetectorRef
    ) { }

    ngAfterViewInit(): void {

        // obtengo cantidad de elementos en slider
        const elementos = this.elRef.nativeElement.querySelectorAll('plex-card');
        this.items = elementos.length + 1;

        // define custom para el ancho del contenido del slider
        if (this.items > 0) {
            this.gridContainer.nativeElement.style.setProperty('--item-length', this.items);
        }

        this.getRestantes();
        this.setWidth();
        this.gridContainer.nativeElement.style.setProperty('--grid-width', this.gridWidth + 'px');

        this.setHeight();
        this.gridContainer.nativeElement.style.setProperty('--grid-height', this.gridHeight + 'px');

        this.ref.detectChanges();
    }

    // calcula y define alto de contendor
    setHeight() {
        const containerHeight = this.gridContainer.nativeElement.clientHeight;
        this.gridHeight = containerHeight;
    }

    // calcula y define ancho de contenedor
    setWidth() {
        const containerWidth = this.gridContainer.nativeElement.clientWidth;
        this.gridWidth = containerWidth;
    }

    // calcula ancho total del plex-grid
    setGridWidth() {
        const gridWidth = this.gridContainer.nativeElement.scrollWidth;
        this.totalWidth = gridWidth;
    }

    getRestantes() {
        this.setGridWidth();
        this.setWidth();
        this.itemSize = this.totalWidth / this.items;
        const offsetWidth = this.totalWidth - this.gridWidth;
        this.itemsRestantes = offsetWidth / this.itemSize;
    }

    onDotClick(index) {
        this.gridContainer.nativeElement.scrollLeft = this.itemSize * index;
    }

    prevSlide() {
        this.gridContainer.nativeElement.scrollLeft -= this.itemSize * 2;
    }

    nextSlide() {
        this.gridContainer.nativeElement.scrollLeft += this.itemSize * 2;
    }

    startIndex: number;
    endIndex: number;
}
