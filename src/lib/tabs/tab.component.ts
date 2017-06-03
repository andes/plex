import { Component, Input } from '@angular/core';

@Component({
  selector: 'plex-tab',
  templateUrl: 'tab.html'
})
export class PlexTabComponent {
  @Input() label: string;
  @Input() icon: string;
  @Input() active: boolean;
}
