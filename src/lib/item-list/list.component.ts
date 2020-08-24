import { PlexSize } from './../core/plex-size.type';
import { Component, Input, Output, EventEmitter, QueryList, ContentChildren, AfterViewInit, ContentChild, ChangeDetectorRef } from '@angular/core';
import { PlexItemComponent } from './item.component';
import { PlexHeadingComponent } from './heading.component';

@Component({
    selector: 'plex-list',
    template: `
    <div [class.striped]="striped" [ngClass]="size" responsive
         infiniteScroll [infiniteScrollDistance]="1" (scrolled)="onScroll()" [scrollWindow]="false"
         [style.overflow-y]="styleScroll" [style.height]="height">
        <ng-content></ng-content>
    </div>
    `
})
export class PlexListComponent implements AfterViewInit {

    @Input() striped = true;

    @Input() selectable = true;

    @Input() height: string;

    @Input() size: PlexSize = 'md';

    @Output() scrolled = new EventEmitter<void>();

    @ContentChildren(PlexItemComponent, { descendants: false }) private plexItems: QueryList<PlexItemComponent>;
    @ContentChild(PlexHeadingComponent) private plexHeading: PlexHeadingComponent;

    constructor(
        private ref: ChangeDetectorRef

    ) {

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
        this.ref.detectChanges();

        const hayIcono = this.plexItems.some(item => item.hasIcons());
        const hayCheckbox = this.plexItems.some(item => item.hasCheckbox());
        const hayBotonera = this.plexItems.some(item => item.hasBotonera());
        if (this.plexHeading) {
            this.plexHeading.setIcon(hayIcono);
            this.plexHeading.setCheckbox(hayCheckbox);
            this.plexHeading.setBotonera(hayBotonera);
            if (this.height) {
                this.plexHeading.setSticky(true);
            }
        }
        setTimeout(() => {
            if (!this.selectable) {
                this.plexItems.forEach(item => {
                    item.selectable = false;
                });
            }
        }, 0);


    }
}
