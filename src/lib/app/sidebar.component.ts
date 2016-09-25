import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'plex-sidebar',
  templateUrl: 'sidebar.html'
})
export class SidebarComponent {
  public menu: Array<any>;

  constructor() {
    // definimos los elementos del menu
    this.menu = [
      {
        'titulo': 'Punto de inicio',
        'icon': 'mdi mdi-arrow-compress-all',
        'accion': '/'
      },
      {
        'titulo': 'Buscar',
        'icon': 'mdi mdi-magnify',
        'accion': '/'
      },
      {
        'titulo': 'Dashboard',
        'icon': 'mdi mdi-chart-bar',
        'accion': '/'
      }
    ]
  }
}
