import { MatTooltip } from '@angular/material/tooltip';
import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PlexType } from '../core/plex-type.type';

@Component({
    selector: 'plex-hint',
    template: `
        <div #hintElem class="hint-wrapper">
        <span #matTooltip="matTooltip" tabindex="0" role="link" *ngIf="position && content" class="hint-container"
            [matTooltip]="content" [matTooltipPosition]="position" (click)="showTooltip()">
            <plex-icon class="hint {{ hintType }}" [name]="hintIcon" size="xs" type="light"></plex-icon>
        </span></div>
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
    position = 'above';

    constructor() { }

    @ViewChild('matTooltip', { static: false }) matTooltip: MatTooltip;
    @ViewChild('hintElem') elementoActual!: ElementRef;

    ngOnInit() {
        this.position = 'above';
    }

    ngAfterViewInit() {
        const elemento: HTMLElement = this.elementoActual.nativeElement;

        elemento.appendChild(this.hostElement);
    }

    showTooltip() {
        this.matTooltip.show(0);
    }

    // Si el elemento que tiene la directiva [hint] tiene un evento (click), este se ejecutará, guste o no.
    @HostListener('click', ['$event']) onClick() {
        this.hostElement.click();
    }
}
