import { map } from 'rxjs/operators';
import { Component, Input, QueryList, AfterViewInit, ContentChildren, ElementRef, ChangeDetectorRef } from '@angular/core';
import { PlexIconComponent } from '../icon/icon.component';
import { PlexBoolComponent } from '../bool/bool.component';

@Component({
    selector: 'plex-item',
    template: `
        <div class="item-list"
             [class.has-icon]="plexIcons?.length > 0 || imgs || svgs"
             [class.has-checkbox]="plexBools?.length > 0"
             [class.selected]="selected"
        >
            <ng-content select="plex-bool"></ng-content>
            <ng-content select="img"></ng-content>
            <ng-content select="plex-icon"></ng-content>
            <ng-content select="svg"></ng-content>

            <ng-content></ng-content>
            <div class="botonera">
                <ng-content select="plex-badge"></ng-content>
                <ng-content select="plex-button"></ng-content>
                <ng-content select="plex-dropdown[icon]"></ng-content>
                <ng-content select="upload-file"></ng-content>
            </div>
        </div>
    `
})
export class PlexItemComponent implements AfterViewInit {
    @Input() selected = false;

    @ContentChildren(PlexIconComponent, { descendants: false }) plexIcons: QueryList<PlexIconComponent>;
    @ContentChildren(PlexBoolComponent, { descendants: false }) plexBools: QueryList<PlexBoolComponent>;

    public imgs = false;
    public svgs = false;

    @Input() botonera = true;
    @Input() badges = true;

    hasIcons() {
        return this.plexIcons.length > 0 || this.imgs;
    }

    hasCheckbox() {
        return this.plexBools.length > 0;
    }

    ngAfterViewInit() {
        this.imgs = !!this.elRef.nativeElement.querySelector('img');

        const elementos = this.elRef.nativeElement.querySelectorAll('.item-list > svg');
        this.svgs = elementos.length > 0;

        this.ref.detectChanges();
    }

    constructor(
        private elRef: ElementRef,
        private ref: ChangeDetectorRef
    ) {

    }
}
