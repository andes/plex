import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes
import { PlexAppComponent } from './app/app.component';
import { SidebarComponent } from './app/sidebar.component';
import { PlexBoxComponent } from './box/box.component';
import { PlexTextComponent } from './text/text.component';
import { PlexIntComponent } from './int/int.component';
import { PlexFloatComponent } from './float/float.component';
import { PlexButtonComponent } from './button/button.component';
import { PlexTabsComponent } from './tabs/tabs.component';
import { PlexTabComponent } from './tabs/tab.component';
import { PlexBoolComponent } from './bool/bool.component';
import { PlexSelectComponent } from './select/select.component';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';

// Angular Material
import { MaterialModule } from '@angular/material';
import 'hammerjs';

const MODULES = [
    PlexAppComponent,
    PlexBoxComponent,
    PlexTextComponent,
    PlexIntComponent,
    PlexFloatComponent,
    PlexButtonComponent,
    PlexTabsComponent,
    PlexTabComponent,
    PlexBoolComponent,
    PlexSelectComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        ...MODULES,
        SidebarComponent,
        ValidationMessagesComponent
    ],
    exports: MODULES
})
export class PlexModule { }
