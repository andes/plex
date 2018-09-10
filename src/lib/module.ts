import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Componentes
import { PlexAppComponent } from './app/app.component';
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
import { PlexRadioComponent } from './radio/radio.component';
import { PlexSelectComponent } from './select/select.component';
import { PlexDateTimeComponent } from './datetime/datetime.component';
import { PlexLoaderComponent } from './loader/loader.component';
import { PlexRibbonComponent } from './ribbon/ribbon.component';
import { PlexScrollComponent } from './scroll/scroll.component';
import { PlexRipplesDirective } from './ripples/ripples.directive';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';
import { PlexPhoneComponent } from './phone/phone.component';
import { PlexDropdownComponent } from './dropdown/dropdown.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipContentComponent } from './tooltip/tooltip-content.component';
import { PlexIconComponent } from './icon/icon.component';
import { PlexBadgeComponent } from './badge/badge.component';
import { PlexLayoutComponent } from './layout/layout.component';
import { PlexFooterComponent } from './layout/footer.component';
import { PlexLayoutMainComponent } from './layout/main.component';
import { PlexLayoutSidebarComponent } from './layout/sidebar.component';

// Directivas
import { PlexWizardDirective } from './wizard/wizard.directive';

// Third party
import { MatSlideToggleModule, MatCheckboxModule, MatRadioModule, MatRadioButton } from '@angular/material';
import 'hammerjs';
import * as configMoment from './core/configMoment.function';
import { SimpleNotificationsModule } from './toast/simple-notifications.module';
import { ChartsModule } from 'ng2-charts';
import { QuillModule } from 'ngx-quill';

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
    PlexRadioComponent,
    PlexSelectComponent,
    PlexDateTimeComponent,
    PlexLoaderComponent,
    PlexRibbonComponent,
    PlexScrollComponent,
    PlexRipplesDirective,
    PlexPhoneComponent,
    PlexDropdownComponent,
    PlexIconComponent,
    PlexBadgeComponent,
    PlexLayoutComponent,
    PlexFooterComponent,
    PlexLayoutMainComponent,
    PlexLayoutSidebarComponent,
    PlexWizardDirective,
    TooltipComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatRadioModule,
        ChartsModule,
        QuillModule,
        SimpleNotificationsModule.forRoot()
    ],
    declarations: [
        ...MODULES,
        ValidationMessagesComponent,
        TooltipContentComponent
    ],
    entryComponents: [
        TooltipContentComponent,
        MatRadioButton
    ],
    exports: MODULES
})
export class PlexModule {
    constructor() {
        // Inicializa moment
        configMoment.configureLocale();
    }
}
