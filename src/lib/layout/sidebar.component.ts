import { Component, Input, ElementRef, HostListener, OnInit, AfterViewInit, ViewChild, Renderer2, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'plex-layout-sidebar',
    template: `
    <div class="plex-box" [class.plex-box-invert]="type == 'invert'">
        <ng-content select="header"></ng-content>
        <ng-content select="plex-title[main]"></ng-content>
        <div #content class="plex-box-content">
            <ng-content select="plex-mininav"></ng-content>
            <div class="plex-content">
                <ng-content></ng-content>
            </div>
        </div>
    </div>
    `,
})
export class PlexLayoutSidebarComponent implements OnInit, AfterViewInit {
    @ViewChild('content', { read: ElementRef, static: false }) content: ElementRef;
    @Input() type = '';

    constructor(private render: Renderer2, private ref: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.checkScroll();

    }

    ngAfterViewInit(): void {
        this.ref.detectChanges();
    }

    checkScroll() {
        this.ref.detectChanges();
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
}
