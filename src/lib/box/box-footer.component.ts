import { Component, Input } from '@angular/core';

@Component({
  selector: 'plex-box-footer',
  template: `
    <div class="box-footer {{ngClass}}">
      <ng-content></ng-content>
    </div>
  `
})

export class PlexBoxFooterComponent{
  @Input() ngClass: string;
  constructor(){
  }
}
