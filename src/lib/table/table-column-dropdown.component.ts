import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { PlexColumnDirective } from './columns.directive';
import { IPlexColumnDisplay, IPlexTableColumns } from './table.interfaces';


@Component({
    selector: 'plex-table-columns',
    template: `
        <plex-dropdown icon="format-list-checks" type="info" size="sm" class="d-inline-block ml-1" [right]="true">
            <plex-grid cols="3">
                <ng-container *ngFor="let column of columns$ | async">
                    <plex-bool [label]="column.label" [(ngModel)]="estadoColumnas[column.key]" (change)="onColumnChange()" *ngIf="column.opcional">
                    </plex-bool>
                </ng-container>
            </plex-grid>
        </plex-dropdown>
    `,
})
export class PlexTableColumnsComponent implements OnChanges {

    @Input() selected: IPlexColumnDisplay = {};

    @Output() change = new EventEmitter<IPlexColumnDisplay>();

    estadoColumnas: IPlexColumnDisplay = {};


    columns$: Observable<IPlexTableColumns[]>;

    constructor(
        public table: PlexColumnDirective
    ) {

        if (this.table) {
            this.columns$ = this.table.columns$;
            this.table.setColumnHandler(this);
        }

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.selected) {
            this.estadoColumnas = { ...changes.selected.currentValue };
            this.change.emit({ ...this.estadoColumnas });
        }
    }

    onColumnChange() {
        this.change.emit({ ...this.estadoColumnas });
    }
}
