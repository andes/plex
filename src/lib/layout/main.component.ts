import { Component, Input, ElementRef, AfterViewInit, HostListener, Renderer2, ViewChild, ContentChildren, QueryList } from '@angular/core';
import { PlexMininavComponent } from './../mininav/mininav.component';

@Component({
    selector: 'plex-layout-main',
    template: `
        <div class="plex-box" [class.plex-box-invert]="type == 'invert'">
            <ng-content select="header"></ng-content>
            <ng-content select="plex-title[main]"></ng-content>
            <div #content class="plex-box-content">
            <ng-content select="plex-mininav"></ng-content>
            <ng-content></ng-content>
            </div>
        </div>
    `,
})
export class PlexLayoutMainComponent implements AfterViewInit {
    @ViewChild('content', { read: ElementRef, static: false }) content: ElementRef;
    @ContentChildren(PlexMininavComponent) mininav: QueryList<ElementRef>;

    @Input() type = '';

    constructor(private render: Renderer2) { }

    ngAfterViewInit() {
        this.checkScroll();
        this.checkMininav();
    }

    checkScroll() {
        if (this.content.nativeElement.scrollHeight > this.content.nativeElement.clientHeight) {
            this.render.addClass(this.content.nativeElement, 'scrolbar');
        } else {
            this.render.removeClass(this.content.nativeElement, 'scrolbar');
        }
    }

    @HostListener('window:resize', ['event'])
    onResize() {
        this.checkScroll();
    }

    // detecta mininav y modica display a 'grid'
    checkMininav() {
        if (this.mininav.length > 0) {
            this.render.addClass(this.content.nativeElement, 'mininav');
        }
    }
}
