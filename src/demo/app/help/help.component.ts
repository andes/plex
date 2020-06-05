import { Plex } from '../../../lib/core/service';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'help.html',
})
export class HelpDemoComponent {

    constructor(private plex: Plex) { }

    ngOnInit() {
    }
}
