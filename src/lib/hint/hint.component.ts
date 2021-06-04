import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PlexType } from '../core/plex-type.type';

@Component({
    selector: 'plex-hint',
    template: `
        <span tabindex="0" *ngIf="position && content" class="hint-container detach-{{detach}}" [matTooltip]="content" [matTooltipPosition]="position" [matTooltipShowDelay]="0">
            <plex-icon class="hint {{ hintType }}" [name]="hintIcon" size="xs" type="light"></plex-icon>
        </span>
    `
})
export class HintComponent implements OnInit {

    @Input()
    hostElement: HTMLElement;

    @Input()
    hintType: PlexType;

    @Input()
    hintIcon = 'help';

    @Input()
    content: string;

    @Input()
    position = 'above';

    @Input()
    detach: '' | 'both' | 'right' | 'top';

    constructor() { }

    ngOnInit() {
        this.position = 'above';
    }

    // Si el elemento que tiene la directiva [hint] tiene un evento (click), este se ejecutará, guste o no.
    @HostListener('click', ['$event']) onClick() {
        this.hostElement.click();
    }
}
