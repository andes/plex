import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'plex-mininav',
    templateUrl: './mininav.component.html',
})
export class PlexMininavComponent implements OnInit {

    @Input() color;

    constructor() { }

    ngOnInit(): void {
    }

}
