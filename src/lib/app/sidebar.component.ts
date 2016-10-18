import { Component } from '@angular/core';
import { SidebarItem } from './sidebar-item.class'
import { PlexService } from '../core/service';

@Component({
  selector: 'plex-sidebar',
  templateUrl: 'sidebar.html'
})
export class SidebarComponent {
  get items(): Array<SidebarItem> {
    return this.plex.sidebarItems;
  }

  constructor(public plex: PlexService) {
  }
}
