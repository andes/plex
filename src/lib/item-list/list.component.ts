import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'plex-list',
    templateUrl: 'list.html',
    styleUrls: ['plex-list.scss']
})

export class PlexListComponent implements OnInit {

    @Input() striped = false;
    @Input() selectable = false;

    ngOnInit() {
    }

}
