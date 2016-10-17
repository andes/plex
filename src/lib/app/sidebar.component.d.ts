import { SidebarItem } from './sidebar-item.class';
import { PlexService } from '../core/service';
export declare class SidebarComponent {
    plex: PlexService;
    readonly items: Array<SidebarItem>;
    constructor(plex: PlexService);
}
