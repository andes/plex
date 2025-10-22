import { Component, Input, ElementRef, AfterViewInit, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
    selector: 'plex-layout-main',
    template: `
        <div class="plex-box" [class.plex-box-invert]="type == 'invert'">
            <ng-content select="header"></ng-content>
            <ng-content select="plex-title[main]"></ng-content>
            <div #content class="plex-box-content" >
                <ng-content></ng-content>
            </div>
            </div>
    `,
})
export class PlexLayoutMainComponent implements AfterViewInit {
    @ViewChild('content', { read: ElementRef, static: false }) content?: ElementRef;

    @Input() type = '';

    constructor(private render: Renderer2) {
    }

    ngAfterViewInit() {
        this.checkScroll();
    }

    checkScroll() {
        const element = this.content?.nativeElement;
        if (!element) {
            // no hay contenedor aún (o esta pantalla no lo usa)
            return;
        }
        if (element.scrollHeight > element.clientHeight) {
            this.render.addClass(this.content.nativeElement, 'scrolbar');
        } else {
            this.render.removeClass(this.content.nativeElement, 'scrolbar');
        }
    }

    @HostListener('window:resize', ['event'])
    onResize() {
        this.checkScroll();
    }

}
