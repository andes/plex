import { Component, OnInit } from '@angular/core';
import { Plex } from '../../lib/core/service';
import { SidebarItem } from '../../lib/app/sidebar-item.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Hace que PlexService sea un singleton para toda la aplicación
  constructor(public plex: Plex) { }

  ngOnInit() {
    this.loadSideBar();
  }

  loadSideBar() {
    let items = [
      new SidebarItem('Inicio', 'creation', '/inicio'),
      new SidebarItem('Bool', 'checkbox-marked-outline', '/bool'),
      new SidebarItem('Box', 'selection', '/box'),
      new SidebarItem('Button', 'solid', '/button'),
      new SidebarItem('DateTime', 'calendar', '/datetime'),
      new SidebarItem('Float', 'numeric', '/float'),
      new SidebarItem('Int', 'numeric', '/int'),
      new SidebarItem('Modal', 'application', '/modal'),
      new SidebarItem('Select', 'format-list-bulleted', '/select'),
      new SidebarItem('Tabs', 'folder', '/tabs'),
      new SidebarItem('Text', 'alphabetical', '/text'),
    ];
    this.plex.initStaticItems(items);
  }
}
