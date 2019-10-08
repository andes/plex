import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-card',
    template: `
    <div class="card">
        <div class="card-header">
        <!--plex-title titulo="{{ titulo }}"></plex-title-->
        <div class="plex-title d-flex flex-row justify-content-between align-items-center">
            <div class="plex-title-label sm"> {{ titulo }} </div>
            <div>
                <ng-content></ng-content>
            </div>
        </div>
        </div>
        <div class="card-body">
        <ng-content></ng-content>        
        </div>
    </div>
    `
})
export class PlexCardComponent {
    @Input() titulo: string;

    constructor() {
    }
}

