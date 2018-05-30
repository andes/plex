import { Component, Input } from '@angular/core';

@Component({
  selector: 'plex-layout',
  template: `
    <section>
        <div class="row">
            <div class="col-{{ main }}">
                <ng-content select="plex-box[main]"></ng-content>
            </div>
            <div class="col-{{ 12 - main }}" *ngIf="main < 12">
                <ng-content select="plex-box[sidebar]"></ng-content>
            </div>
        </div>
    </section>
    <ng-content select="plex-footer"></ng-content>
  `,
})
export class PlexLayoutComponent {
  @Input() main = 12;

  constructor() {
  }
}
