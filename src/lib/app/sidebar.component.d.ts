import { SidebarItem } from './sidebar-item.class';
import { PlexService } from '../core/service';
export declare class SidebarComponent {
    plex: PlexService;
    items: Array<SidebarItem>;
    constructor(plex: PlexService);
}
