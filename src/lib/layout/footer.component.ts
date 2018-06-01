import { Component, Input } from '@angular/core';

@Component({
  selector: 'plex-layout-footer',
  template: `
    <div class="row">
        <div class="col">
            <ng-content select="plex-button[position=left]"></ng-content>
        </div>
        <div class="col text-right">
            <ng-content select="plex-button[position=right]"></ng-content>
        </div>
    </div>
  `,
})
export class PlexFooterComponent {
  constructor() {
  }
}
