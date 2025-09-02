import { PlexSize } from './../core/plex-size.type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'plex-copy',
    template: `
        <span [align] class="d-inline-flex align-items-center ml-1" #container>
            <ng-content></ng-content>
            <button class="btn btn-link btn-lg p-1" (click)="copyToClipboard()" (mouseenter)="copying = true" (mouseleave)="copying = false" title="Copiar valor">
                <plex-icon *ngIf="!copied || copying" type="info" [size]="size" name="clipboard-plus"></plex-icon>
                <plex-icon *ngIf="copied && !copying" type="info" [size]="size" name="clipboard-check"></plex-icon>

            </button>
        </span>
    `
})
export class PlexCopyComponent implements OnInit {

    @Input() value: string;
    @Input() size: PlexSize = 'md';
    @Input() type: 'documento' | null = null;
    copied = false;
    copying = false;

    constructor() { }

    ngOnInit(): void { }

    copyToClipboard() {

        const listener = (e: ClipboardEvent) => {
            e.clipboardData.setData('text/plain', (this.value));
            e.preventDefault();
            this.copied = true;
        };

        document.addEventListener('copy', listener);
        document.execCommand('copy');
        document.removeEventListener('copy', listener);
    }

}
