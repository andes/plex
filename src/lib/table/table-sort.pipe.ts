import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPlexTableColumns, PlexTableComponent } from './table.component';


@Pipe({
    name: 'plSort'
})
export class PlexTableSortPipe implements PipeTransform {


    transform(value: Observable<any[]>, plexTable: PlexTableComponent) {
        const dto: IPlexTableColumns[] = plexTable.columns;

        return combineLatest([
            value,
            plexTable._sort
        ]).pipe(
            map(([listado, sortData]) => {
                const { sortBy, sortOrder } = sortData;
                if (!sortBy) {
                    return listado;
                }

                const colData: IPlexTableColumns = dto.find(item => item.key === sortBy);
                const sortFn = colData.sort;

                return listado.sort((a, b) => {
                    
                    const factor = sortOrder === 'ASC' ? 1 : -1;
                    return sortFn(a, b) * factor;
                });

            })
        );

    }
}
