import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Plex } from '../../../lib/core/service';
import { SidebarItem } from '../../../lib/app/sidebar-item.class';

@Component({
    templateUrl: 'fonts.html',
})
export class FontsDemoComponent implements OnInit {
    constructor(public plex: Plex) { }

    ngOnInit() {
    }
}
