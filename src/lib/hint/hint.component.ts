import { PlexType } from '../core/plex-type.type';
import { Component, OnInit, AfterViewInit, Host, Self, Optional, Input, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'plex-hint',
    template: `
        <a (click)="$event.preventImmediatePropagation()" href="javascript:void(0)" *ngIf="position" class="hint-container" [matTooltip]="content" [matTooltipPosition]="position">
            <plex-icon class="hint" [name]="icon" type="default"></plex-icon>
        </a>
    `
})
export class HintComponent implements OnInit, AfterViewInit {

    @Input()
    hostElement: HTMLElement;

    @Input()
    hintType: PlexType = 'default';


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
