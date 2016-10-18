import { Component } from '@angular/core';
import { PlexService } from '../../lib/core/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works4!';

  // Hace que PlexService sea un singleton para toda la aplicación
  constructor(plex: PlexService) { }
}
