import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';

// Plex
import { PlexModule } from '../../lib/module';
import { PlexService } from '../../lib/core/service';

//Other services
import { ServiceDemoSelect } from './select/serviceDemoSelect';

// Routes
import { HomeDemoComponent } from './home/home.component';
import { BoxDemoComponent } from './box/box.component';
import { TextDemoComponent } from './text/text.component';
import { BoolDemoComponent } from './bool/bool.component';
import { IntDemoComponent } from './int/int.component';
import { FloatDemoComponent } from './float/float.component';
import { ButtonDemoComponent } from './button/button.component';
import { TabsDemoComponent } from './tabs/tabs.component';
import { SelectDemoComponent } from './select/select.component'
import { DateTimeDemoComponent } from './datetime/datetime.component'

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
    BoolDemoComponent,
    SelectDemoComponent,
    DateTimeDemoComponent
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
    ServiceDemoSelect,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
