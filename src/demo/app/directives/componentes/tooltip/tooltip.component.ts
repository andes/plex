import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './tooltip.html'
})
export class TooltipDemoComponent implements OnInit {
    message = '';
    constructor() { }

    ngOnInit(): void { }

    alertar(e) {
        if (e.target) {
            this.message = '¿Cuántos clicks fallidos hace uno en la vida?';
            alert(`Inner HTML: ${this.message}`);
        }
    }
}
