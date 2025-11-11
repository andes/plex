import { Component, OnInit } from '@angular/core';
import { DropdownItem } from '@andes/plex';

@Component({
    templateUrl: 'box.html',
})
export class BoxDemoComponent implements OnInit {
    public propiedad1: string;
    public items: DropdownItem[];

    ngOnInit() {
    }
}
