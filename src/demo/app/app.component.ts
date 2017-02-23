import { Component, OnInit } from '@angular/core';
import { Plex } from '../../lib/core/service';
import { MenuItem } from '../../lib/app/menu-item.class';

@Component({
  selector: 'plex-app-root',
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
      new MenuItem({ label: 'Inicio', icon: 'creation', route: '/inicio' }),
      new MenuItem({ label: 'Loader', icon: 'dots-horizontal', route: '/loader' }),
      new MenuItem({ label: 'Phone', icon: 'phone', route: '/phone' }),
      new MenuItem({ label: 'Bool', icon: 'checkbox-marked-outline', route: '/bool' }),
      new MenuItem({ label: 'Box', icon: 'selection', route: '/box' }),
      new MenuItem({ label: 'Button', icon: 'solid', route: '/button' }),
      new MenuItem({ label: 'DateTime', icon: 'calendar', route: '/datetime' }),
      new MenuItem({ label: 'Float', icon: 'numeric', route: '/float' }),
      new MenuItem({ label: 'Int', icon: 'numeric', route: '/int' }),
      new MenuItem({ label: 'Modal', icon: 'application', route: '/modal' }),
      new MenuItem({ label: 'Select', icon: 'format-list-bulleted', route: '/select' }),
      new MenuItem({ label: 'Tabs', icon: 'folder', route: '/tabs' }),
      new MenuItem({ label: 'Accordion', icon: 'view-day', route: '/accordion' }),
      new MenuItem({ label: 'Text', icon: 'alphabetical', route: '/text' }),
      new MenuItem({ label: 'Dropdown', icon: 'menu-right', route: '/dropdown' }),
      new MenuItem({ label: 'Tooltip', icon: 'tooltip', route: '/tooltip' }),
    ];
    this.plex.initStaticItems(items);
  }
}
