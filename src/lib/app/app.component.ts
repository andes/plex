import { Component } from '@angular/core';
import { Plex } from './../core/service';

@Component({
    selector: 'plex-app',
    templateUrl: 'app.html',
})
export class PlexAppComponent {
    constructor(public plex: Plex) { };
}
