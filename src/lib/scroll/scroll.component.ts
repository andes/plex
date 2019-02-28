import { Input, Output, EventEmitter, Component, HostListener, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'plex-scroll',
    template: '',
})
export class PlexScrollComponent implements AfterViewInit, OnDestroy {
    private container: any;
    private containerBody: any;
    @Output() change = new EventEmitter<any>();

    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit(): void {
        this.container = this.elementRef.nativeElement.parentElement;
        this.containerBody = this.container;
        this.container.addEventListener('scroll', this.onScroll.bind(this), false);
    }

    ngOnDestroy(): void {
        this.container.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
        if (this.container.scrollTop + this.containerBody.clientHeight >= this.containerBody.scrollHeight) {
            this.change.emit(null);
        }
    }
}
