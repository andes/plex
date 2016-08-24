import { Component } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: 'app/template/sidebar.html'
})
export class SidebarComponent {

  public menu: Array<any>;

  constructor(){
    // definimos los elementos del menu
    this.menu = [
      {
        'titulo': 'Dashboard',
        'icon': 'fa fa-dashboard',
        'accion': '/'
      },

      {
        'titulo': 'Usuarios',
        'icon': '',
        'accion': '/'
      }
    ]
  }
}
