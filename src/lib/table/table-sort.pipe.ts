import { Pipe, PipeTransform } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlexColumnDirective } from './columns.directive';

@Pipe({
    name: 'plSort'
})
export class PlexTableSortPipe implements PipeTransform {

    transform(value: Observable<any[]>, plexTable: PlexColumnDirective) {
        return combineLatest([
            plexTable.columns$,
            value,
            plexTable.sort$,
        ]).pipe(
            map(([columns, listado, sortData]) => {
                const { sortBy, sortOrder } = sortData;
                if (!sortBy) {
                    return listado;
                }

                const colData = columns.find(item => item.key === sortBy);
                const sortFn = colData.sort;

                return listado.sort((a, b) => {
                    const factor = sortOrder === 'ASC' ? 1 : -1;
                    return sortFn(a, b) * factor;
                });
            })
        );

    }
}
