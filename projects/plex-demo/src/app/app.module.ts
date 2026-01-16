import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routes';

// Plex
import { Plex, PlexModule } from '@andes/plex';
import { SimpleNotificationsModule, PushNotificationsModule } from '@andes/plex';

// Servicios
import { ServiceDemoSelect } from '../app/select/select.service';
import { PacienteService } from '../app/templates/service/paciente.service';
import { CamaService } from '../app/templates/service/cama.service';

// Routes
import { AccordionDemoComponent } from './accordion/accordion.component';
import { BoolDemoComponent } from './bool/bool.component';
import { BoxDemoComponent } from './box/box.component';
import { ButtonDemoComponent } from './button/button.component';
import { CardDemoComponent } from './card/card.component';
import { DateTimeDemoComponent } from './datetime/datetime.component';
import { DetailDemoComponent } from './detail/detail.component';
import { DropdownDemoComponent } from './dropdown/dropdown.component';
import { FloatDemoComponent } from './float/float.component';
import { FontsDemoComponent } from './fonts/fonts.component';
import { GridDemoComponent } from './grid/grid.component';
import { HeaderPacienteComponent } from './header-paciente/header-paciente.component';
import { HomeDemoComponent } from './home/home.component';
import { IntDemoComponent } from './int/int.component';
import { ItemDemoComponent } from './item-list/item-list.component';
import { LabelDemoComponent } from './label/label.component';
import { LoaderDemoComponent } from './loader/loader.component';
import { PhoneDemoComponent } from './phone/phone.component';
import { RadioDemoComponent } from './radio/radio.component';
import { RibbonDemoComponent } from './ribbon/ribbon.component';
import { SelectDemoComponent } from './select/select.component';
import { SliderDemoComponent } from './slider/slider.component';
import { SwalModalDemoComponent } from './swal-modal/swal-modal.component';
import { TableDemoComponent } from './table/table';
import { TabsDemoComponent } from './tabs/tabs.component';
import { FechaPipe } from './templates/fecha.pipe';
import { TemplateBusquedaComponent } from './templates/template-busqueda';
import { TemplateFormComponent } from './templates/template-form';
import { TemplateBotoneraSidebarComponent } from './templates/template-form-sidebar';
import { TemplateInicioComponent } from './templates/template-inicio';
import { TemplateVisualizacionComponent } from './templates/template-visualizacion';
import { TextDemoComponent } from './text/text.component';
import { WizardDemoComponent } from './wizard/wizard.component';
import { WrapperDemoComponent } from './wrapper/wrapper.component';
import { MenuDemoComponent } from './menu/menu.component';

// Template
import { AlignDemoComponent } from './directives/componentes/align/align.component';
import { CaseDemoComponent } from './directives/componentes/case/case.component';
import { HintDemoComponent } from './directives/componentes/hint/hint.component';
import { TooltipDemoComponent } from './directives/componentes/tooltip/tooltip.component';
import { DemoDirectivesComponent } from './directives/directives.component';
import { DemoDirectivesSidebarComponent } from './directives/listado-sidebar/directives-sidebar.component';
import { DemoGroupComponent } from './group/group.component';
import { HelpDemoComponent } from './help/help.component';
import { DemoIconComponent } from './icon/icon';
import { NavbarDemoComponent } from './navbar/navbar';
import { ModalTemplateComponent } from './templates/componentes/plex-modal-template/plex-modal-template';
import { ListadoSidebarComponent } from './templates/listado-sidebar/listado-sidebar';
import { MainListadoComponent } from './templates/listado-sidebar/main/listado/main-listado.component';
import { SidebarDetalleComponent } from './templates/listado-sidebar/sidebar/detalle/sidebar-detalle.component';
import { InternacionComponent } from './templates/modulos/internacion/internacion';
import { RecursosListadoComponent } from './templates/modulos/internacion/listado/recursos-listado.component';
import { RecursoDetalleComponent } from './templates/modulos/internacion/sidebar/detalle/recurso-detalle.component';
import { DatosBasicosComponent } from './templates/modulos/mpi/main/alta/datos-basicos/datos-basicos.component';
import { DatosContactoComponent } from './templates/modulos/mpi/main/alta/datos-contacto/datos-contacto.component';
import { DatosNotasComponent } from './templates/modulos/mpi/main/alta/datos-notas/datos-notas.component';
import { DatosRelacionesComponent } from './templates/modulos/mpi/main/alta/datos-relaciones/datos-relaciones.component';
import { MpiAltaComponent } from './templates/modulos/mpi/main/alta/mpi-alta.component';
import { MpiListadoComponent } from './templates/modulos/mpi/main/listado/mpi-listado.component';
import { MpiMaquetadoComponent } from './templates/modulos/mpi/mpi-maquetado';
import { MpiDetalleComponent } from './templates/modulos/mpi/sidebar/detalle/mpi-detalle.component';
import { DemoTitleComponent } from './title/title.component';


@NgModule({
    declarations: [
        AppComponent,
        AccordionDemoComponent,
        BoolDemoComponent,
        BoxDemoComponent,
        ButtonDemoComponent,
        CardDemoComponent,
        DateTimeDemoComponent,
        DetailDemoComponent,
        DropdownDemoComponent,
        FloatDemoComponent,
        FontsDemoComponent,
        GridDemoComponent,
        HeaderPacienteComponent,
        HomeDemoComponent,
        IntDemoComponent,
        ItemDemoComponent,
        LabelDemoComponent,
        LoaderDemoComponent,
        PhoneDemoComponent,
        RadioDemoComponent,
        RibbonDemoComponent,
        SelectDemoComponent,
        SliderDemoComponent,
        SwalModalDemoComponent,
        TableDemoComponent,
        TabsDemoComponent,
        FechaPipe,
        TemplateBusquedaComponent,
        TemplateFormComponent,
        TemplateBotoneraSidebarComponent,
        TemplateInicioComponent,
        TemplateVisualizacionComponent,
        TextDemoComponent,
        WizardDemoComponent,
        WrapperDemoComponent,
        MenuDemoComponent,
        AlignDemoComponent,
        CaseDemoComponent,
        HintDemoComponent,
        TooltipDemoComponent,
        DemoDirectivesComponent,
        DemoDirectivesSidebarComponent,
        DemoGroupComponent,
        HelpDemoComponent,
        DemoIconComponent,
        NavbarDemoComponent,
        ModalTemplateComponent,
        ListadoSidebarComponent,
        MainListadoComponent,
        SidebarDetalleComponent,
        InternacionComponent,
        RecursosListadoComponent,
        RecursoDetalleComponent,
        DatosBasicosComponent,
        DatosContactoComponent,
        DatosNotasComponent,
        DatosRelacionesComponent,
        MpiAltaComponent,
        MpiListadoComponent,
        MpiMaquetadoComponent,
        MpiDetalleComponent,
        DemoTitleComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        MatTooltipModule,
        RouterModule,
        PlexModule.forRoot({ networkLoading: true }),
        SimpleNotificationsModule,
        PushNotificationsModule,
        routing,
        MatNativeDateModule
    ],
    providers: [
        appRoutingProviders,
        Plex,
        ServiceDemoSelect,
        PacienteService,
        CamaService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
