import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';

// Plex
import { PlexModule } from '../../lib/module';
import { Plex } from '../../lib/core/service';

// Services
import { ServiceDemoSelect } from './select/select.service';

// Routes
import { HomeDemoComponent } from './home/home.component';
import { BoxDemoComponent } from './box/box.component';
import { TextDemoComponent } from './text/text.component';
import { BoolDemoComponent } from './bool/bool.component';
import { IntDemoComponent } from './int/int.component';
import { FloatDemoComponent } from './float/float.component';
import { FontsDemoComponent } from './fonts/fonts.component';
import { ButtonDemoComponent } from './button/button.component';
import { TabsDemoComponent } from './tabs/tabs.component';
import { AccordionDemoComponent } from './accordion/accordion.component';
import { SelectDemoComponent } from './select/select.component';
import { DateTimeDemoComponent } from './datetime/datetime.component';
import { ModalDemoComponent } from './modal/modal.component';
import { LoaderDemoComponent } from './loader/loader.component';
import { PhoneDemoComponent } from './phone/phone.component';

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
    FontsDemoComponent,
    AccordionDemoComponent,
    BoolDemoComponent,
    SelectDemoComponent,
    DateTimeDemoComponent,
    ModalDemoComponent,
    LoaderDemoComponent,
    PhoneDemoComponent
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
    Plex,
    appRoutingProviders,
    ServiceDemoSelect,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
