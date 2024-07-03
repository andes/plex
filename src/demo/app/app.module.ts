import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlexColumnDirective } from './../../lib/table/columns.directive';

import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routes';

// Plex
import { PlexModule } from '../../lib/module';

// Services
import { ServiceDemoSelect } from './select/select.service';
import { PacienteService } from './templates/service/paciente.service';

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


// Template
import { HttpClientModule } from '@angular/common/http';
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
import { CamaService } from './templates/service/cama.service';
import { DemoTitleComponent } from './title/title.component';


@NgModule({
    declarations: [
        AppComponent,
        BoxDemoComponent,
        TextDemoComponent,
        HomeDemoComponent,
        HelpDemoComponent,
        NavbarDemoComponent,
        IntDemoComponent,
        FloatDemoComponent,
        ButtonDemoComponent,
        TabsDemoComponent,
        FontsDemoComponent,
        AccordionDemoComponent,
        BoolDemoComponent,
        RadioDemoComponent,
        SelectDemoComponent,
        DateTimeDemoComponent,
        LabelDemoComponent,
        SwalModalDemoComponent,
        ModalTemplateComponent,
        LoaderDemoComponent,
        RibbonDemoComponent,
        PhoneDemoComponent,
        TableDemoComponent,
        DropdownDemoComponent,
        WizardDemoComponent,
        DemoIconComponent,
        TemplateInicioComponent,
        TemplateFormComponent,
        TemplateVisualizacionComponent,
        TemplateBusquedaComponent,
        TemplateBotoneraSidebarComponent,
        FechaPipe,
        HeaderPacienteComponent,
        ItemDemoComponent,
        DetailDemoComponent,
        WrapperDemoComponent,
        GridDemoComponent,
        CardDemoComponent,
        SliderDemoComponent,
        ListadoSidebarComponent,
        SidebarDetalleComponent,
        MainListadoComponent,
        ModalTemplateComponent,
        // Templates genéricos
        ListadoSidebarComponent,
        SidebarDetalleComponent,
        MainListadoComponent,
        // Maquetado módulos
        MpiMaquetadoComponent,
        MpiListadoComponent,
        MpiDetalleComponent,
        ModalTemplateComponent,
        MpiAltaComponent,
        DatosBasicosComponent,
        DatosContactoComponent,
        DatosNotasComponent,
        DatosRelacionesComponent,
        DemoDirectivesComponent,
        DemoDirectivesSidebarComponent,
        TooltipDemoComponent,
        HintDemoComponent,
        CaseDemoComponent,
        AlignDemoComponent,
        InternacionComponent,
        RecursosListadoComponent,
        RecursoDetalleComponent,
        DemoTitleComponent,
        DemoGroupComponent
    ],
    entryComponents: [
        HeaderPacienteComponent
    ],
    imports: [
        BrowserAnimationsModule,
        MatTooltipModule,
        FormsModule,
        HttpClientModule,
        PlexModule.forRoot({ networkLoading: true }),
        routing
    ],
    providers: [
        appRoutingProviders,
        ServiceDemoSelect,
        PacienteService,
        CamaService,
        PlexColumnDirective

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
