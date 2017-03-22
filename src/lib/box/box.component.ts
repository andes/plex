import { Component, Input } from '@angular/core';

@Component({
  selector: 'plex-box',
  templateUrl: 'box.html'
})
export class PlexBoxComponent {
  @Input() type = '';

  constructor() {
  }
}
