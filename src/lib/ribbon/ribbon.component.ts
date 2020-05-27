import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'plex-ribbon',
    template: `
    <div class="text-center p-1 {{position}} bg-{{type}}">
        <div class="ribbon">
            <div class="texto text-white p-1">
                {{ text }}
            </div>
        </div>
    </div>`
})

export class PlexRibbonComponent {
    @Input() type = 'info';
    @Input() text = 'demo';
    @Input() position: 'top-left' | 'top-right' = 'top-left';

    constructor(renderer: Renderer2) {
        this.type = 'info';
    }
}
