import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './tooltip-hint.html'
})
export class TooltipHintDemoComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    alertar(e) {
        alert(`Inner HTML: ${e.target.innerHTML}`);
    }
}
