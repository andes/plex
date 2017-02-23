import { Component } from '@angular/core';

@Component({
    templateUrl: 'tooltip.html',
})
export class TooltipDemoComponent {
    public tooltip: any;

    constructor() {
        this.tooltip = { nombre: 'input con tooltip' }
    }

}
