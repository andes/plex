import {
  Component
} from '@angular/core';
import {
  PlexService
} from '../../lib/core/service';
import {
  SidebarItem
} from '../../lib/app/sidebar-item.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works4!';

  // Hace que PlexService sea un singleton para toda la aplicación
  constructor(public plex: PlexService) {}
  ngOnInit() {
    //Cargo el listado de componentes
    this.loadSideBar();
  }

  loadSideBar() {
    let items = [
      new SidebarItem('Plex-Bool', 'mdi mdi-arrow-compress-all', '/bool'),
      new SidebarItem('Plex-Box', 'mdi mdi-arrow-compress-all', '/box'),
      new SidebarItem('Plex-Button', 'mdi mdi-arrow-compress-all', '/button'),
      new SidebarItem('Plex-Float', 'mdi mdi-arrow-compress-all', '/float'),
      new SidebarItem('Plex-Int', 'mdi mdi-arrow-compress-all', '/int'),
      new SidebarItem('Plex-Select', 'mdi mdi-arrow-compress-all', '/select'),
      new SidebarItem('Plex-Tab', 'mdi mdi-arrow-compress-all', '/tabs'),
      new SidebarItem('Plex-Text', 'mdi mdi-arrow-compress-all', '/text'),
  ];

    this.plex.initView("Plex Components", items);

  }

}