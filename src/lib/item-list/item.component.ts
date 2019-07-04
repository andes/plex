import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'plex-item',
    templateUrl: 'item.html',
    styleUrls: ['plex-item.scss']
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
