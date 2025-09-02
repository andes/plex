import { MatTooltip, TooltipPosition } from '@angular/material/tooltip';
import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
            const labelElement = this.hostElement.querySelector('label');

            if (labelElement !== null) {
                labelElement.style.display = 'inline';

                const label = labelElement.getBoundingClientRect();

                const hintElement = this.hostElement.nextElementSibling as HTMLElement;
                const hint = hintElement.getBoundingClientRect();

                hintElement.style.position = 'relative';
                hintElement.style.top = -label.height - 2 * hint.height + 'px';

                const adjustX = this.hostElement.getAttribute('required') === 'true' ? 10 : 0;

                hintElement.style.left = label.width + hint.width + adjustX + 'px';
            }
        }, 100);
    }

    showTooltip() {
        this.matTooltip.show(0);
    }

    // Si el elemento que tiene la directiva [hint] tiene un evento (click), este se ejecutará, guste o no.
    @HostListener('click', ['$event']) onClick() {
        this.hostElement.click();
    }
}
