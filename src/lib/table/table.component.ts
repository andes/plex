import { Component, EventEmitter, forwardRef, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { BehaviorSubject, NEVER, Observable } from 'rxjs';
import { PlexTableColumnsComponent } from './table-column-dropdown.component';

export interface IPlexTableColumns {
    key: string;
    label: string;
    sorteable?: boolean;
    opcional?: boolean;
    width?: string | number;
    sort?: (a: any, b: any) => number;
}

@Component({
    selector: 'plex-table',
    template: `
    <section class="d-flex flex-column">
        <ng-content select="plex-title"></ng-content>
        <table>
            <thead>
                <tr sticky *ngIf="_sort | async as sortData">
                    <ng-container *ngFor="let column of columns">
                        <th  [class.sortable]="column.sorteable" [style.width]="column.width" (click)="onColumnClick(column)" *ngIf="displayColumns[column.key] || !column.opcional">
                            {{ column.label }}
                            <span *ngIf="sortData.sortBy === column.key">
                                <plex-icon *ngIf="sortData.sortOrder === 'DESC'" name="chevron-down"></plex-icon>
                                <plex-icon *ngIf="sortData.sortOrder === 'ASC'" name="chevron-up"></plex-icon>
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

export class PlexTableComponent implements OnChanges {

    @Input() columns: IPlexTableColumns[];

    @Input() sortBy: string;

    @Input() sortOrder: string;

    @Output() sort = new EventEmitter<IPlexTableColumns>();

    _sort = new BehaviorSubject<{ sortBy?: string, sortOrder?: 'DESC' | 'ASC' }>({});


    columns$ = new BehaviorSubject<IPlexTableColumns[]>([]);

    displayColumns: { [key: string]: boolean } = {};

    displayColumns$ = new BehaviorSubject<{ [key: string]: boolean }>({});


    ngOnChanges(changes: SimpleChanges) {
        if (changes.columns) {
            this.columns$.next(changes.columns.currentValue);
        }

        if (changes.sortBy || changes.sortOrder) {
            this._sort.next({
                sortBy: changes.sortBy.currentValue,
                sortOrder: changes.sortOrder.currentValue
            });
        }
    }

    onColumnClick(column: IPlexTableColumns) {
        this.sort.emit(column);
        const data = this._sort.getValue();

        if (data.sortBy === column.key) {
            this._sort.next({
                sortBy: column.key,
                sortOrder: data.sortOrder === 'ASC' ? 'DESC' : 'ASC'
            });
        } else {
            this._sort.next({
                sortBy: column.key,
                sortOrder: 'ASC'
            });
        }

    }

    setColumnHandler(plexTableColumn: PlexTableColumnsComponent) {
        plexTableColumn.change.subscribe(cols => {
            this.displayColumns = cols;
            this.displayColumns$.next(cols);
        });
    }

    displayColumnBuffer(): Observable<any> {
        return this.displayColumns$.asObservable();
    }
}
