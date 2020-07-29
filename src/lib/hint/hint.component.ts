import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PlexType } from '../core/plex-type.type';

@Component({
    selector: 'plex-hint',
    template: `
        <a href="javascript:void(0)" *ngIf="position && content" class="hint-container" [matTooltip]="content" [matTooltipPosition]="position">
            <plex-icon class="hint {{ hintType }}" [name]="hintIcon" type="default"></plex-icon>
        </a>
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
