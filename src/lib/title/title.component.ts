import { Component, Input, Renderer } from '@angular/core';

@Component({
    selector: 'plex-title',
    template: `
        <div class="plex-title d-flex flex-row justify-content-between align-items-center" responsive>
            <div class="plex-title-label {{ size }}"> {{ titulo }} </div>
            <div class="title-content">
                <ng-content></ng-content>
            </div>
        </div>
        <div>
            <ng-content select="plex-tabs"></ng-content>
            <ng-content select="plex-wrapper"></ng-content>
        </div>
    `
})
export class PlexTitleComponent {
    @Input() titulo: string;
    @Input() size: 'sm' | 'md' | 'xl' | 'lg' = 'lg';

    constructor() {

    }
}
