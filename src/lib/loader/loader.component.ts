import { Component, Input, Renderer2 } from '@angular/core';

@Component({
    selector: 'plex-loader',
    template: ` <div class="loader-container">
                <div *ngIf="type == '' || type == 'ball-pulse'" class="loader">
                    <div class="{{type}}">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div *ngIf="type == 'ball-pulse-sync'" class="loader">
                    <div class="{{type}}">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div *ngIf="type == 'ball-beat'" class="loader">
                    <div class="ball-beat">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div *ngIf="type == 'linear'" class="line-loader">
                </div>
            </div>
            `,
})
export class PlexLoaderComponent {
    // Propiedades
    @Input() type: string;

    constructor(renderer: Renderer2) {
        this.type = '';
    }
}
