import { Component } from '@angular/core';
import { PlexService } from '../lib/core/service';

@Component({
    selector: 'demo',
    template: '<plex-app></plex-app>',
})
export class DemoComponent {
    // Hace que PlexService sea un singleton para toda la aplicación
    constructor(plex: PlexService) { }
}
