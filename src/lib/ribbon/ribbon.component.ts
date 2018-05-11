import { Component, Input, Renderer, OnInit } from '@angular/core';

@Component({
    selector: 'plex-ribbon',
    template: `<div id="ribbon-container" class="text-center p-1 {{position}}" [ngClass]="getClasses()">
    <div class="ribbon">
        <div class="texto text-white p-1">
            {{ type }}
        </div>
    </div>
</div>`})

export class PlexRibbonComponent implements OnInit {
    // Propiedades
    @Input() type = 'info';
    @Input() text = 'demo';
    @Input() position: 'top-left' | 'top-right' = 'top-left';

    // No se puede usar 'bottom-left' | 'bottom-right'
    // ya que plex-box genera scroll

    constructor(renderer: Renderer) {
        this.type = 'info';
    }

    ngOnInit() {

    }

    getClasses() {
        return {
            'bg-primary': this.type === 'info' ? true : false,
            'bg-info': this.type === 'info' ? true : false,
            'bg-success': this.type === 'success' ? true : false,
            'bg-danger': this.type === 'danger' ? true : false,
            'bg-warning': this.type === 'warning' ? true : false,
        }
    }
}
