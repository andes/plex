import { Component, OnInit, Input, HostListener, Output, EventEmitter, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Plex } from '../core/service';

export interface IPlexTableColumns {
    key: boolean;
    label: string;
}

@Component({
    selector: 'plex-table',
    template: `
    <section class="d-flex flex-column">
        <plex-title main size="{{ titleSize }}" titulo="{{ titulo }}">
            <ng-content></ng-content>
            <ng-content select="plex-badge"></ng-content>
            <plex-dropdown icon="format-list-checks" type="info" size="sm" class="d-inline-block ml-1" [right]="true">
                <plex-grid cols="3">
                    <ng-container *ngFor="let column of columns">
                        <plex-bool label="{{ column.label }}" [(ngModel)]="column.key">
                        </plex-bool>
                    </ng-container>
                </plex-grid>
            </plex-dropdown>
            <ng-content select="plex-button"></ng-content>
            <ng-content select="plex-info"></ng-content>
        </plex-title>
        <ng-content select="table"></ng-content>
    </section>
`,
})

export class PlexTableComponent {

    @Input() titleSize: string;
    @Input() titulo: string;
    @Input() columns: IPlexTableColumns[];

    public columnsModulo = new BehaviorSubject<IPlexTableColumns>({} as any);

    constructor(

    ) {

    }
}