import { Component } from '@angular/core';

@Component({
    templateUrl: 'button.html',
})
export class ButtonDemoComponent {
    constructor() { }

    onClick() {
        alert('Click handler was fired');
    }
}
