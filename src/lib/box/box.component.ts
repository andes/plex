import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'plex-box',
  templateUrl: 'box.html'
})
export class PlexBoxComponent {
  @Input() title: string;
  @Input() type: string;

  constructor() {
  }
}
