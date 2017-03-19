import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: 'fonts.html',
})
export class FontsDemoComponent implements OnInit {
    constructor(public plex: Plex) { }

    ngOnInit() {
    }
}
