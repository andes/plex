import { OnInit } from '@angular/core';
import { PlexService } from '../../lib/core/service';
export declare class HomeDemoComponent implements OnInit {
    plex: PlexService;
    constructor(plex: PlexService);
    ngOnInit(): void;
}
