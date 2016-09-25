// AngularJS
import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar.component';

@Component({
    moduleId: module.id,
    selector: 'plex-app',
    templateUrl: 'app.html',
    directives: [SidebarComponent]
})
export class PlexAppComponent {
}
