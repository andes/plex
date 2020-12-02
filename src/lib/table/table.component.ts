import { Component, EventEmitter, Input, OnChanges, Optional, Output, Self, SimpleChanges } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlexColumnDirective } from './columns.directive';
import { PlexTableColumnsComponent } from './table-column-dropdown.component';
import { IPlexColumnDisplay, IPlexSortData, IPlexTableColumns } from './table.interfaces';


@Component({
    selector: 'plex-table',
    template: `
    <section class="d-flex flex-column">
        <ng-content select="plex-title"></ng-content>
        <table>
            <thead *ngIf="vm$ | async as vm">
                <tr >
                    <ng-container *ngFor="let column of vm.columns">
                        <th [class.sortable]="column.sorteable" [style.width]="column.width" (click)="onColumnClick(column)" *ngIf="vm.displayColumns[column.key] || !column.opcional">
                            {{ column.label }}
                            <span *ngIf="vm.sortData.sortBy === column.key">
                                <plex-icon *ngIf="vm.sortData.sortOrder === 'DESC'" name="chevron-down"></plex-icon>
                                <plex-icon *ngIf="vm.sortData.sortOrder === 'ASC'" name="chevron-up"></plex-icon>
                            </span>
                        </th>
                    </ng-container>
                </tr>
            </thead>
            <tbody>
                <ng-content select="tr"></ng-content>
            </tbody>
        </table>
    </section>
    `
})

export class PlexTableComponent {

    @Output() sort = new EventEmitter<IPlexTableColumns>();

    public vm$: Observable<any>;

    constructor(
        @Optional() @Self() private plexColumns: PlexColumnDirective
    ) {
        if (this.plexColumns) {
            this.vm$ = this.plexColumns.vm$;
        }
    }


    onColumnClick(column: IPlexTableColumns) {
        this.plexColumns.onColumnClick(column);
        this.sort.emit(column);
    }
}
