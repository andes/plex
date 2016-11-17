import { Component, Input } from '@angular/core';
import { PlexTabsComponent } from './tabs.component';

@Component({
  selector: 'plex-tab',
  template: `
     <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `
})
export class PlexTabComponent {
  @Input() title: string;
  @Input() active: boolean

  constructor(tabs: PlexTabsComponent) {
    tabs.addTab(this)
  }

}

