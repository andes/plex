import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: '[plex-mininav-item]', // tslint:disable-line
    template: `
        <plex-label titulo="{{ titulo }}" subtitulo="{{ subtitulo }}" icon="{{ icono }}" type="" size="{{ size }}" case="capitalize">
        </plex-label>
    `,
})

export class PlexMininavItemComponent {
    @HostBinding('class.plex-mininav-item') estilos = true;

    @Input() titulo;
    @Input() subtitulo;
    @Input() size;
    @Input() color;
    @Input() icono;
    @Input() target;
    @Input() link;
    @Input() selected = false;

    constructor(
        private router: Router,
    ) { }

    @HostListener('click') jumpToId() {
        if (this.target) {
            const element = document.querySelector('[anchor="' + this.target + '"]');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        if (this.link) {
            this.router.navigate([this.link]);
        }
    }
}
