import { Component, Input } from '@angular/core';

@Component({
  selector: 'plex-layout',
  template: `
    <section>
        <div class="row">
            <div class="col-{{ width }}">
                <ng-content select="plex-box[main]"></ng-content>
            </div>
            <div class="col-{{ 12 - width }}" *ngIf="width < 12">
                <ng-content select="plex-box[sidebar]"></ng-content>
            </div>
        </div>
    </section>
    <ng-content select="plex-footer"></ng-content>
  `,
})
export class PlexLayoutComponent {
  @Input() width = 12;

  constructor() {
  }

  private mainWidth() {

  }
}
