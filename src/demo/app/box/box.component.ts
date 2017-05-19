import { Component, OnInit } from '@angular/core';
import { DropdownItem } from './../../../lib/dropdown/dropdown-item.inteface';

@Component({
    templateUrl: 'box.html',
})
export class BoxDemoComponent implements OnInit {
    public propiedad1: string;
    public items: DropdownItem[];

    ngOnInit() {
    }
}
