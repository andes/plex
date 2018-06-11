import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-layout',
    template: `
    <section>
        <div class="row">
            <div class="col-{{ main }}">
                <ng-content select="plex-layout-main"></ng-content>
            </div>
            <div class="col-{{ maxcolumns - main }}" *ngIf="main < maxcolumns">
                <ng-content select="plex-layout-sidebar"></ng-content>
            </div>
        </div>
    </section>
    <ng-content select="plex-layout-footer"></ng-content>
  `,
})
export class PlexLayoutComponent {
    public maxcolumns = 12;
    @Input() main = 12;

    constructor() {
    }
}
