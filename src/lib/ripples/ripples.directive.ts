import { Directive, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { MatRipple } from '@angular/material/core';

@Directive({
    selector: '[plexRipples]',
    providers: [MatRipple]
})
export class PlexRipplesDirective implements OnInit, AfterViewInit {
    constructor(
        private element: ElementRef,
        private ripple: MatRipple
    ) { }
    // Inicialización
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.ripple.centered = false;
        this.ripple.color = 'rgba(0,0,0,0.1)';
        this.ripple.disabled = false;
    }
}
