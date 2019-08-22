import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'plex-list',
    template: `
    <div [ngClass]="{'striped': striped, 'selectable': selectable, 'full-width': fullWidth}">
        <ng-content></ng-content>
    </div>
    `
})

export class PlexListComponent implements OnInit {

    @Input() striped = false;
    @Input() selectable = false;
    @Input() fullWidth = false;

    ngOnInit() {
    }

}
