import { Injectable } from '@angular/core';
import { SidebarItem } from '../app/sidebar-item.class'
import { Title } from '@angular/platform-browser';

@Injectable()
export class PlexService {
    public sidebarItems: Array<SidebarItem>;
    public sidebarStaticItems: Array<SidebarItem>;

    constructor(private titleService: Title) {
    }

    initView(title: string, sidebar?: Array<SidebarItem>) {
        this.titleService.setTitle(title);
        this.sidebarItems = sidebar;
    }    

    initStaticItems(sidebar: Array<SidebarItem>) {
        this.sidebarStaticItems = sidebar;
    }
}