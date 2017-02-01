import { Component } from '@angular/core';
import { SidebarItem } from './sidebar-item.class';
import { Plex } from '../core/service';

@Component({
  selector: 'plex-sidebar',
  templateUrl: 'sidebar.html'
})
export class SidebarComponent {
  get items(): Array<SidebarItem> {
    return this.plex.sidebarItems;
  }
  get staticItems(): Array<SidebarItem> {
    return this.plex.sidebarStaticItems;
  }

  constructor(public plex: Plex) {
  }
}
