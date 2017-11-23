import { Component, AfterViewInit, Input, Output, EventEmitter, ContentChild, ContentChildren, ViewChildren, forwardRef, QueryList, ElementRef, AfterContentInit } from '@angular/core';
import { PlexTabComponent } from './tab.component';

@Component({
    selector: 'plex-tabs',
    template: ` <ul class="nav nav-tabs">
                    <li *ngFor="let tab of tabs" (click)="selectTab(tab)" class="nav-item">
                        <a class="nav-link" [ngClass]="{active: tab.active}" plexRipples href="#" onclick="return false">
                            <i *ngIf="tab.icon" class="mdi mdi-{{tab.icon}}"></i>
                            <span *ngIf="tab.label">
                                {{tab.label}}
                            </span>
                        </a>
                    </li>
                </ul>
                <ng-content></ng-content>`,
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

    private renderTabs() {
        this.tabs = this.children.toArray();
        if (!this.tabs.some((tab) => tab.active) && this.tabs.length) {
            this.tabs[0].active = true;
        }
    }

    ngAfterContentInit() {
        this.renderTabs();
        this.children.changes.subscribe(() => { this.renderTabs(); });
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
