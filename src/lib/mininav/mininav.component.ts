import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
    selector: 'plex-mininav',
    template: `
        <section #miniNav [class.expanded]="expanded">
            <div>
                <ng-content></ng-content>
            </div>
            <nav class="plex-mininav-container">
                <ng-content select="ul[sup]"></ng-content>
                <ng-content select="ul[inf]"></ng-content>
            </nav>

            <!-- boton expandirNav -->
            <span *ngIf="resizable === true" class="nav-resizable-btn-wrapper" [class.resizable]="resizable" draggable="true">
                <hr class="divisor">
                <plex-button size="sm" (click)="expandirMininav()" type="link"
                            icon="{{ expanded ? 'pico-izquierda' : 'pico-derecha' }}">
                </plex-button>
            </span>
        </section>
    `,
})
export class PlexMininavComponent implements OnChanges {

    @Input() color: string;
    @Input() vHeight;
    @Input() resizable = true;
    @Input() expanded: boolean;
    @Input() mode: 'filled' | 'outlined' = 'filled';

    @ViewChild('miniNav', { static: true }) miniNav: ElementRef;

    constructor() { }

    ngOnChanges() {
        if (this.color && this.color.length > 0) {
            this.miniNav.nativeElement.style.setProperty('--nav-color', this.color);
        }
    }

    // Resize
    expandirMininav() {
        this.expanded = !this.expanded;
    }
}
