import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlexModule } from '../lib/module';
import { DemoComponent } from './demo.component';
import { BoxDemoComponent } from './box/box.component';
import { routing, appRoutingProviders }  from './demo.routes';

@NgModule({
    imports: [
        BrowserModule,
        PlexModule,
        routing
    ],
    providers: [
        appRoutingProviders
    ],
    declarations: [
        DemoComponent,
        BoxDemoComponent
    ],
    bootstrap: [DemoComponent]
})
export class DemoModule { }
