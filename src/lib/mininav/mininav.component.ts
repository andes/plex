import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
    selector: 'plex-mininav',
    templateUrl: './mininav.component.html',
})
export class PlexMininavComponent implements OnChanges {

    @Input() color: string;
    @Input() vHeight;
    @Input() resizable = true;
    @Input() expanded: boolean;
    @Input() mode: 'filled' | 'outlined' = 'filled';

    @ViewChild('miniNav', { static: true }) miniNav: ElementRef;

    constructor() { }

    ngOnChanges() {
        if (this.color && this.color.length > 0) {
            this.miniNav.nativeElement.style.setProperty('--nav-color', this.color);
        }

        if (this.color && this.color.length > 0 && this.mode === 'outlined') {
            this.miniNav.nativeElement.style.setProperty('--nav-color', this.color + '20');
        }
    }

    // Resize
    //expandir() {
    //    this.expanded = !this.expanded;
    //}
}
