import { Component, Input } from '@angular/core';

@Component({
  selector: 'plex-layout-main',
  template: `
        <plex-box>
            <header>
                <ng-content select="header"></ng-content>
            </header>
            <ng-content></ng-content>
        </plex-box>
  `,
})
export class PlexLayoutMainComponent {
  constructor() {
  }
}
