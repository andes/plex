import { Component, Input } from '@angular/core';

@Component({
  selector: 'plex-button',
  template: `<button class="btn btn-{{type}}">
                <i *ngIf="icon" class="mdi mdi-{{icon}}"></i>
                <span *ngIf="title">
                  {{title}}
                </span>
            </button>`
})
export class PlexButtonComponent {
  @Input() title: string;
  @Input() icon: string;
  @Input() type: string;

  constructor() {
      this.type = "default";
  }
}
