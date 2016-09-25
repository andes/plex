import { Component, Input } from '@angular/core';
import { PlexBoxFooterComponent } from './box-footer.component';

@Component({
  selector: 'plex-box',
  directives: [PlexBoxFooterComponent],
  template: `<div class="box box-{{type}}" >
                <div *ngIf="title" class="box-header with-border">
                  <h3 class="box-title">{{title}}</h3>
                </div>
                <div class="box-body">
                  <ng-content></ng-content>
                </div>
                <ng-content select="plex-box-footer"></ng-content>
            </div>`
})
export class PlexBoxComponent {
  @Input() title: string;
  @Input() type: string;

  constructor() {
  }
}
