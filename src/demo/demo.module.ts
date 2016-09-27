import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlexModule } from '../lib/module';
import { routing, appRoutingProviders }  from './demo.routes';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DemoComponent } from './demo.component';
import { HomeDemoComponent } from './home/home.component';
import { BoxDemoComponent } from './box/box.component';
import { TextDemoComponent } from './text/text.component';

@NgModule({
    imports: [        
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        PlexModule,
        routing
    ],
    providers: [
        appRoutingProviders
    ],
    declarations: [
        DemoComponent,
        BoxDemoComponent,
        TextDemoComponent,
        HomeDemoComponent 
    ],
    bootstrap: [DemoComponent]
})
export class DemoModule { }
