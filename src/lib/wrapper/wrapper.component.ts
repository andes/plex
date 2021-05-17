import { Component, Output, Input, EventEmitter, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'plex-wrapper',
    template: `
    <section class="hidden" [class.desplegado]="desplegado" responsive>
        <div class="btn-toggle">
            <plex-button type="info" size="sm" *ngIf="hasCollapse" [icon]="!desplegado ? 'chevron-down' : 'chevron-up'" (click)="toggle()" ariaLabel="desplegar más filtros"></plex-button>
            <span *ngIf="activeFilters && !desplegado" detach="top" hint="Hay filtros activos" hintType="warning" hintIcon="plus"></span>
        </div>
        <ng-content></ng-content>
        <ng-content select="[collapse]"></ng-content>
    </section>
`,
})

export class PlexWrapperComponent implements AfterViewInit {

    @Output() change = new EventEmitter<boolean>();
    @Input() activeFilters;

    desplegado = false;
    hasCollapse = false;

    constructor(
        private elRef: ElementRef,
        private ref: ChangeDetectorRef
    ) {

    }

    ngAfterViewInit() {
        this.hasCollapse = !!this.elRef.nativeElement.querySelector('section [collapse]');
        this.ref.detectChanges();
    }

    toggle() {
        this.desplegado = !this.desplegado;
        this.change.emit(this.desplegado);
    }
}
