import { Component, EventEmitter, Input, Optional, Output, Self, ViewEncapsulation } from '@angular/core';
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
                            <div class="d-flex">
                                <div class="th-label">
                                    {{ column.label }}
                                    <span *ngIf="vm.sortData.sortBy === column.key">
                                        <plex-icon *ngIf="vm.sortData.sortOrder === 'DESC'" name="chevron-down"></plex-icon>
                                        <plex-icon *ngIf="vm.sortData.sortOrder === 'ASC'" name="chevron-up"></plex-icon>
                                    </span>
                                </div>
                                <ng-container *ngIf="vm.filters[column.key]">
                                    <plex-dropdown size="sm" icon="format-list-checks" type="link" class="filtros">
                                        <plex-radio   multiple="true" [data]="vm.filters[column.key]"
                                            type="vertical" name="cacho" [(ngModel)]="plexRadioValue[column.key]" (change)="onFilterChange(column.key, $event)" >
                                        </plex-radio>
                                    </plex-dropdown>
                                </ng-container>
                            </div>
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
     * plex-radio no se puede usar sin ngModel, así que esta esta variable dummy.
     * @ignore
     */
    plexRadioValue = {};

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
