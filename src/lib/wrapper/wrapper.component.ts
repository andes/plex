import { Component, Output, EventEmitter, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'plex-wrapper',
    template: `
    <section class="hidden" [class.desplegado]="desplegado" responsive>
            <div class="btn-toggle">
                <plex-button type="info" size="sm" *ngIf="hasCollapse" [icon]="!desplegado ? 'chevron-down' : 'chevron-up'" (click)="toggle()"></plex-button>
                <span *ngIf="filled" detach="top" hint="Hay filtros activos" hintType="warning" hintIcon="plus"></span>
            </div>
        <ng-content></ng-content>
        <div (mouseover)="hasFilled()">
            <ng-content select="[collapse]"></ng-content>
        </div>
    </section>
`,
})

export class PlexWrapperComponent implements AfterViewInit {

    @Output() change = new EventEmitter<boolean>();

    desplegado = false;
    hasCollapse = false;
    filled = false;

    constructor(
        private elRef: ElementRef,
        private ref: ChangeDetectorRef,
    ) {

    }

    ngAfterViewInit() {
        this.hasCollapse = !!this.elRef.nativeElement.querySelector('section [collapse]');
        this.ref.detectChanges();
    }

    hasFilled() {
        this.filled = !!this.elRef.nativeElement.querySelector('section [collapse] div.full');
    }

    toggle() {
        this.desplegado = !this.desplegado;
        this.change.emit(this.desplegado);
    }
}
