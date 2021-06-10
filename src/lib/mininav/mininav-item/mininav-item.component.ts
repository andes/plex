import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'plex-mininav-item',
    templateUrl: './mininav-item.component.html',
})
export class PlexMininavItemComponent implements OnInit {

    @Input() target;
    @Input() color;


    constructor() { }

    ngOnInit(): void {
    }

}
