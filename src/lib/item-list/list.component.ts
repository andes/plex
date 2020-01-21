import { Component, Input, Output, EventEmitter, QueryList, ContentChildren, AfterViewInit, ContentChild } from '@angular/core';
import { PlexItemComponent } from './item.component';
import { PlexHeadingComponent } from './heading.component';

@Component({
    selector: 'plex-list',
    template: `
    <div [class.striped]="striped"
         infiniteScroll [infiniteScrollDistance]="1" (scrolled)="onScroll()" [scrollWindow]="false"
         [style.overflow-y]="styleScroll" [style.height]="height">
        <ng-content></ng-content>
    </div>
    `
})
export class PlexListComponent implements AfterViewInit {

    @Input() striped = true;

    @Input() height: string;

    @Output() scrolled = new EventEmitter<void>();

    @ContentChildren(PlexItemComponent, { descendants: false }) private plexItems: QueryList<PlexItemComponent>;
    @ContentChild(PlexHeadingComponent, { static: false }) private plexHeading: PlexHeadingComponent;

    constructor() {

    }

    get styleScroll() {
        if (this.height) {
            return 'scroll';
        }
    }

    public onScroll() {
        this.scrolled.emit();
    }

    ngAfterViewInit() {
        const hayIcono = this.plexItems.some(item => item.hasIcons());
        const hayCheckbox = this.plexItems.some(item => item.hasCheckbox());
        if (this.plexHeading) {
            this.plexHeading.setIcon(hayIcono);
            this.plexHeading.setCheckbox(hayCheckbox);
            if (this.height) {
                this.plexHeading.setSticky(true);
            }
        }
    }

}
