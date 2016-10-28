import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PlexService } from '../../../lib/core/service';
import { SidebarItem } from '../../../lib/app/sidebar-item.class';

@Component({
    templateUrl: 'home.html',
})
export class HomeDemoComponent implements OnInit {
    constructor(public plex: PlexService) { }

    ngOnInit() {
        this.plex.initView("Plex Components");
    }
}
