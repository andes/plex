import './polyfills.ts';
//let jQuery = require('../../node_modules/jquery/dist/jquery'); // @jgabriel: No encontré una forma más elegante de incluir jQuery

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

//jQuery(() => platformBrowserDynamic().bootstrapModule(AppModule));
platformBrowserDynamic().bootstrapModule(AppModule);