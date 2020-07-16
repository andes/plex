import { PlexType } from '../core/plex-type.type';
import { Component, OnInit, AfterViewInit, Input, ChangeDetectorRef, HostListener } from '@angular/core';

@Component({
    selector: 'plex-hint',
    template: `
        <span *ngIf="position" class="hint-container detach-{{detach}}" [matTooltip]="content" [matTooltipPosition]="position">
            <plex-icon class="hint {{ hintType }}" [name]="icon" type="default"></plex-icon>
        </span>
    `
})
export class HintComponent implements OnInit, AfterViewInit {

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

    @Input()
    detach: '' | 'both' | 'right' | 'top';


    constructor(
        private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.position = 'above';
    }

    ngAfterViewInit(): void {
        this.cdr.detectChanges();
    }

    // Si el elemento que tiene la directiva [hint] tiene un evento (click), este se ejecutará, guste o no.
    @HostListener('click', ['$event']) onClick() {
        this.hostElement.click();
    }
}
