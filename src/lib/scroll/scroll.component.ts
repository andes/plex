import { Inject, Input, Output, EventEmitter, Component, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'plex-scroll',
    template: '',
})
export class PlexScrollComponent {
    public _count: number;
    @Input() distancia: number;
    @Output() scroll = new EventEmitter<any>();

    constructor( @Inject(DOCUMENT) private document: Document) {
        if (!this.distancia) {
            this.distancia = 1;
        }
    }

    @HostListener('window:scroll', [])
    onScroll() {
        this._count++;
        if (this.document.body.scrollTop + this.document.body.clientHeight >= this.document.body.scrollHeight) {
            this.scroll.emit(null);
        } else {
            if (this._count % this.distancia === 0) {
                this.scroll.emit(null);
            }
        }
    }
}
