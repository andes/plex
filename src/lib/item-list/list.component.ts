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
                <ng-container *ngFor="let column of vm.columns; let i = index">
                    <div label [class.sortable]="column.sorteable" [style.width]="column.width" (click)="onColumnClick(column)" *ngIf="vm.displayColumns[column.key] || !column.opcional">
                        <div class="list-label">
                            {{ column.label }}
                            <span *ngIf="vm.sortData.sortBy === column.key">
                                <plex-icon *ngIf="vm.sortData.sortOrder === 'DESC'" name="chevron-down"></plex-icon>
                                <plex-icon *ngIf="vm.sortData.sortOrder === 'ASC'" name="chevron-up"></plex-icon>
                            </span>
                        </div>
                        <ng-container *ngIf="vm.filters[column.key]">
                            <plex-dropdown size="sm" icon="format-list-checks" type="link" class="filtros" [right]="i === vm.columns.length - 1">
                                <plex-radio   multiple="true" [data]="vm.filters[column.key]"
                                    type="vertical" name="cacho" [(ngModel)]="plexRadioValue[column.key]" (change)="onFilterChange(column.key, $event)" >
                                </plex-radio>
                            </plex-dropdown>
                        </ng-container>
                    </div>
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

    @Input() set offset(value: number) {
        if (typeof value === 'number') {
            this.height = `calc(100% - ${value}px)`;
        }
    }

    @Output() scrolled = new EventEmitter<void>();

    @Output() sort = new EventEmitter<IPlexTableColumns>();

    @ContentChildren(PlexItemComponent, { descendants: false }) private plexItems: QueryList<PlexItemComponent>;
    @ContentChild(PlexHeadingComponent) private plexHeading: PlexHeadingComponent;

    public vm$: Observable<any>;

    /**
     * plex-radio no se puede usar sin ngModel, así que esta esta variable dummy.
     * @ignore
     */
    plexRadioValue = {};

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

    onFilterChange(column, $event) {
        const { value } = $event;
        const keys = value.map(v => v.id);

        const filtros = this.plexColumns._filtrosSeleccionados.getValue();

        if (keys.length > 0) {
            filtros[column] = keys;
        } else {
            delete filtros[column];
        }

        this.plexColumns._filtrosSeleccionados.next(filtros);

    }
}
