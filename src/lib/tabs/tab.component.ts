import { Component, Input } from '@angular/core';

@Component({
  selector: 'plex-tab',
  template: ` <div *ngIf='active'>
                <ng-content></ng-content>
              </div>`,
})
export class PlexTabComponent {
  @Input() label: string;
  @Input() icon: string;
  @Input() active: boolean;
}
