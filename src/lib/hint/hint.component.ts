import { Component, OnInit, AfterViewInit, Input, ChangeDetectorRef, HostListener } from '@angular/core';

@Component({
    selector: 'plex-hint',
    template: `
        <a href="javascript:void(0)" *ngIf="position" class="hint-container" [matTooltip]="content" [matTooltipPosition]="position">
            <plex-icon class="hint" [name]="icon" type="default"></plex-icon>
        </a>
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

    // Si el elemento que tiene la directiva [hint] tiene un evento (click), este se ejecutará, guste o no.
    @HostListener('click', ['$event']) onClick() {
        this.hostElement.click();
    }

}
