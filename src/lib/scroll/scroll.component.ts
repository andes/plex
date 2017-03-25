import { Inject, Input, Output, EventEmitter, Component, HostListener, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'plex-scroll',
    template: '',
})
export class PlexScrollComponent {
    private document: any;
    public _count: number;
    @Input() distancia = 1;
    @Output() change = new EventEmitter<any>();

    constructor(elementRef: ElementRef) {
        this.document = elementRef.nativeElement.ownerDocument;
    }

    @HostListener('window:scroll', [])
    onScroll() {
        this._count++;
        if (this.document.body.scrollTop + this.document.body.clientHeight >= this.document.body.scrollHeight) {
            this.change.emit(null);
        } else {
            if (this._count % this.distancia === 0) {
                this.change.emit(null);
            }
        }
    }
}
