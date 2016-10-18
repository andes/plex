import { Component, OnInit } from '@angular/core';
import { PlexService } from '../../../lib/core/service';
import { SidebarItem } from '../../../lib/app/sidebar-item.class';

@Component({
    templateUrl: 'home.html',
})
export class HomeDemoComponent implements OnInit {
    constructor(public plex: PlexService) { }

    ngOnInit() {
        let items = [
            new SidebarItem('Punto de inicio', 'mdi mdi-arrow-compress-all', '/inicio'),
            new SidebarItem('Buscar', 'mdi mdi-magnify', '/text'),
            new SidebarItem('Función', 'mdi mdi-arrow-compress-all', function(){
                alert(1);
            })
        ];
        //   {
        //     'titulo': 'Punto de inicio',
        //     'icon': 'mdi mdi-arrow-compress-all',
        //     'accion': '/'
        //   },
        //   {
        //     'titulo': 'Buscar',
        //     'icon': 'mdi mdi-magnify',
        //     'accion': '/'
        //   },
        //   {
        //     'titulo': 'Dashboard',
        //     'icon': 'mdi mdi-chart-bar',
        //     'accion': '/'
        //   }
        // ]

        this.plex.initView("Plex Components", items);
    }
}
