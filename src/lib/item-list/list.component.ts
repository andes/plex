import { PlexSize } from './../core/plex-size.type';
import { Component, Input, Output, EventEmitter, QueryList, ContentChildren, AfterViewInit, ContentChild, ChangeDetectorRef, Optional, Self } from '@angular/core';
import { PlexItemComponent } from './item.component';
import { PlexHeadingComponent } from './heading.component';
import { Observable } from 'rxjs';
import { PlexColumnDirective } from '../table/columns.directive';
import { IPlexTableColumns } from '../table/table.interfaces';

@Component({
    selector: 'plex-list',
    template: `
    <ng-content select="plex-title"></ng-content>
    <div [class.striped]="striped" [class.inverted]="inverted" [ngClass]="size" responsive
         infiniteScroll [infiniteScrollDistance]="1" (scrolled)="onScroll()" [scrollWindow]="false"
         [style.overflow-y]="styleScroll" [style.height]="height">

         <ng-container *ngIf="vm$">
            <plex-heading *ngIf="vm$  && vm$ | async as vm">
                <ng-container *ngFor="let column of vm.columns">
                    <b label [class.sortable]="column.sorteable" [style.width]="column.width" (click)="onColumnClick(column)" *ngIf="vm.displayColumns[column.key] || !column.opcional">
                        {{ column.label }}
                        <span *ngIf="vm.sortData.sortBy === column.key">
                            <plex-icon *ngIf="vm.sortData.sortOrder === 'DESC'" name="chevron-down"></plex-icon>
                            <plex-icon *ngIf="vm.sortData.sortOrder === 'ASC'" name="chevron-up"></plex-icon>
                        </span>
                    </b>
                </ng-container>
            </plex-heading>
        </ng-container>


        <ng-content></ng-content>
    </div>
    `
})
export class PlexListComponent implements AfterViewInit {

    @Input() striped = true;

    @Input() selectable = true;

    @Input() inverted = false;

    @Input() height: string;

    @Input() size: PlexSize = 'md';

    @Output() scrolled = new EventEmitter<void>();

    @Output() sort = new EventEmitter<IPlexTableColumns>();

    @ContentChildren(PlexItemComponent, { descendants: false }) private plexItems: QueryList<PlexItemComponent>;
    @ContentChild(PlexHeadingComponent) private plexHeading: PlexHeadingComponent;

    public vm$: Observable<any>;

    constructor(
        @Optional() @Self() private plexColumns: PlexColumnDirective,
        private ref: ChangeDetectorRef

    ) {
        if (this.plexColumns) {
            this.vm$ = this.plexColumns.vm$;
        }
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
            // Deshabilita que sean seleccionables los items (override)
            if (!this.selectable) {
                this.plexItems.forEach(item => {
                    item.selectable = false;
                });
            }
        }, 0);

        this.ref.detectChanges();

    }

    onColumnClick(column: IPlexTableColumns) {
        this.plexColumns.onColumnClick(column);
        this.sort.emit(column);
    }

}
