import { Component, AfterViewInit, Input, Output, EventEmitter, ContentChild, ContentChildren, ViewChildren, forwardRef, QueryList, ElementRef, AfterContentInit } from '@angular/core';
import { PlexTabComponent } from './tab.component';

@Component({
    selector: 'plex-tabs',
    templateUrl: 'tabs.html',
})
export class PlexTabsComponent implements AfterContentInit {
    private _activeIndex = 0;
    public tabs: PlexTabComponent[] = [];
    @ContentChildren(PlexTabComponent) children: QueryList<PlexTabComponent>;

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

    ngAfterContentInit() {
        this.tabs = this.children.toArray();
        if (this.tabs.length) {
            this.tabs[0].active = true;
        }
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
