import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { Observable } from 'rxjs';
import { PlexColumnDirective } from './columns.directive';
import { IPlexTableColumns } from './table.interfaces';


@Component({
    selector: 'plex-table',
    template: `
    <section class="d-flex flex-column"
             infiniteScroll [infiniteScrollDistance]="1" (scrolled)="onScroll()" [scrollWindow]="false"
             [style.overflow-y]="_height ? 'scroll' : null" [style.height]="_height"
    >
        <ng-content select="plex-title"></ng-content>
        <table>
            <thead *ngIf="vm$ | async as vm">
                <tr >
                    <ng-container *ngFor="let column of vm.columns">
                        <th [class.sortable]="column.sorteable"
                            [style.width]="column.width"
                            (click)="onColumnClick(column)"
                            *ngIf="vm.displayColumns[column.key] || !column.opcional"
                            [class.column-right]="column.right"
                            >
                            {{ column.label }}
                            <span *ngIf="vm.sortData.sortBy === column.key">
                                <plex-icon *ngIf="vm.sortData.sortOrder === 'DESC'" name="chevron-down"></plex-icon>
                                <plex-icon *ngIf="vm.sortData.sortOrder === 'ASC'" name="chevron-up"></plex-icon>
                            </span>
                        </th>
                    </ng-container>
                </tr>
            </thead>
            <tbody >
                <ng-content select="tr"></ng-content>
            </tbody>
        </table>
    </section>
    `
})

export class PlexTableComponent {

    /**
     * Variable auxiliar para calcular la altura del elemento
     * @ignore
     */

    public _height: string;

    /**
     * Indica la altura del listado respecto a su contenedor
     */

    @Input() set height(value: number) {
        this._height = value + 'px';
    }

    /**
     * Cantidad de pixeles a reducir de la pantalla completa.
     */
    @Input() set offset(value: number) {
        if (typeof value === 'number') {
            this._height = `calc(100% - ${value}px)`;
        }
    }

    @Output() sort = new EventEmitter<IPlexTableColumns>();

    @Output() scroll = new EventEmitter<void>();

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

    public onScroll() {
        this.scroll.emit();
    }
}
