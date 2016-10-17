import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlexAppComponent } from './app/app.component';
import { SidebarComponent } from './app/sidebar.component';
import { PlexBoxComponent } from './box/box.component';
import { PlexTextComponent } from './text/text.component';
import { PlexIntComponent } from './int/int.component';
import { PlexFloatComponent } from './float/float.component';
import { PlexButtonComponent } from './button/button.component';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';

const MODULES = [
    PlexAppComponent,
    PlexBoxComponent,
    PlexTextComponent,
    PlexIntComponent,
    PlexFloatComponent,
    PlexButtonComponent
];

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
        ...MODULES,
        SidebarComponent,
        ValidationMessagesComponent
    ],
    exports: MODULES
})
export class PlexModule { }
