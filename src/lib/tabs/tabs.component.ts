import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { PlexTabComponent } from './tab.component';

@Component({
    selector: 'plex-tabs',
    templateUrl: 'tabs.html'
})
export class PlexTabsComponent implements AfterViewInit {
    private _activeIndex = 0;
    public tabs: PlexTabComponent[] = [];

    @Input()
    get activeIndex(): number {
        return this._activeIndex;
    }
    set activeIndex(value: number) {
        this.tabs.forEach((t) => {
            t.active = false;
        });
        if (this.tabs.length > value) {
            this.tabs[value].active = true;
            this._activeIndex = value;
        } else {
            if (this.tabs.length) {
                this.tabs[0].active = true;
                this._activeIndex = 0;
            }
        }
    }

    // Eventos
    @Output() change = new EventEmitter();

    ngAfterViewInit() {
        if (this.tabs.length) {
            this.tabs[0].active = true;
        }
    }

    addTab(tab: PlexTabComponent) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }

    selectTab(tab: PlexTabComponent) {
        this.tabs.forEach((t) => {
            t.active = false;
        });
        tab.active = true;
        this._activeIndex = this.tabs.indexOf(tab);
        this.change.emit(this._activeIndex);
    }
}
