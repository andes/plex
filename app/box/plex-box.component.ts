import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { PlexBoxFooterComponent } from './plex-box-footer.component';

@Component({
  selector: 'plex-box',
  directives: [
    PlexBoxFooterComponent
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

    <ng-content select="plex-box-footer"></ng-content>



  </div>
  `
})

export class PlexBoxComponent{
  @Input() title: string;
  @Input() ngClass: string;

  constructor(){
  }
}
