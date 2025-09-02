import { CommonModule, TitleCasePipe } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

// Componentes
import { PlexAccordionComponent } from './accordion/accordion.component';
import { PlexPanelComponent } from './accordion/panel.component';
import { PlexAppComponent } from './app/app.component';
import { PlexBadgeComponent } from './badge/badge.component';
import { PlexBoolComponent } from './bool/bool.component';
import { PlexBoxComponent } from './box/box.component';
import { PlexButtonComponent } from './button/button.component';
import { PlexCardComponent } from './card/card.component';
import { PlexCopyComponent } from './copy/copy.component';
import { PlexDateTimeComponent } from './datetime/datetime.component';
import { PlexDetailComponent } from './detail/detail.component';
import { PlexDropdownComponent } from './dropdown/dropdown.component';
import { PlexFloatComponent } from './float/float.component';
import { PlexGridComponent } from './grid/grid.component';
import { PlexHelpComponent } from './help/help.component';
import { PlexIconComponent } from './icon/icon.component';
import { PlexIntComponent } from './int/int.component';
import { PlexHeadingComponent } from './item-list/heading.component';
import { PlexItemComponent } from './item-list/item.component';
import { PlexListComponent } from './item-list/list.component';
import { PlexLabelComponent } from './label/label.component';
import { PlexFooterComponent } from './layout/footer.component';
import { PlexLayoutComponent } from './layout/layout.component';
import { PlexLayoutMainComponent } from './layout/main.component';
import { PlexLayoutSidebarComponent } from './layout/sidebar.component';
import { PlexLoaderComponent } from './loader/loader.component';
import { PlexModalTitleComponent } from './modal/modal-title.component';
import { PlexModalComponent } from './modal/modal.component';
import { PlexOptionsComponent } from './options/options.component';
import { PlexPhoneComponent } from './phone/phone.component';
import { PlexRadioComponent } from './radio/radio.component';
import { PlexRibbonComponent } from './ribbon/ribbon.component';
import { PlexRipplesDirective } from './ripples/ripples.directive';
import { PlexScrollComponent } from './scroll/scroll.component';
import { PlexSelectComponent } from './select/select.component';
import { PlexSliderComponent } from './slider/slider.component';
import { PlexTableComponent } from './table/table.component';
import { PlexTabComponent } from './tabs/tab.component';
import { PlexTabsComponent } from './tabs/tabs.component';
import { PlexTextComponent } from './text/text.component';
import { PlexTitleComponent } from './title/title.component';
import { TooltipContentComponent } from './tooltip/tooltip-content.component';
import { TooltipComponentDirective } from './tooltip/tooltip.component';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';
import { PlexVisualizadorComponent } from './visualizador/visualizador.component';
import { PlexWrapperComponent } from './wrapper/wrapper.component';
import { PlexMenuComponent } from './menu/menu.component';


// Directivas
import { AlignDirective } from './directives/align.directive';
import { CaseDirective } from './directives/case.directive';
import { GrowDirective } from './directives/grow.directive';
import { JustifyDirective } from './directives/justify.directive';
import { ResponsiveDirective } from './directives/responsive.directive';
import { SpanDirective } from './directives/span.directive';
import { PreviewDirective } from './visualizador/preview.directive';
import { PlexWizardDirective } from './wizard/wizard.directive';
import { MatRippleModule } from '@angular/material/core';

// Third party
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import 'hammerjs';
import { NgChartsModule } from 'ng2-charts';
import { NgxSimpleTextEditorModule } from 'ngx-simple-text-editor';
import { AccordionDirective } from './accordion/pl-accordion.directive';
import { NavItemComponent } from './app/nav-item.component';
import * as configMoment from './core/configMoment.function';
import { NETWORK_LOADING, NetworkLoadingInterceptor } from './core/network-loading.service';
import { PlexVisualizadorService } from './core/plex-visualizador.service';
import { Plex } from './core/service';
import { MobileDirective } from './directives/mobile.directive';
import { PlexGroupItemComponent } from './group/group-item.component';
import { PlexGroupComponent } from './group/group.component';
import { HelpDirective } from './help/help.directive';
import { HelpService } from './help/services/help.service';
import { HintComponent } from './hint/hint.component';
import { HintDirective } from './hint/hint.directive';
import { PlexColumnDirective } from './table/columns.directive';
import { PlexTableColDirective } from './table/display-column.directive';
import { PlexTableColumnsComponent } from './table/table-column-dropdown.component';
import { PlexTableSortPipe } from './table/table-sort.pipe';
import { TabDirective } from './tabs/pl-tab.directive';
import { SimpleNotificationsModule } from './toast/simple-notifications.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatRadioModule,
        MatTooltipModule,
        NgChartsModule,
        InfiniteScrollModule,
        SimpleNotificationsModule.forRoot(),
        NgxSimpleTextEditorModule,
        MatMenuModule,
        MatRippleModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule
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
        TooltipComponentDirective,
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
        PlexMenuComponent,
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
        TooltipComponentDirective,
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
        PlexMenuComponent,
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
        Plex,
        { provide: MAT_DATE_LOCALE, useValue: 'es-AR' }
    ]
})
export class PlexModule {

    constructor() {
        configMoment.configureLocale();
    }


    static forRoot(config: PlexModuleConfig = {}): ModuleWithProviders<PlexModule> {
        return {
            ngModule: PlexModule,
            providers: [
                Plex,
                PlexVisualizadorService,
                { provide: NETWORK_LOADING, useValue: config.networkLoading },
                { provide: HTTP_INTERCEPTORS, useClass: NetworkLoadingInterceptor, multi: true },
            ],
        };
    }
}

export interface PlexModuleConfig {
    networkLoading?: boolean;
}
