import { Component } from '@angular/core';

@Component({
    selector: 'plex-card',
    template: `

    <div class="card p-4 d-flex flex-column justify-content-center text-center">
        <ng-content select="plex-badge"></ng-content>
        <ng-content select="plex-label"></ng-content>
        <ng-content select="plex-button"></ng-content>
    </div>
    `,
})

export class PlexCardComponent {


    constructor() {
    }

}
