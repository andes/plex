import { MatTooltip, TooltipPosition } from '@angular/material/tooltip';
import { Component, OnInit, Input, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { PlexType } from '../core/plex-type.type';

@Component({
    selector: 'plex-hint',
    template: `
        <span #matTooltip="matTooltip" tabindex="0" role="link" *ngIf="position && content" class="hint-container detach-{{detach}}"
            [matTooltip]="content" [matTooltipPosition]="position" (click)="showTooltip()">
            <plex-icon class="hint {{ hintType }}" [name]="hintIcon" size="xs" type="light"></plex-icon>
        </span>
    `
})
export class HintComponent implements OnInit, AfterViewInit {

    @Input()
    hostElement: HTMLElement;

    @Input()
    hintType: PlexType;

    @Input()
    hintIcon = 'help';

    @Input()
    content: string;

    @Input()
    position: Partial<TooltipPosition> = 'above';

    @Input()
    detach: '' | 'both' | 'right' | 'top';

    @Input()
    hintOffsetX = 0;

    @Input()
    hintOffsetY = 0;

    @ViewChild('matTooltip', { static: false }) matTooltip: MatTooltip;

    constructor() { }

    ngOnInit() {
        this.position = 'above';
    }

    ngAfterViewInit() {
        this.adjustIfLabel();
    }

    adjustIfLabel() {
        setTimeout(() => {
            if (!this.hostElement) {
                return;
            }

            const hintElement = this.hostElement.nextElementSibling as HTMLElement | null;
            const container = this.hostElement.parentElement as HTMLElement | null;
            const labelElement = this.hostElement.querySelector('label') as HTMLElement | null;

            if (!hintElement || !container) {
                return;
            }

            if (getComputedStyle(container).position === 'static') {
                container.style.position = 'relative';
            }

            const hostRect = this.hostElement.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            let top = 0;
            let left = hostRect.left - containerRect.left;

            if (labelElement) {
                labelElement.style.display = 'inline';
                hintElement.style.position = 'absolute';

                const labelRect = labelElement.getBoundingClientRect();
                top += hostRect.top - containerRect.top - 5;
                left = labelRect.right - containerRect.left + 15;
            } else {
                hintElement.style.position = 'relative';
                left = 0;
            }

            hintElement.style.top = (top + this.hintOffsetY) + 'px';
            hintElement.style.left = (left + this.hintOffsetX) + 'px';
        }, 100);
    }

    showTooltip() {
        this.matTooltip.show(0);
    }

    // Si el elemento que tiene la directiva [hint] tiene un evento (click), este se ejecutará, guste o no.
    @HostListener('click') onClick() {
        this.hostElement.click();
    }
}
