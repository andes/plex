import { Component, Input } from '@angular/core';

@Component({
  selector: 'box-footer',
  template: `
    <div class="box-footer {{ngClass}}">
      <ng-content></ng-content>
    </div>
  `
})

export class BoxFooterComponent{
  @Input() ngClass: string;
  constructor(){
  }
}
