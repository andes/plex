import { Component, OnInit, Input, HostListener, Output, EventEmitter, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Plex } from '../core/service';

@Component({
    selector: 'plex-wrapper',
    template: `
    <section class="hidden" [class.desplegado]="desplegado" responsive>
        <plex-button class="btn-toggle" type="info" size="sm" *ngIf="hasCollapse"
            [icon]="!desplegado ? 'chevron-down' : 'chevron-up'" (click)="toggle()">
        </plex-button>
        <ng-content></ng-content>
        <ng-content select="[collapse]"></ng-content>
    </section>
`,
})

export class PlexWrapperComponent implements AfterViewInit {

    @Output() change = new EventEmitter<Boolean>();

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
