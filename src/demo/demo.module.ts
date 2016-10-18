import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlexModule } from '../lib/module';
import { routing, appRoutingProviders }  from './demo.routes';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PlexService } from '../lib/core/service';
//import { MaterialModule } from '@angular/material';

// Routes
import { DemoComponent } from './demo.component';
import { HomeDemoComponent } from './home/home.component';
import { BoxDemoComponent } from './box/box.component';
import { TextDemoComponent } from './text/text.component';
import { IntDemoComponent } from './int/int.component';
import { FloatDemoComponent } from './float/float.component';
import { ButtonDemoComponent } from './button/button.component';
import { TabsDemoComponent } from './tabs/tabs.component'; 

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        PlexModule,
        routing,
      //  MaterialModule.forRoot()
    ],
    providers: [
        PlexService,
        appRoutingProviders,
    ],
    declarations: [
        DemoComponent,
        BoxDemoComponent,
        TextDemoComponent,
        HomeDemoComponent,
        IntDemoComponent,
        FloatDemoComponent,
        ButtonDemoComponent,
        TabsDemoComponent
    ],
    bootstrap: [DemoComponent]
})
export class DemoModule { }
