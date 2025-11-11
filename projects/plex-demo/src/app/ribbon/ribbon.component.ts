import { PlexType } from '@andes/plex/lib/core/plex-type.type';
import { Component } from '@angular/core';

@Component({
    templateUrl: './ribbon.html',
    styles: [`
        plex-ribbon {
            position: absolute;
            top: -55px !important;
            left: 5px;
        }
    `]
})
export class RibbonDemoComponent {

    types: PlexType[] = ['info', 'success', 'danger', 'warning'];
    ribbonType = 'info';
    key = 0;

    cambiarType() {
        if (this.key < this.types.length - 1) {
            this.key++;
        } else {
            this.key = 0;
        }
        this.ribbonType = this.types[this.key];
    }
}
