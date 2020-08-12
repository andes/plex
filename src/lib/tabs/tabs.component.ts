import { Component, AfterViewInit, Input, Output, EventEmitter, ContentChild, ContentChildren, ViewChildren, forwardRef, QueryList, ElementRef, AfterContentInit, ViewChild } from '@angular/core';
import { PlexTabComponent } from './tab.component';

@Component({
    selector: 'plex-tabs',
    template: ` <section justify>
                    <ul #container class="nav nav-tabs" [ngClass]="size">
                        <li *ngFor="let tab of tabs" (click)="selectTab(tab)" class="nav-item nav-item-{{tab.color}}" [ngClass]="{'active': tab.active, 'icon': tab.icon && !tab.label}">
                            <a class="nav-link" [ngClass]="{active: tab.active}" plexRipples onclick="return false">
                                <i *ngIf="tab.icon" class="mdi mdi-{{tab.icon}}"></i>
                                <span *ngIf="tab.label">
                                    {{ tab.label  }}
                                </span>
                                <button *ngIf="tab.allowClose" type="button" class="close" (click)="closeTab(tab)"><i class="mdi mdi-close"></i></button>
                            </a>
                        </li>
                    </ul>
                    <div justify="end">
                        <ng-content select="plex-badge"></ng-content>
                        <ng-content select="plex-dropdown"></ng-content>
                        <ng-content select="plex-button"></ng-content>
                        <ng-content select="plex-help"></ng-content>
                    </div>
                </section>
                <ng-content></ng-content>

                `,
})
export class PlexTabsComponent implements AfterContentInit {
    private _activeIndex = 0;
    public tabs: PlexTabComponent[] = [];
    @ContentChildren(PlexTabComponent) children: QueryList<PlexTabComponent>;
    @ViewChild('container', { static: true }) container: ElementRef;

    @Input() size;
    @Input()
    get activeIndex(): number {
        return this._activeIndex;
    }
    set activeIndex(value: number) {
        this._activeIndex = value;
        this.doActiveTab(this._activeIndex);
        // this.tabs.forEach((t) => {
        //     if (t.active) {
        //         t.toggle.emit(false);
        //     }
        //     t.active = false;
        // });

        // if (this.tabs.length) {
        //     const tab = this.tabs[Math.min(this.tabs.length - 1, this._activeIndex)];
        //     tab.active = true;
        //     this.change.emit(this._activeIndex);
        //     tab.toggle.emit(true);
        // }
    }

    // Eventos
    @Output() change = new EventEmitter();
    @Output() close = new EventEmitter();

    private renderTabs() {
        this.tabs = this.children.toArray();
        if (this.tabs.length) {
            this.selectTab(this.tabs[Math.min(this.tabs.length - 1, this._activeIndex)]);
        }
    }

    ngAfterContentInit() {
        setTimeout(() => {
            this.renderTabs();
            this.children.changes.subscribe(() => { this.renderTabs(); });
        });
    }

    selectTab(tab: PlexTabComponent) {
        setTimeout(() => {
            this._activeIndex = this.tabs.indexOf(tab);
            this.doActiveTab(this._activeIndex);
            // this.tabs.forEach((t) => {
            //     if (t.active) {
            //         t.toggle.emit(false);
            //     }
            //     t.active = false;
            // });
            // tab.active = true;
            // this.change.emit(this._activeIndex);
            // tab.toggle.emit(true);

            // // Focus tab header
            // const tabHeader = this.container.nativeElement.children[this._activeIndex];
            // if (tabHeader) {
            //     tabHeader.scrollIntoViewIfNeeded ? tabHeader.scrollIntoViewIfNeeded() : tabHeader.scrollIntoView();
            // }
        });
    }

    closeTab(tab: PlexTabComponent) {
        this.close.emit(this.tabs.indexOf(tab));
    }

    private doActiveTab(index: number) {
        this.tabs.forEach((t) => {
            if (t.active) {
                t.toggle.emit(false);
            }
            t.active = false;
        });
        if (this.tabs.length) {
            const tab = this.tabs[index];
            tab.active = true;
            this.change.emit(this._activeIndex);
            tab.toggle.emit(true);

            // Focus tab header
            const tabHeader = this.container.nativeElement.children[this._activeIndex];
            if (tabHeader) {
                tabHeader.scrollIntoViewIfNeeded ? tabHeader.scrollIntoViewIfNeeded() : tabHeader.scrollIntoView();
            }
        }
    }
}
