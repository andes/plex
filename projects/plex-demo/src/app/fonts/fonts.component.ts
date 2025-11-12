import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Plex } from '@andes/plex';

@Component({
    templateUrl: 'fonts.html',
})
export class FontsDemoComponent implements OnInit {
    constructor(public plex: Plex) { }

    ngOnInit() {
    }
}
