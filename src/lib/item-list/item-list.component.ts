import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'plex-item-list',
    templateUrl: 'item.html',
    styleUrls: ['plex-item-list.scss']
})

export class PlexItemComponent {

    @Input() layout: 'completo' | 'contenido' | 'izquierda' | 'derecha' = 'completo';
    @Input() headings: any = {};

    ngOnInit() {
        this.layout = this.layout ? this.layout : 'completo';
    }

}
