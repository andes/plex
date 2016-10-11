import { SidebarItem } from '../app/sidebar-item.class';
import { Title } from '@angular/platform-browser';
export declare class PlexService {
    private titleService;
    sidebarItems: Array<SidebarItem>;
    constructor(titleService: Title);
    initView(title: string, sidebar: Array<SidebarItem>): void;
}
