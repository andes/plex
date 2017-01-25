import { Component, OnInit } from '@angular/core';
import { Plex } from '../../../lib/core/service';

@Component({
    templateUrl: 'home.html',
})
export class HomeDemoComponent implements OnInit {
    constructor(public plex: Plex) { }

    ngOnInit() {
        this.plex.initView('Plex Components');
    }
}
