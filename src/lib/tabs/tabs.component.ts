import {
    ViewChild,
    ContentChild,
    Component,
    OnInit,
    Input,
    forwardRef,
    ElementRef,
    Renderer
} from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    NgControl,
    NG_VALUE_ACCESSOR
} from '@angular/forms';
import {
    PlexTabComponent
} from './tab.component';

@Component({
    selector: 'plex-tabs',
    templateUrl: 'tabs.html'
})
export class PlexTabsComponent {

    tabs: PlexTabComponent[] = [];

    addTab(tab: PlexTabComponent) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }
    selectTab(tab: PlexTabComponent) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tab.active = true
    }

}