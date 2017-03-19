import { Component, OnInit } from '@angular/core';
import { Plex } from '../../lib/core/service';
import { DropdownItem } from './../../lib/dropdown/dropdown-item.inteface';

@Component({
  selector: 'plex-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  // Hace que PlexService sea un singleton para toda la aplicación
  constructor(public plex: Plex) { }

  ngOnInit() {
    const menu: DropdownItem[] = [
      { label: 'Inicio', icon: 'creation', route: '/inicio' },
      { label: 'Loader', icon: 'dots-horizontal', route: '/loader' },
      { label: 'Phone', icon: 'phone', route: '/phone' },
      { label: 'Bool', icon: 'checkbox-marked-outline', route: '/bool' },
      { label: 'Box', icon: 'selection', route: '/box' },
      { label: 'Button', icon: 'solid', route: '/button' },
      { label: 'DateTime', icon: 'calendar', route: '/datetime' },
      { label: 'Float', icon: 'numeric', route: '/float' },
      { label: 'Int', icon: 'numeric', route: '/int' },
      { label: 'Modal', icon: 'application', route: '/modal' },
      { label: 'Select', icon: 'format-list-bulleted', route: '/select' },
      { label: 'Tabs', icon: 'folder', route: '/tabs' },
      { label: 'Accordion', icon: 'view-day', route: '/accordion' },
      { label: 'Text', icon: 'alphabetical', route: '/text' },
      { label: 'Dropdown', icon: 'menu-right', route: '/dropdown' },
      { label: 'Tooltip', icon: 'tooltip', route: '/tooltip' },
    ];
    this.plex.initView('ANDES', menu);
  }
}
