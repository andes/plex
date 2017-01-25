import { Directive, OnInit, ElementRef, AfterViewInit } from '@angular/core';
let Waves = require('node-waves/dist/waves');
Waves.init();

@Directive({
    selector: '[plex-ripples]',
})
export class PlexRipplesDirective implements OnInit, AfterViewInit {
    constructor(private element: ElementRef ) {
    }
    // Inicialización
    ngOnInit() {
    }
    ngAfterViewInit() {
        Waves.attach(this.element.nativeElement, ['']);
    }
}
