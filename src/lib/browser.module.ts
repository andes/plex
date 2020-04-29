import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PlexModule } from './module';
import { PlexAppComponent } from './app/app.component';
import { AppComponent } from '../demo/app';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        PlexModule
    ],
    bootstrap: [PlexAppComponent]
})
export class AppBrowserModule { }
