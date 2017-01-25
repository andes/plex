import { Component, Input } from '@angular/core';
import { PlexTabsComponent } from './tabs.component';

@Component({
  selector: 'plex-tab',
   templateUrl: 'tab.html'
})
export class PlexTabComponent {
  @Input() label: string;
  @Input() icon: string;
  @Input() active: boolean;

  constructor(tabs: PlexTabsComponent) {
    tabs.addTab(this);
  }
}
