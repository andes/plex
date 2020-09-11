"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ngx_infinite_scroll_1 = require("ngx-infinite-scroll");
// Componentes
var app_component_1 = require("./app/app.component");
var box_component_1 = require("./box/box.component");
var text_component_1 = require("./text/text.component");
var int_component_1 = require("./int/int.component");
var float_component_1 = require("./float/float.component");
var button_component_1 = require("./button/button.component");
var tabs_component_1 = require("./tabs/tabs.component");
var tab_component_1 = require("./tabs/tab.component");
var accordion_component_1 = require("./accordion/accordion.component");
var panel_component_1 = require("./accordion/panel.component");
var bool_component_1 = require("./bool/bool.component");
var radio_component_1 = require("./radio/radio.component");
var select_component_1 = require("./select/select.component");
var datetime_component_1 = require("./datetime/datetime.component");
var loader_component_1 = require("./loader/loader.component");
var ribbon_component_1 = require("./ribbon/ribbon.component");
var scroll_component_1 = require("./scroll/scroll.component");
var ripples_directive_1 = require("./ripples/ripples.directive");
var validation_messages_component_1 = require("./validation-messages/validation-messages.component");
var phone_component_1 = require("./phone/phone.component");
var dropdown_component_1 = require("./dropdown/dropdown.component");
var tooltip_component_1 = require("./tooltip/tooltip.component");
var tooltip_content_component_1 = require("./tooltip/tooltip-content.component");
var icon_component_1 = require("./icon/icon.component");
var badge_component_1 = require("./badge/badge.component");
var layout_component_1 = require("./layout/layout.component");
var footer_component_1 = require("./layout/footer.component");
var main_component_1 = require("./layout/main.component");
var sidebar_component_1 = require("./layout/sidebar.component");
var list_component_1 = require("./item-list/list.component");
var item_component_1 = require("./item-list/item.component");
var label_component_1 = require("./label/label.component");
var heading_component_1 = require("./item-list/heading.component");
var title_component_1 = require("./title/title.component");
var help_component_1 = require("./help/help.component");
var modal_component_1 = require("./modal/modal.component");
var modal_title_component_1 = require("./modal/modal-title.component");
var copy_component_1 = require("./copy/copy.component");
var detail_component_1 = require("./detail/detail.component");
var options_component_1 = require("./options/options.component");
var visualizador_component_1 = require("./visualizador/visualizador.component");
var wrapper_component_1 = require("./wrapper/wrapper.component");
var grid_component_1 = require("./grid/grid.component");
var card_component_1 = require("./card/card.component");
// Directivas
var wizard_directive_1 = require("./wizard/wizard.directive");
var grow_directive_1 = require("./directives/grow.directive");
var justify_directive_1 = require("./directives/justify.directive");
var preview_directive_1 = require("./visualizador/preview.directive");
var responsive_directive_1 = require("./directives/responsive.directive");
var span_directive_1 = require("./directives/span.directive");
var checkbox_1 = require("@angular/material/checkbox");
var radio_1 = require("@angular/material/radio");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var tooltip_1 = require("@angular/material/tooltip");
require("hammerjs");
var configMoment = require("./core/configMoment.function");
var simple_notifications_module_1 = require("./toast/simple-notifications.module");
var ng2_charts_1 = require("ng2-charts");
var ngx_quill_1 = require("ngx-quill");
var nav_item_component_1 = require("./app/nav-item.component");
var hint_component_1 = require("./hint/hint.component");
var hint_directive_1 = require("./hint/hint.directive");
var help_directive_1 = require("./help/help.directive");
var pl_tab_directive_1 = require("./tabs/pl-tab.directive");
var MODULES = [
    app_component_1.PlexAppComponent,
    box_component_1.PlexBoxComponent,
    text_component_1.PlexTextComponent,
    int_component_1.PlexIntComponent,
    float_component_1.PlexFloatComponent,
    button_component_1.PlexButtonComponent,
    tabs_component_1.PlexTabsComponent,
    accordion_component_1.PlexAccordionComponent,
    panel_component_1.PlexPanelComponent,
    tab_component_1.PlexTabComponent,
    bool_component_1.PlexBoolComponent,
    radio_component_1.PlexRadioComponent,
    select_component_1.PlexSelectComponent,
    datetime_component_1.PlexDateTimeComponent,
    loader_component_1.PlexLoaderComponent,
    ribbon_component_1.PlexRibbonComponent,
    scroll_component_1.PlexScrollComponent,
    phone_component_1.PlexPhoneComponent,
    dropdown_component_1.PlexDropdownComponent,
    icon_component_1.PlexIconComponent,
    badge_component_1.PlexBadgeComponent,
    layout_component_1.PlexLayoutComponent,
    footer_component_1.PlexFooterComponent,
    main_component_1.PlexLayoutMainComponent,
    sidebar_component_1.PlexLayoutSidebarComponent,
    list_component_1.PlexListComponent,
    item_component_1.PlexItemComponent,
    label_component_1.PlexLabelComponent,
    heading_component_1.PlexHeadingComponent,
    title_component_1.PlexTitleComponent,
    tooltip_component_1.TooltipComponent,
    help_component_1.PlexHelpComponent,
    modal_component_1.PlexModalComponent,
    modal_title_component_1.PlexModalTitleComponent,
    copy_component_1.PlexCopyComponent,
    detail_component_1.PlexDetailComponent,
    options_component_1.PlexOptionsComponent,
    visualizador_component_1.PlexVisualizadorComponent,
    nav_item_component_1.NavItemComponent,
    wrapper_component_1.PlexWrapperComponent,
    grid_component_1.PlexGridComponent,
    card_component_1.PlexCardComponent,
    // Directivas
    grow_directive_1.GrowDirective,
    help_directive_1.HelpDirective,
    hint_directive_1.HintDirective,
    justify_directive_1.JustifyDirective,
    preview_directive_1.PreviewDirective,
    ripples_directive_1.PlexRipplesDirective,
    wizard_directive_1.PlexWizardDirective,
    responsive_directive_1.ResponsiveDirective,
    span_directive_1.SpanDirective,
    pl_tab_directive_1.TabDirective
    // MatTooltip
];
var PlexModule = /** @class */ (function () {
    function PlexModule() {
        // Inicializa moment
        configMoment.configureLocale();
    }
    PlexModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                slide_toggle_1.MatSlideToggleModule,
                checkbox_1.MatCheckboxModule,
                radio_1.MatRadioModule,
                tooltip_1.MatTooltipModule,
                ng2_charts_1.ChartsModule,
                ngx_quill_1.QuillModule,
                ngx_infinite_scroll_1.InfiniteScrollModule,
                simple_notifications_module_1.SimpleNotificationsModule.forRoot(),
            ],
            declarations: MODULES.concat([
                validation_messages_component_1.ValidationMessagesComponent,
                tooltip_content_component_1.TooltipContentComponent,
                hint_component_1.HintComponent,
            ]),
            entryComponents: [
                tooltip_content_component_1.TooltipContentComponent,
                radio_1.MatRadioButton,
                visualizador_component_1.PlexVisualizadorComponent,
                hint_component_1.HintComponent
            ],
            exports: MODULES.concat([
                tooltip_1.MatTooltip
            ])
        }),
        __metadata("design:paramtypes", [])
    ], PlexModule);
    return PlexModule;
}());
exports.PlexModule = PlexModule;
//# sourceMappingURL=../../src/lib/module.js.map