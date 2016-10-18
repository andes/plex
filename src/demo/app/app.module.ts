import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';

// Plex
import { PlexModule } from '../../lib/module';
import { PlexService } from '../../lib/core/service';

// Routes
import { HomeDemoComponent } from './home/home.component';
import { BoxDemoComponent } from './box/box.component';
import { TextDemoComponent } from './text/text.component';
import { BoolDemoComponent } from './bool/bool.component';
import { IntDemoComponent } from './int/int.component';
import { FloatDemoComponent } from './float/float.component';
import { ButtonDemoComponent } from './button/button.component';
import { TabsDemoComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxDemoComponent,
    TextDemoComponent,
    HomeDemoComponent,
    IntDemoComponent,
    FloatDemoComponent,
    ButtonDemoComponent,
    TabsDemoComponent,
    BoolDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    PlexModule,
    routing,
  ],
  providers: [
    PlexService,
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
