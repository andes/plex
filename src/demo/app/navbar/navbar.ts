import { Plex } from './../../../lib/core/service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './navbar.html',
})
export class NavbarDemoComponent implements OnInit {
    constructor(public plex: Plex) { }

    ngOnInit(): void { }
}
