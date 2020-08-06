import { Component, Input, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
    selector: 'plex-layout-main',
    template: `
        <div class="plex-box" [ngClass]="{'plex-box-invert': type == 'invert'}">
          <ng-content select="header"></ng-content>
          <ng-content select="plex-title[main]"></ng-content>
        <div class="plex-box-content" [ngClass]="{'scrollbar': scrollBarPresent}">
              <ng-content></ng-content>
          </div>
        </div>
    `,
})
export class PlexLayoutMainComponent implements AfterViewInit {
    @Input() type = '';
    scrollBarPresent: boolean;
    content: any;

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit() {
        this.content = this.el.nativeElement.querySelector('.plex-box-content');
        this.checkScroll();
    }

    checkScroll() {
        if (this.content.scrollHeight > this.content.clientHeight) {
            this.scrollBarPresent = true;
        } else {
            this.scrollBarPresent = false;
        }
    }

    @HostListener('window:resize', ['event'])
    onResize() {
        this.checkScroll();
    }

}
