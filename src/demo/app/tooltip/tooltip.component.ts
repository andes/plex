import { Component } from '@angular/core';

@Component({
    templateUrl: 'tooltip.html',
})
export class TooltipDemoComponent {
    public tooltipModel: any;
    public tooltipFormModel: any;

    constructor() {
        this.tooltipModel = {
            text: 'Este es un tooltip BOTTOM',
            position: 'bottom',
        };

        this.tooltipFormModel = {
            nombre: 'input con tooltip'
        };
    }
}
