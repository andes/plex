"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tooltip_hint_component_1 = require("./tooltip-hint/tooltip-hint.component");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var help_component_1 = require("./help/help.component");
var box_component_1 = require("./box/box.component");
var text_component_1 = require("./text/text.component");
var datetime_component_1 = require("./datetime/datetime.component");
var bool_component_1 = require("./bool/bool.component");
var radio_component_1 = require("./radio/radio.component");
var int_component_1 = require("./int/int.component");
var float_component_1 = require("./float/float.component");
var button_component_1 = require("./button/button.component");
var tabs_component_1 = require("./tabs/tabs.component");
var accordion_component_1 = require("./accordion/accordion.component");
var select_component_1 = require("./select/select.component");
var label_component_1 = require("./label/label.component");
var swal_modal_component_1 = require("./swal-modal/swal-modal.component");
var loader_component_1 = require("./loader/loader.component");
var ribbon_component_1 = require("./ribbon/ribbon.component");
var phone_component_1 = require("./phone/phone.component");
var fonts_component_1 = require("./fonts/fonts.component");
var dropdown_component_1 = require("./dropdown/dropdown.component");
var wizard_component_1 = require("./wizard/wizard.component");
var wrapper_component_1 = require("./wrapper/wrapper.component");
var grid_component_1 = require("./grid/grid.component");
var template_form_1 = require("./templates/template-form");
var template_visualizacion_1 = require("./templates/template-visualizacion");
var template_busqueda_1 = require("./templates/template-busqueda");
var template_form_sidebar_1 = require("./templates/template-form-sidebar");
var item_list_component_1 = require("./item-list/item-list.component");
var detail_component_1 = require("./detail/detail.component");
var listado_sidebar_1 = require("./templates/listado-sidebar/listado-sidebar");
var sidebar_detalle_component_1 = require("./templates/listado-sidebar/sidebar/detalle/sidebar-detalle.component");
var icon_1 = require("./icon/icon");
var navbar_1 = require("./navbar/navbar");
var plex_modal_template_1 = require("./templates/componentes/plex-modal-template/plex-modal-template");
var card_component_1 = require("./card/card.component");
var appRoutes = [
    { path: 'inicio', component: home_component_1.HomeDemoComponent },
    { path: 'navbar', component: navbar_1.NavbarDemoComponent },
    { path: 'box', component: box_component_1.BoxDemoComponent },
    { path: 'text', component: text_component_1.TextDemoComponent },
    { path: 'datetime', component: datetime_component_1.DateTimeDemoComponent },
    { path: 'help', component: help_component_1.HelpDemoComponent },
    { path: 'fonts', component: fonts_component_1.FontsDemoComponent },
    { path: 'bool', component: bool_component_1.BoolDemoComponent },
    { path: 'radio', component: radio_component_1.RadioDemoComponent },
    { path: 'int', component: int_component_1.IntDemoComponent },
    { path: 'float', component: float_component_1.FloatDemoComponent },
    { path: 'button-badge', component: button_component_1.ButtonDemoComponent },
    { path: 'tabs', component: tabs_component_1.TabsDemoComponent },
    { path: 'accordion', component: accordion_component_1.AccordionDemoComponent },
    { path: 'swal-modal', component: swal_modal_component_1.SwalModalDemoComponent },
    { path: 'modal', component: plex_modal_template_1.ModalTemplateComponent },
    { path: 'select', component: select_component_1.SelectDemoComponent },
    { path: 'label', component: label_component_1.LabelDemoComponent },
    { path: 'loader', component: loader_component_1.LoaderDemoComponent },
    { path: 'ribbon', component: ribbon_component_1.RibbonDemoComponent },
    { path: 'phone', component: phone_component_1.PhoneDemoComponent },
    { path: 'dropdown', component: dropdown_component_1.DropdownDemoComponent },
    { path: 'tooltip-hint', component: tooltip_hint_component_1.TooltipHintDemoComponent },
    { path: 'wizard', component: wizard_component_1.WizardDemoComponent },
    { path: 'wrapper', component: wrapper_component_1.WrapperDemoComponent },
    { path: 'grid', component: grid_component_1.GridDemoComponent },
    { path: 'card', component: card_component_1.CardDemoComponent },
    { path: 'templates/form', component: template_form_1.TemplateFormComponent },
    { path: 'templates/form-sidebar', component: template_form_sidebar_1.TemplateBotoneraSidebarComponent },
    { path: 'templates/visualizacion', component: template_visualizacion_1.TemplateVisualizacionComponent },
    { path: 'templates/busqueda', component: template_busqueda_1.TemplateBusquedaComponent },
    {
        path: 'templates/listado-sidebar', component: listado_sidebar_1.ListadoSidebarComponent,
        children: [
            { path: ':id', component: sidebar_detalle_component_1.SidebarDetalleComponent }
        ]
    },
    { path: 'item', component: item_list_component_1.ItemDemoComponent },
    { path: 'detail', component: detail_component_1.DetailDemoComponent },
    { path: 'icon', component: icon_1.DemoIconComponent },
    { path: '**', redirectTo: 'inicio' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=../../../src/demo/app/app.routes.js.map