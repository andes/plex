import { MatTooltip } from '@angular/material/tooltip';
import { Component, OnInit, AfterViewInit, Host, Self, Optional, Input, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
    template: `
        <span *ngIf="position" class="tooltip-hint-container" [matTooltip]="content" [matTooltipPosition]="position">
            <plex-icon class="tooltip-hint" name="help" type="default"></plex-icon>
        </span>
    `
})
export class TooltipHintComponent implements OnInit, AfterViewInit {

    @Input()
    hostElement: HTMLElement;

    @Input()
    content: string;

    @Input() position = 'above';

    constructor(
        @Optional() @Host() @Self() private matTooltip: MatTooltip,
        private element: ElementRef,
        private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.position = 'above';
    }

    ngAfterViewInit(): void {
        this.cdr.detectChanges();
    }

}
