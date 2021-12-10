import { PlexType } from './../core/plex-type.type';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-ribbon',
    template: `
    <div class="text-center {{position}} bg-{{type}}">
        <div class="ribbon">
            <div class="texto text-white p-1">
                {{ text }}
            </div>
        </div>
    </div>`
})

export class PlexRibbonComponent {
    @Input() type: PlexType = 'info';
    @Input() text = 'demo';
    @Input() position: 'top-left' | 'top-right' = 'top-left';
}
