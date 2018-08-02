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
    this.plex.updateTitle('Plex: UI/UX para ANDES');

    const menu: DropdownItem[] = [
      { label: 'Accordion', icon: 'view-day', route: '/accordion' },
      { label: 'Bool', icon: 'checkbox-marked-outline', route: '/bool' },
      { label: 'Box', icon: 'selection', route: '/box' },
      { label: 'Button', icon: 'solid', route: '/button' },
      { label: 'DateTime', icon: 'calendar', route: '/datetime' },
      { label: 'Dropdown', icon: 'menu-right', route: '/dropdown' },
      { label: 'Float', icon: 'numeric', route: '/float' },
      { label: 'Int', icon: 'numeric', route: '/int' },
      { label: 'Loader', icon: 'dots-horizontal', route: '/loader' },
      { label: 'Modal', icon: 'application', route: '/modal' },
      { label: 'Phone', icon: 'phone', route: '/phone' },
      { label: 'Ribbon', icon: 'ribbon', route: '/ribbon' },
      { label: 'Select', icon: 'format-list-bulleted', route: '/select' },
      { label: 'Tabs', icon: 'folder', route: '/tabs' },
      { label: 'Text', icon: 'alphabetical', route: '/text' },
      { label: 'Tooltip', icon: 'tooltip', route: '/tooltip' },
      { label: 'Wizard', icon: 'auto-fix', route: '/wizard' },
    ];
    this.plex.updateMenu(menu);
    this.plex.updateAppStatus({ API: 'OK' });
    this.plex.updateUserInfo({
      'usuario': {
        'nombreCompleto': 'Haruki Murakami',
        'nombre': 'Haruki',
        'apellido': 'Murakami',
        'username': 26108063,
        'documento': 26108063
      },
      'organizacion': {
        '_id': '57e9670e52df311059bc8964',
        'nombre': 'HOSPITAL PROVINCIAL NEUQUEN - DR. EDUARDO CASTRO RENDON',
        'id': '57e9670e52df311059bc8964'
      }
    });
  }
}
