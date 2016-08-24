import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { BoxFooterComponent } from './box-footer.component';

@Component({
  selector: 'box',
  directives: [
    BoxFooterComponent
  ],
  template: `
  <div class="box {{ngClass}}" >
    <div class="box-header with-border">
      <h3 class="box-title">{{title}}</h3>
      <!--
      <div class="box-tools pull-right">
        <span class="label label-primary">Label</span>
      </div>
      -->
    </div>

    <div class="box-body">

      <ng-content></ng-content>

    </div>

    <ng-content select="box-footer"></ng-content>



  </div>
  `
})

export class BoxComponent{
  @Input() title: string;
  @Input() ngClass: string;

  constructor(){
  }
}
