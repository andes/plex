import { Component, Input, OnInit, ContentChild, TemplateRef, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'plex-list',
    template: `
    <div [class.striped]="striped">
        <ng-content></ng-content>
        <!--
        <ng-container *ngFor="let item of items">
            <plex-item>
                <ng-container *ngTemplateOutlet="template; context: { item: item }" ></ng-container>
            </plex-item>
        </ng-container>
        -->
    </div>
    `
})

export class PlexListComponent {
    private hasIcon = false;
    private hasCheckbox = false;

    _hasIcon = new Subject();
    hasIcon$ = this._hasIcon.asObservable().pipe(
        filter(flag => !!flag)
    );

    _hasCheckbox = new Subject();
    hasCheckbox$ = this._hasCheckbox.asObservable().pipe(
        filter(flag => !!flag)
    );

    @Input() striped = true;

    @Input() items = [];

    setIcon(value) {
        this.hasIcon = this.hasIcon || value;
        this._hasIcon.next(this.hasIcon);
    }

    getIcon() {
        return this.hasIcon;
    }

    setCheckbox(value) {
        this.hasCheckbox = this.hasCheckbox || value;
        this._hasCheckbox.next(this.hasCheckbox);
    }

    getCheckbox() {
        return this.hasCheckbox;
    }

}
