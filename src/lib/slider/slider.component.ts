import { Component, ElementRef, ContentChildren, ViewChild, AfterViewInit, QueryList, OnInit, Input, HostListener } from '@angular/core';
import { PlexSize } from './../core/plex-size.type';
import { PlexGridComponent } from '../grid/grid.component';

export interface FileObject {
    url: String;
    ext: String;
}

export type PlexVisualizadorItem = FileObject | string;

@Component({
    selector: 'plex-slider',
    templateUrl: './slider.component.html',
})


export class PlexSliderComponent implements AfterViewInit, OnInit {

    @ContentChildren(PlexGridComponent) plexGrid: QueryList<PlexGridComponent>;
    @ViewChild('gridContainer', { static: true }) gridContainer: ElementRef;
    @ViewChild('dotsContainer', { static: true }) dotsContainer: ElementRef;
    @Input() size: PlexSize = 'md';
    @HostListener("scroll", ['$event'])

    public items: number;
    public itemSize: number;
    public itemsRestantes: number;
    public gridHeight: number;
    public gridWidth: number;
    public totalWidth: number;
    public scrollStop = false;

    createDot() {
        const dot = document.createElement('span');
        dot.className = 'plex-dot';
        const dotContainer = this.dotsContainer.nativeElement;
        dotContainer.appendChild(dot);
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
        this.setGridWidth()
        this.setWidth();
        this.itemSize = this.totalWidth / this.items;
        let offsetWidth = this.totalWidth - this.gridWidth;
        this.itemsRestantes = offsetWidth / this.itemSize;
    }

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
    }

    constructor(
        private elRef: ElementRef,
    ) { }

    ngOnInit() {

        setTimeout(() => {
            this.getRestantes();
            this.setWidth();
            this.gridContainer.nativeElement.style.setProperty('--grid-width', this.gridWidth + 'px');

            this.setHeight();
            this.gridContainer.nativeElement.style.setProperty('--grid-height', this.gridHeight + 'px');
        }, 500);
    }

    prevSlide() {
        this.gridContainer.nativeElement.scrollLeft = 0;
    }

    nextSlide() {
        document.querySelector('section#scroll').scrollLeft += this.itemSize * 2;
    }

    onScroll($event: Event) {
        let actualScroll = this.gridContainer.nativeElement.scrollLeft * this.itemSize;
        if (actualScroll > this.gridWidth) {
            this.scrollStop = true;
        } else {
            this.scrollStop = false;
        }
    }
}
