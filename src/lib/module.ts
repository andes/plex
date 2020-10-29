import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

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
import { PlexListComponent } from './item-list/list.component';
import { PlexItemComponent } from './item-list/item.component';
import { PlexLabelComponent } from './label/label.component';
import { PlexHeadingComponent } from './item-list/heading.component';
import { PlexTitleComponent } from './title/title.component';
import { PlexHelpComponent } from './help/help.component';
import { PlexModalComponent } from './modal/modal.component';
import { PlexModalTitleComponent } from './modal/modal-title.component';
import { PlexCopyComponent } from './copy/copy.component';
import { PlexDetailComponent } from './detail/detail.component';
import { PlexOptionsComponent } from './options/options.component';
import { PlexVisualizadorComponent } from './visualizador/visualizador.component';
import { PlexWrapperComponent } from './wrapper/wrapper.component';
import { PlexGridComponent } from './grid/grid.component';
import { PlexCardComponent } from './card/card.component';

// Directivas
import { PlexWizardDirective } from './wizard/wizard.directive';
import { GrowDirective } from './directives/grow.directive';
import { JustifyDirective } from './directives/justify.directive';
import { PreviewDirective } from './visualizador/preview.directive';
import { ResponsiveDirective } from './directives/responsive.directive';
import { SpanDirective } from './directives/span.directive';

// Third party
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule, MatRadioButton } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule, MatTooltip } from '@angular/material/tooltip';
import 'hammerjs';
import * as configMoment from './core/configMoment.function';
import { SimpleNotificationsModule } from './toast/simple-notifications.module';
import { ChartsModule } from 'ng2-charts';
import { QuillModule } from 'ngx-quill';
import { NavItemComponent } from './app/nav-item.component';
import { HintComponent } from './hint/hint.component';
import { HintDirective } from './hint/hint.directive';
import { HelpDirective } from './help/help.directive';
import { TabDirective } from './tabs/pl-tab.directive';
import { Plex } from './core/service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkLoadingInterceptor, NETWORK_LOADING } from './core/network-loading.service';
import { MobileDirective } from './directives/mobile.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatRadioModule,
        MatTooltipModule,
        ChartsModule,
        QuillModule,
        InfiniteScrollModule,
        SimpleNotificationsModule.forRoot(),
    ],
    declarations: [
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
        PlexPhoneComponent,
        PlexDropdownComponent,
        PlexIconComponent,
        PlexBadgeComponent,
        PlexLayoutComponent,
        PlexFooterComponent,
        PlexLayoutMainComponent,
        PlexLayoutSidebarComponent,
        PlexListComponent,
        PlexItemComponent,
        PlexLabelComponent,
        PlexHeadingComponent,
        PlexTitleComponent,
        TooltipComponent,
        PlexHelpComponent,
        PlexModalComponent,
        PlexModalTitleComponent,
        PlexCopyComponent,
        PlexDetailComponent,
        PlexOptionsComponent,
        PlexVisualizadorComponent,
        NavItemComponent,
        PlexWrapperComponent,
        PlexGridComponent,
        PlexCardComponent,

        // Directivas
        GrowDirective,
        HelpDirective,
        HintDirective,
        JustifyDirective,
        PreviewDirective,
        PlexRipplesDirective,
        PlexWizardDirective,
        ResponsiveDirective,
        SpanDirective,
        TabDirective,
        TooltipContentComponent,
        HintComponent,
        MobileDirective,

        // EXTRAS - NO CORRER DE ACA
        ValidationMessagesComponent,
        TooltipContentComponent,
        HintComponent,
    ],
    entryComponents: [
        TooltipContentComponent,
        MatRadioButton,
        PlexVisualizadorComponent,
        HintComponent
    ],
    exports: [
        TooltipContentComponent,
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
        PlexPhoneComponent,
        PlexDropdownComponent,
        PlexIconComponent,
        PlexBadgeComponent,
        PlexLayoutComponent,
        PlexFooterComponent,
        PlexLayoutMainComponent,
        PlexLayoutSidebarComponent,
        PlexListComponent,
        PlexItemComponent,
        PlexLabelComponent,
        PlexHeadingComponent,
        PlexTitleComponent,
        TooltipComponent,
        PlexHelpComponent,
        PlexModalComponent,
        PlexModalTitleComponent,
        PlexCopyComponent,
        PlexDetailComponent,
        PlexOptionsComponent,
        PlexVisualizadorComponent,
        NavItemComponent,
        PlexWrapperComponent,
        PlexGridComponent,
        PlexCardComponent,

        // Directivas
        GrowDirective,
        HelpDirective,
        HintDirective,
        JustifyDirective,
        PreviewDirective,
        PlexRipplesDirective,
        PlexWizardDirective,
        ResponsiveDirective,
        SpanDirective,
        TabDirective,
        MatTooltip,
        MobileDirective
    ]
})
export class PlexModule {

    constructor() {
        configMoment.configureLocale();
    }


    static forRoot({ networkLoading }: PlexModuleConfig): ModuleWithProviders {
        return {
            ngModule: PlexModule,
            providers: [
                Plex,
                {
                    provide: NETWORK_LOADING,
                    useValue: networkLoading
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: NetworkLoadingInterceptor,
                    multi: true,
                }
            ]
        };
    }
}

export interface PlexModuleConfig {
    networkLoading?: boolean;
}
