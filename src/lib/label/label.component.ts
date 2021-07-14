import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
    selector: 'plex-label',
    template: `
    <div #labelColor class="plex-label {{ size }} d-flex flex-{{direction}}" [ngClass]="{ 'align-items-center': direction === 'column' }">
        <plex-icon *ngIf="icon && !datos" name="{{icon}}" class="text-{{ type }}"></plex-icon>
        <ng-content select="plex-icon"></ng-content>
        <ng-content select="[dato]"></ng-content>
        <div class="d-flex flex-column" [ngClass]="direction === 'column' ? 'align-items-center mt-2 px-4' : ''">
            <p *ngIf="titulo" class="text-{{ type }}" [ngClass]="{'font-weight-bold': tituloBold}">{{ titulo }}</p>
            <small *ngIf="titulo && subtitulo" class="">{{ subtitulo }}</small>
        </div>
        <ng-content *ngIf="!titulo && !subtitulo"></ng-content>
    </div>
    `
})
export class PlexLabelComponent implements AfterViewInit, OnChanges {
    @Input() titulo: string;
    @Input() tituloBold = true;
    @Input() subtitulo: string;
    @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
    @Input() icon: string;
    @Input() dato: string;
    @Input() direction: 'column' | 'row' = 'row';
    @Input() type: 'success' | 'info' | 'warning' | 'danger' | 'default';
    @Input() color: string;

    @ViewChild('labelColor', { static: true }) labelColor: ElementRef;

    public datos = false;

    ngAfterViewInit() {
        this.datos = !!this.datRef.nativeElement.querySelector('[dato]');
    }

    ngOnChanges() {
        if (this.color && this.color.length > 0) {
            this.labelColor.nativeElement.style.setProperty('--label-color', this.color);
        }
    }

    constructor(private datRef: ElementRef) { }
}
