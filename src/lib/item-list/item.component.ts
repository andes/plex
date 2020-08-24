import { map } from 'rxjs/operators';
import { Component, Input, QueryList, AfterViewInit, ContentChildren, ElementRef, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { PlexIconComponent } from '../icon/icon.component';
import { PlexBoolComponent } from '../bool/bool.component';
import { PlexBadgeComponent } from '../badge/badge.component';
import { PlexButtonComponent } from '../button/button.component';

@Component({
    selector: 'plex-item',
    template: `
        <section class="item" [class.selectable]="selectable" [class.selected]="selectable && selected">
            <div class="item-row">
                <div class="elementos-graficos">
                    <ng-content select="plex-bool"></ng-content>
                    <ng-content select="plex-icon"></ng-content>
                    <ng-content select="img"></ng-content>
                    <ng-content select="svg"></ng-content>
                </div>
                <div class="item-list"
                    [class.has-icon]="plexIcons?.length > 0 || imgs || svgs"
                    [class.has-checkbox]="plexBools?.length > 0"
                    >
                    <ng-content></ng-content>
                </div>
            </div>
            <div class="botonera">
                <div>
                    <ng-content select="plex-badge"></ng-content>
                </div>
                <div>
                    <ng-content select="plex-button"></ng-content>
                    <ng-content select="upload-file"></ng-content>
                    <ng-content select="plex-dropdown[icon]"></ng-content>
                </div>
            </div>
        </section>
    `
})
export class PlexItemComponent implements AfterViewInit {

    // Permite :hover y click()
    @Input() selectable = true;

    // Muestra efecto de selección
    @Input() selected = false;

    @ContentChildren(PlexIconComponent, { descendants: false }) plexIcons: QueryList<PlexIconComponent>;
    @ContentChildren(PlexBoolComponent, { descendants: false }) plexBools: QueryList<PlexBoolComponent>;
    @ContentChildren(PlexBadgeComponent, { descendants: false }) plexBadges: QueryList<PlexBadgeComponent>;
    @ContentChildren(PlexButtonComponent, { descendants: false }) plexButtons: QueryList<PlexButtonComponent>;

    public imgs = false;
    public svgs = false;

    hasIcons() {
        return this.plexIcons.length > 0 || this.imgs;
    }

    hasCheckbox() {
        return this.plexBools.length > 0;
    }

    hasBotonera() {
        return this.plexButtons.length > 0 || this.plexBadges.length > 0;
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
