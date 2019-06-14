import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'plex-list',
    templateUrl: 'list.html',
    styleUrls: ['plex-list.scss']
})

export class PlexListComponent {

    @Input() striped = false;

    ngOnInit() {
    }

}
