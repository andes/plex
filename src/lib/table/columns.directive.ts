import { Directive, EmbeddedViewRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlexTableColumnsComponent } from './table-column-dropdown.component';
import { IPlexColumnDisplay, IPlexSortData, IPlexTableColumns } from './table.interfaces';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[columns]',
    exportAs: 'plTable'
})
export class PlexColumnDirective implements OnChanges, OnDestroy {
    private _columns = new BehaviorSubject<IPlexTableColumns[]>(null);

    public columns$ = this._columns.asObservable();

    private _displayColumns = new BehaviorSubject<IPlexColumnDisplay>({});

    public displayColumns$ = this._displayColumns.asObservable();

    private _sort = new BehaviorSubject<IPlexSortData>({});

    public sort$ = this._sort.asObservable();

    public _filters = new BehaviorSubject({});

    public filters$ = this._filters.asObservable();

    public _filtrosSeleccionados = new BehaviorSubject({});

    public filtrosSeleccionados$ = this._filtrosSeleccionados.asObservable();


    private sub: Subscription;

    public vm$ = combineLatest([
        this.columns$,
        this.displayColumns$,
        this.sort$,
        this.filters$
    ]).pipe(
        map(([columns, displayColumns, sortData, filters]) => ({ columns, displayColumns, sortData, filters }))
    );

    @Input() set columns(value) {
        this._columns.next(value);
    }

    @Input() sortBy: string;

    @Input() sortOrder: string;

    setColumnHandler(plexTableColumn: PlexTableColumnsComponent) {
        this.sub = plexTableColumn.change.subscribe(cols => {
            this._displayColumns.next(cols);
        });
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.sortBy || changes.sortOrder) {
            this._sort.next({
                sortBy: changes.sortBy.currentValue,
                sortOrder: changes.sortOrder.currentValue
            });
        }
    }

    onColumnClick(column: IPlexTableColumns) {

        if (!column.sorteable) {
            return false;
        }

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
}
