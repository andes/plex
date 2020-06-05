import { Plex } from '../../../lib/core/service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'help.html',
})
export class HelpDemoComponent implements OnInit {

    constructor(private plex: Plex) { }

    ngOnInit() {
    }
}
