import { Component, ElementRef, ContentChildren, ViewChild, AfterViewInit, QueryList, Input, ChangeDetectorRef } from '@angular/core';
import { PlexSize } from './../core/plex-size.type';
import { PlexGridComponent } from '../grid/grid.component';

export interface FileObject {
    url: String;
    ext: String;
}

export type PlexVisualizadorItem = FileObject | string;

@Component({
    selector: 'plex-slider',
    template: `<section id="scroll" #gridContainer (scroll)="onScroll()">
                <plex-grid type="full" [size]="size">
                    <ng-content></ng-content>
                </plex-grid>

                <!-- Navegación -->
                <span prev class="btn-container" [ngClass]="{'disabled': onScrolling === false}">
                    <plex-button icon="chevron-left" type="info" size="md" (click)="prevSlide()">
                    </plex-button>
                </span>
                <span next class="btn-container" *ngIf="itemsRestantes > 0">
                    <plex-button label="+ {{ itemsRestantes - 1 | number: '1.0-0' }}" type="info" size="md" tooltipPosition="left" (click)="nextSlide()" [ngClass]="{'disabled': scrollStop === true}" [disabled]="scrollStop === true">
                    </plex-button>
                </span>
                <div #dotsContainer id="dotsContainer" class="plex-dots-wrapper"></div>
            </section>`,
})


export class PlexSliderComponent implements AfterViewInit {

    @ContentChildren(PlexGridComponent) plexGrid: QueryList<PlexGridComponent>;
    @ViewChild('gridContainer', { static: true }) gridContainer: ElementRef;
    @ViewChild('dotsContainer', { static: true }) dotsContainer: ElementRef;
    @Input() size: PlexSize = 'md';

    public items: number;
    public itemSize: number;
    public itemsRestantes: number;
    public gridHeight: number;
    public gridWidth: number;
    public totalWidth: number;
    public scrollStop = false;
    public onScrolling = false;
    public dots;

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

            // genera dots
            let i;
            for (i = 1; i < this.items; i++) {
                this.createDot();
            }
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

    // Puntitos para navegación
    createDot() {
        const dot = document.createElement('span');
        dot.className = 'plex-dot';
        const dotContainer = this.dotsContainer.nativeElement;
        dotContainer.appendChild(dot);
    }

    // En desuso hasta resolver funcionalidad
    activeDots() {
        const dot = document.getElementsByClassName('plex-dot');
        dot[0].className = dot[0].className.replace('plex-dot', 'plex-dot active');
    }

    prevSlide() {
        this.gridContainer.nativeElement.scrollLeft -= this.itemSize * 2;
    }

    nextSlide() {
        this.gridContainer.nativeElement.scrollLeft += this.itemSize * 2;
    }

    onScroll() {
        const finalScroll = this.totalWidth;
        const currentScroll = this.gridContainer.nativeElement.scrollLeft + this.totalWidth / 2;

        if (currentScroll > this.totalWidth / 2) {
            this.onScrolling = true;
        } else {
            this.onScrolling = false;
        }

        if (currentScroll > finalScroll) {
            this.scrollStop = true;
        } else {
            this.scrollStop = false;
        }
    }

}
