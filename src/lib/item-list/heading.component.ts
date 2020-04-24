import { Component, ChangeDetectorRef, Input } from '@angular/core';

@Component({
    selector: 'plex-heading',
    template: `
    <div class="item-list-heading" [class.sticky]="sticky" [class.has-icon]="hasIcon" [class.has-checkbox]="hasCheckbox" [class.has-botonera]="hasBotonera">
        <ng-content selector="label"></ng-content>
    </div>
    `
})
export class PlexHeadingComponent {
    @Input() sticky = false;

    constructor(
        private ref: ChangeDetectorRef
    ) {
    }

    public hasIcon = false;
    public hasCheckbox = false;
    public hasBotonera = false;

    setSticky(value: boolean) {
        this.sticky = value;
        this.ref.detectChanges();
    }

    setIcon(value: boolean) {
        this.hasIcon = value;
        this.ref.detectChanges();
    }

    setCheckbox(value: boolean) {
        this.hasCheckbox = value;
        this.ref.detectChanges();
    }

    setBotonera(value: boolean) {
        this.hasBotonera = value;
        this.ref.detectChanges();
    }
}
