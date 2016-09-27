import { Component, Input } from '@angular/core';

@Component({
  selector: 'plex-box',
  template: `<div class="box box-{{type}}">
                <div *ngIf="title" class="box-header with-border">
                  <h3 class="box-title">{{title}}</h3>
                </div>
                <div class="box-body">
                  <ng-content></ng-content>
                </div>
            </div>`
})
export class PlexBoxComponent {
  @Input() title: string;
  @Input() type: string;

  constructor() {
  }
}
