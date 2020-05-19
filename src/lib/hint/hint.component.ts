import { MatTooltip } from '@angular/material/tooltip';
import { Component, OnInit, AfterViewInit, Host, Self, Optional, Input, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
    template: `
        <span *ngIf="position" class="hint-container" [matTooltip]="content" [matTooltipPosition]="position">
            <plex-icon class="hint" [name]="icon" type="default"></plex-icon>
        </span>
    `
})
export class HintComponent implements OnInit, AfterViewInit {

    @Input()
    hostElement: HTMLElement;

    @Input() icon = 'help';

    @Input()
    content: string;

    @Input() position = 'above';

    constructor(
        private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.position = 'above';
    }

    ngAfterViewInit(): void {
        this.cdr.detectChanges();
    }

}
