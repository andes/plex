import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { RadioDemoComponent } from './radio/radio.component';
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
import { RibbonDemoComponent } from './ribbon/ribbon.component';
import { PhoneDemoComponent } from './phone/phone.component';
import { DropdownDemoComponent } from './dropdown/dropdown.component';
import { WizardDemoComponent } from './wizard/wizard.component';

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
    RadioDemoComponent,
    SelectDemoComponent,
    DateTimeDemoComponent,
    ModalDemoComponent,
    LoaderDemoComponent,
    RibbonDemoComponent,
    PhoneDemoComponent,
    DropdownDemoComponent,
    WizardDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlexModule,
    routing
  ],
  providers: [
    Plex,
    appRoutingProviders,
    ServiceDemoSelect,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
