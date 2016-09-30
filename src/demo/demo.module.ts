import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlexModule } from '../lib/module';
import { routing, appRoutingProviders }  from './demo.routes';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PlexService } from '../lib/core/service';

import { DemoComponent } from './demo.component';
import { HomeDemoComponent } from './home/home.component';
import { BoxDemoComponent } from './box/box.component';
import { TextDemoComponent } from './text/text.component';
import { IntDemoComponent } from './int/int.component';
import { FloatDemoComponent } from './float/float.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        PlexModule,
        routing
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
        FloatDemoComponent
    ],
    bootstrap: [DemoComponent]
})
export class DemoModule { }
