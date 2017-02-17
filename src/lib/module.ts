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
import { PlexAccordionComponent } from './accordion/accordion.component';
import { PlexPanelComponent } from './accordion/panel.component';
import { PlexBoolComponent } from './bool/bool.component';
import { PlexSelectComponent } from './select/select.component';
import { PlexDateTimeComponent } from './datetime/datetime.component';
import { PlexLoaderComponent } from './loader/loader.component';
import { PlexScrollComponent } from './scroll/scroll.component';
import { PlexRipplesDirective } from './ripples/ripples.directive';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';
import { PlexPhoneComponent } from './phone/phone.component';
import { PlexDropdownComponent } from './dropdown/dropdown.component';
// Angular Material
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// Modals
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
// import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

const MODULES = [
    PlexAppComponent,
    PlexBoxComponent,
    PlexTextComponent,
    PlexIntComponent,
    PlexFloatComponent,
    PlexButtonComponent,
    PlexTabsComponent,
    PlexAccordionComponent,
    PlexPanelComponent,
    PlexTabComponent,
    PlexBoolComponent,
    PlexSelectComponent,
    PlexDateTimeComponent,
    PlexLoaderComponent,
    PlexScrollComponent,
    PlexRipplesDirective,
    PlexPhoneComponent,
    PlexDropdownComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule.forRoot(),
        ModalModule.forRoot(),
        BootstrapModalModule,
    ],
    declarations: [
        ...MODULES,
        SidebarComponent,
        ValidationMessagesComponent
    ],
    exports: MODULES
})
export class PlexModule { }
