"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./app.component");
// Plex
var module_1 = require("../../lib/module");
var service_1 = require("../../lib/core/service");
// Services
var select_service_1 = require("./select/select.service");
var paciente_service_1 = require("./templates/service/paciente.service");
// Routes
var home_component_1 = require("./home/home.component");
var box_component_1 = require("./box/box.component");
var text_component_1 = require("./text/text.component");
var bool_component_1 = require("./bool/bool.component");
var radio_component_1 = require("./radio/radio.component");
var int_component_1 = require("./int/int.component");
var float_component_1 = require("./float/float.component");
var fonts_component_1 = require("./fonts/fonts.component");
var button_component_1 = require("./button/button.component");
var tabs_component_1 = require("./tabs/tabs.component");
var accordion_component_1 = require("./accordion/accordion.component");
var select_component_1 = require("./select/select.component");
var datetime_component_1 = require("./datetime/datetime.component");
var label_component_1 = require("./label/label.component");
var swal_modal_component_1 = require("./swal-modal/swal-modal.component");
var loader_component_1 = require("./loader/loader.component");
var ribbon_component_1 = require("./ribbon/ribbon.component");
var phone_component_1 = require("./phone/phone.component");
var dropdown_component_1 = require("./dropdown/dropdown.component");
var wizard_component_1 = require("./wizard/wizard.component");
var template_form_1 = require("./templates/template-form");
var template_visualizacion_1 = require("./templates/template-visualizacion");
var template_busqueda_1 = require("./templates/template-busqueda");
var template_form_sidebar_1 = require("./templates/template-form-sidebar");
var fecha_pipe_1 = require("./templates/fecha.pipe");
var header_paciente_component_1 = require("./header-paciente/header-paciente.component");
var item_list_component_1 = require("./item-list/item-list.component");
var detail_component_1 = require("./detail/detail.component");
var wrapper_component_1 = require("./wrapper/wrapper.component");
var grid_component_1 = require("./grid/grid.component");
var card_component_1 = require("./card/card.component");
// Template
var listado_sidebar_1 = require("./templates/listado-sidebar/listado-sidebar");
var sidebar_detalle_component_1 = require("./templates/listado-sidebar/sidebar/detalle/sidebar-detalle.component");
var main_listado_component_1 = require("./templates/listado-sidebar/main/listado/main-listado.component");
var plex_modal_template_1 = require("./templates/componentes/plex-modal-template/plex-modal-template");
var icon_1 = require("./icon/icon");
var navbar_1 = require("./navbar/navbar");
var tooltip_hint_component_1 = require("./tooltip-hint/tooltip-hint.component");
var help_component_1 = require("./help/help.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                box_component_1.BoxDemoComponent,
                text_component_1.TextDemoComponent,
                home_component_1.HomeDemoComponent,
                help_component_1.HelpDemoComponent,
                navbar_1.NavbarDemoComponent,
                int_component_1.IntDemoComponent,
                float_component_1.FloatDemoComponent,
                button_component_1.ButtonDemoComponent,
                tabs_component_1.TabsDemoComponent,
                fonts_component_1.FontsDemoComponent,
                accordion_component_1.AccordionDemoComponent,
                bool_component_1.BoolDemoComponent,
                radio_component_1.RadioDemoComponent,
                select_component_1.SelectDemoComponent,
                datetime_component_1.DateTimeDemoComponent,
                label_component_1.LabelDemoComponent,
                swal_modal_component_1.SwalModalDemoComponent,
                plex_modal_template_1.ModalTemplateComponent,
                loader_component_1.LoaderDemoComponent,
                ribbon_component_1.RibbonDemoComponent,
                phone_component_1.PhoneDemoComponent,
                dropdown_component_1.DropdownDemoComponent,
                wizard_component_1.WizardDemoComponent,
                icon_1.DemoIconComponent,
                tooltip_hint_component_1.TooltipHintDemoComponent,
                template_form_1.TemplateFormComponent,
                template_visualizacion_1.TemplateVisualizacionComponent,
                template_busqueda_1.TemplateBusquedaComponent,
                template_form_sidebar_1.TemplateBotoneraSidebarComponent,
                fecha_pipe_1.FechaPipe,
                header_paciente_component_1.HeaderPacienteComponent,
                item_list_component_1.ItemDemoComponent,
                detail_component_1.DetailDemoComponent,
                wrapper_component_1.WrapperDemoComponent,
                grid_component_1.GridDemoComponent,
                card_component_1.CardDemoComponent,
                listado_sidebar_1.ListadoSidebarComponent,
                sidebar_detalle_component_1.SidebarDetalleComponent,
                main_listado_component_1.MainListadoComponent,
                plex_modal_template_1.ModalTemplateComponent
            ],
            entryComponents: [
                header_paciente_component_1.HeaderPacienteComponent
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                module_1.PlexModule,
                app_routes_1.routing
            ],
            providers: [
                service_1.Plex,
                app_routes_1.appRoutingProviders,
                select_service_1.ServiceDemoSelect,
                paciente_service_1.PacienteService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=../../../src/demo/app/app.module.js.map