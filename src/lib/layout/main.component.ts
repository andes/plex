import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-layout-main',
    template: `
        <div class="plex-box" [ngClass]="{'plex-box-invert': type == 'invert'}">
          <ng-content select="header"></ng-content>
          <div class="plex-box-content">
              <ng-content></ng-content>
          </div>
        </div>
    `,
})
export class PlexLayoutMainComponent {
    @Input() type = '';
    constructor() {

    }
}
