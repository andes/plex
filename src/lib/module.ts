import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
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
import { PlexTableComponent } from './table/table.component';
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
import { PlexSliderComponent } from './slider/slider.component';

// Directivas
import { AlignDirective } from './directives/align.directive';
import { PlexWizardDirective } from './wizard/wizard.directive';
import { GrowDirective } from './directives/grow.directive';
import { JustifyDirective } from './directives/justify.directive';
import { PreviewDirective } from './visualizador/preview.directive';
import { ResponsiveDirective } from './directives/responsive.directive';
import { SpanDirective } from './directives/span.directive';
import { CaseDirective } from './directives/case.directive';

// Third party
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule, MatRadioButton } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule, MatTooltip } from '@angular/material/tooltip';
import 'hammerjs';
import * as configMoment from './core/configMoment.function';
import { SimpleNotificationsModule } from './toast/simple-notifications.module';
import { ChartsModule } from 'ng2-charts';
import { NavItemComponent } from './app/nav-item.component';
import { HintComponent } from './hint/hint.component';
import { HintDirective } from './hint/hint.directive';
import { HelpDirective } from './help/help.directive';
import { HelpService } from './help/services/help.service';
import { TabDirective } from './tabs/pl-tab.directive';
import { Plex } from './core/service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NetworkLoadingInterceptor, NETWORK_LOADING } from './core/network-loading.service';
import { MobileDirective } from './directives/mobile.directive';
import { PlexTableColumnsComponent } from './table/table-column-dropdown.component';
import { PlexTableColDirective } from './table/display-column.directive';
import { PlexTableSortPipe } from './table/table-sort.pipe';
import { PlexColumnDirective } from './table/columns.directive';
import { AccordionDirective } from './accordion/pl-accordion.directive';
import { PlexVisualizadorService } from './core/plex-visualizador.service';
import { PlexGroupComponent } from './group/group.component';
import { PlexGroupItemComponent } from './group/group-item.component';
import { QuillModule } from 'ngx-quill';

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
        InfiniteScrollModule,
        SimpleNotificationsModule.forRoot(),
        QuillModule
    ],
    declarations: [
        PlexAppComponent,
        PlexBoxComponent,
        PlexTextComponent,
        PlexIntComponent,
        PlexFloatComponent,
        PlexButtonComponent,
        PlexTableComponent,
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
        PlexTableColumnsComponent,
        PlexTableColDirective,
        PlexTableSortPipe,
        PlexColumnDirective,
        PlexSliderComponent,
        PlexGroupComponent,
        PlexGroupItemComponent,

        // Directivas
        AlignDirective,
        GrowDirective,
        HelpDirective,
        HintDirective,
        JustifyDirective,
        PreviewDirective,
        PlexRipplesDirective,
        PlexWizardDirective,
        ResponsiveDirective,
        SpanDirective,
        CaseDirective,
        TabDirective,
        TooltipContentComponent,
        HintComponent,
        MobileDirective,
        AccordionDirective,

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
        PlexTableComponent,
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
        PlexTableColumnsComponent,
        PlexTableSortPipe,
        PlexSliderComponent,
        PlexGroupComponent,
        PlexGroupItemComponent,

        // Directivas
        AlignDirective,
        GrowDirective,
        HelpDirective,
        HintDirective,
        JustifyDirective,
        CaseDirective,
        PreviewDirective,
        PlexRipplesDirective,
        PlexWizardDirective,
        ResponsiveDirective,
        SpanDirective,
        TabDirective,
        MatTooltip,
        MobileDirective,
        PlexTableColDirective,
        PlexColumnDirective,
        AccordionDirective
    ],
    providers: [
        TitleCasePipe,
        HelpService,
    ]

})
export class PlexModule {

    constructor() {
        configMoment.configureLocale();
    }


    static forRoot({ networkLoading }: PlexModuleConfig): ModuleWithProviders<any> {
        return {
            ngModule: PlexModule,
            providers: [
                Plex,
                PlexVisualizadorService,
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
