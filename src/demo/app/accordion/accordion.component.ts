import { Component } from '@angular/core';

@Component({
    templateUrl: 'accordion.html',
})
export class AccordionDemoComponent {
  private test = false;

  toggle(showed) {
    console.log(showed);
  }

  bool(active) {
    console.log('Cambio bool component ', active);
  }

}
