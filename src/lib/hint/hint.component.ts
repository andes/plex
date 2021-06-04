import { MatTooltip } from '@angular/material/tooltip';
import { Component, OnInit, Input, HostListener, ViewChild } from '@angular/core';
import { PlexType } from '../core/plex-type.type';

@Component({
    selector: 'plex-hint',
    template: `
        <span #matTooltip="matTooltip" tabindex="0" *ngIf="position && content" class="hint-container detach-{{detach}}" 
        [matTooltip]="content" [matTooltipPosition]="position" (click)="showTooltip()">
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

    @ViewChild('matTooltip', { static: false }) matTooltip: MatTooltip;

    ngOnInit() {
        this.position = 'above';
    }

    showTooltip() {
        this.matTooltip.show(0);
    }

    // Si el elemento que tiene la directiva [hint] tiene un evento (click), este se ejecutará, guste o no.
    @HostListener('click', ['$event']) onClick() {
        this.hostElement.click();
    }
}
