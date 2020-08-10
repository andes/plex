import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PlexType } from '../core/plex-type.type';

@Component({
    selector: 'plex-hint',
    template: `
        <a href="javascript:void(0)" *ngIf="position && content" class="hint-container" [matTooltip]="content" [matTooltipPosition]="position">
            <plex-icon class="hint {{ hintType }}" [name]="icon" type="default"></plex-icon>
        </a>
    `
})
export class HintComponent implements OnInit {

    @Input()
    hostElement: HTMLElement;

    @Input()
    hintType: PlexType = 'default';

    @Input()
    icon = 'help';

    @Input()
    content: string;

    @Input()
    position = 'above';

    constructor() { }

    ngOnInit() {
        this.position = 'above';
    }

    // Si el elemento que tiene la directiva [hint] tiene un evento (click), este se ejecutará, guste o no.
    @HostListener('click', ['$event']) onClick() {
        this.hostElement.click();
    }

}
