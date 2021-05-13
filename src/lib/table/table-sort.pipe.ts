import { Pipe, PipeTransform } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlexColumnDirective } from './columns.directive';
import { IPlexTableColumns } from './table.interfaces';

@Pipe({
    name: 'plSort'
})
export class PlexTableSortPipe implements PipeTransform {

    calcularFiltros(plexTable: PlexColumnDirective, columns: IPlexTableColumns[], listado: any[]) {
        const cols = {};
        columns.forEach(columnDef => {
            if (columnDef.filterBy) {

                cols[columnDef.key] = Object.keys(
                    listado.reduce(
                        (acc, curr) => {
                            const k = columnDef.filterBy(curr);
                            acc[k] = true;
                            return acc;
                        },
                        {}
                    )
                ).sort((a, b) => a.localeCompare(b)).map(k => ({ id: k, label: k }));

            }
        });

        plexTable._filters.next(cols);
    }


    filtrarListado(columns: IPlexTableColumns[], filtros: any, listado: any[]) {
        Object.keys(filtros).forEach(k => {
            const keys = filtros[k];
            const colDef = columns.find(item => item.key === k);

            listado = listado.filter(item => {

                const computed = colDef.filterBy(item);

                return keys.includes(computed);

            });


        });

        return listado;
    }

    transform(value: Observable<any[]>, plexTable: PlexColumnDirective) {
        return combineLatest([
            plexTable.columns$,
            value,
            plexTable.sort$,
            plexTable.filtrosSeleccionados$
        ]).pipe(
            map(([columns, listado, sortData, filtros]) => {

                this.calcularFiltros(plexTable, columns, listado);

                listado = this.filtrarListado(columns, filtros, listado);


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
