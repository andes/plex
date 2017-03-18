import { Component, Input, HostBinding, HostListener, Output } from '@angular/core';
import { Plex } from '../../lib/core/service';
import { DropdownItem } from './dropdown-item.inteface';

@Component({
    selector: 'plex-dropdown',
    templateUrl: 'dropdown.html'
})
export class PlexDropdownComponent {
    @Input() label: string;
    @Input() icon: string;
    @Input() open: boolean;
    @Input() items: DropdownItem[];
    @Input() type: string;
    @Input() @HostBinding('attr.disabled') disabled: boolean;

    constructor(public plex: Plex) {
        this.open = false;
        this.disabled = false;
        this.type = 'secondary';
    }
}
