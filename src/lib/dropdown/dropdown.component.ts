import { Component, Input, HostBinding, HostListener, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Plex } from '../../lib/core/service';
import { MenuItem } from '../../lib/app/menu-item.class';

@Component({
    selector: 'plex-dropdown',
    templateUrl: 'dropdown.html'
})
export class PlexDropdownComponent implements OnInit, OnChanges {
    @Input() label: string;
    @Input() icon: string;
    @Input() open: boolean;
    @Input() items: Object[];
    @Input() @HostBinding('attr.disabled') disabled: boolean;

    public list = [];

    constructor(public plex: Plex) {
        this.open = false;
        this.disabled = false;
        this.list = this.items;
    }

    ngOnInit() {}

     ngOnChanges()  {
        this.list = this.items;
    }

    dropDown() {
      this.open = !this.open;
    }

}
