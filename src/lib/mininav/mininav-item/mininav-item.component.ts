import { Component, Input } from '@angular/core';

@Component({
    selector: 'plex-mininav-item',
    templateUrl: './mininav-item.component.html',
})
export class PlexMininavItemComponent {

    @Input() titulo;
    @Input() subtitulo;
    @Input() size;
    @Input() color;
    @Input() icono;
    @Input() target;
    @Input() tooltip;
    @Input() selected = false;

    constructor() {
    }

    jumpToId(fragment) {
        window.location.hash = fragment;
        if (fragment) {
            const element = document.querySelector('[name="' + fragment + '"]');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

}
