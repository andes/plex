import { Component, Input, Renderer } from '@angular/core';

@Component({
    selector: 'plex-title',
    template: `
        <div class="plex-title d-flex flex-row justify-content-between align-items-center">
            <div class="plex-title-label {{ size }}"> {{ titulo }} </div>
            <div>
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class PlexTitleComponent {
    @Input() titulo: string;
    @Input() size: 'sm' | 'md' | 'xl' | 'lg' = 'lg';

    constructor() {

    }
}
