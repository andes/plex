import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'plex-item',
    template: `
        <div class="item-list has-icon {{ striped ? 'striped' : '' }}" [ngClass]="layout">
            <ng-content></ng-content>
            <ng-content select="checkbox"></ng-content>
            <!-- <div *ngIf="badges" class="badges" [ngClass]="{'mr-1': !botonera}">
            </div> -->
            <div class="botonera">
                <ng-content select="plex-badge"></ng-content>
                <ng-content select="plex-button"></ng-content>
                <ng-content select="plex-dropdown[icon]"></ng-content>
                <ng-content select="upload-file"></ng-content>
            </div>
        </div>
    `
})
export class PlexItemComponent implements OnInit {

    @Input() layout: 'completo' | 'contenido' | 'izquierda' | 'derecha' = 'completo';
    @Input() headings: any = {};
    @Input() striped = false;
    @Input() botonera = true;
    @Input() badges = true;

    ngOnInit() {
        this.layout = this.layout ? this.layout : 'completo';
    }

}
