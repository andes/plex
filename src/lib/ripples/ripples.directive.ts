import { ViewChild, ContentChild, Directive, OnInit, Input, ElementRef } from '@angular/core';
let Waves = require('../../../node_modules/node-waves/dist/waves');
Waves.init();

@Directive({
    selector: '[plex-ripples]',
})
export class PlexRipplesDirective implements OnInit {
    constructor(private element: ElementRef ) {
    }
    // Inicialización
    ngOnInit() {
    }
    ngAfterViewInit() {
        Waves.attach(this.element.nativeElement, ['']);
    }
}
