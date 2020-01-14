import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { PlexListComponent } from './list.component';
import { take } from 'rxjs/operators';

@Component({
    selector: 'plex-heading',
    template: `
    <div class="item-list-heading" [class.has-icon]="hasIcon" [class.has-checkbox]="hasCheckbox">
        <b *ngIf="hasCheckbox"></b>
        <b *ngIf="hasIcon"></b>
        <ng-content selector="label"></ng-content>
        <ng-content selector="badge"></ng-content>
        <ng-content selector="button"></ng-content>
    </div>
    `
})
export class PlexHeadingComponent {
    @Input() headings: any = {};
    @Input() titulo: string;
    @Input() subtitulo: string;
    @Input() size: 'sm' | 'md' | 'lg' = 'md';

    constructor(private parent: PlexListComponent, private ref: ChangeDetectorRef) {
        this.parent.hasCheckbox$.pipe(take(1)).subscribe(() => {
            this.hasCheckbox = true;
            this.ref.detectChanges();
        });

        this.parent.hasIcon$.pipe(take(1)).subscribe(() => {
            this.hasIcon = true;
            this.ref.detectChanges();
        });
    }

    public hasIcon = false;
    public hasCheckbox = false;

}
