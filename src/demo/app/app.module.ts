import { PlexColumnDirective } from './../../lib/table/columns.directive';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';

// Plex
import { PlexModule } from '../../lib/module';

// Services
import { ServiceDemoSelect } from './select/select.service';
import { PacienteService } from './templates/service/paciente.service';

// Routes
import { HomeDemoComponent } from './home/home.component';
import { BoxDemoComponent } from './box/box.component';
import { TextDemoComponent } from './text/text.component';
import { BoolDemoComponent } from './bool/bool.component';
import { RadioDemoComponent } from './radio/radio.component';
import { IntDemoComponent } from './int/int.component';
import { FloatDemoComponent } from './float/float.component';
import { FontsDemoComponent } from './fonts/fonts.component';
import { ButtonDemoComponent } from './button/button.component';
import { TableDemoComponent } from './table/table';
import { TabsDemoComponent } from './tabs/tabs.component';
import { AccordionDemoComponent } from './accordion/accordion.component';
import { SelectDemoComponent } from './select/select.component';
import { DateTimeDemoComponent } from './datetime/datetime.component';
import { LabelDemoComponent } from './label/label.component';
import { SwalModalDemoComponent } from './swal-modal/swal-modal.component';
import { LoaderDemoComponent } from './loader/loader.component';
import { RibbonDemoComponent } from './ribbon/ribbon.component';
import { PhoneDemoComponent } from './phone/phone.component';
import { DropdownDemoComponent } from './dropdown/dropdown.component';
import { WizardDemoComponent } from './wizard/wizard.component';
import { TemplateInicioComponent } from './templates/template-inicio';
import { TemplateFormComponent } from './templates/template-form';
import { TemplateVisualizacionComponent } from './templates/template-visualizacion';
import { TemplateBusquedaComponent } from './templates/template-busqueda';
import { TemplateBotoneraSidebarComponent } from './templates/template-form-sidebar';
import { FechaPipe } from './templates/fecha.pipe';
import { HeaderPacienteComponent } from './header-paciente/header-paciente.component';
import { ItemDemoComponent } from './item-list/item-list.component';
import { DetailDemoComponent } from './detail/detail.component';
import { WrapperDemoComponent } from './wrapper/wrapper.component';
import { GridDemoComponent } from './grid/grid.component';
import { CardDemoComponent } from './card/card.component';
import { SliderDemoComponent } from './slider/slider.component';


// Template
import { ListadoSidebarComponent } from './templates/listado-sidebar/listado-sidebar';
import { SidebarDetalleComponent } from './templates/listado-sidebar/sidebar/detalle/sidebar-detalle.component';
import { MainListadoComponent } from './templates/listado-sidebar/main/listado/main-listado.component';
import { ModalTemplateComponent } from './templates/componentes/plex-modal-template/plex-modal-template';
import { DemoIconComponent } from './icon/icon';
import { NavbarDemoComponent } from './navbar/navbar';
import { HelpDemoComponent } from './help/help.component';
import { HttpClientModule } from '@angular/common/http';
import { MpiMaquetadoComponent } from './templates/modulos/mpi/mpi-maquetado';
import { MpiListadoComponent } from './templates/modulos/mpi/main/listado/mpi-listado.component';
import { MpiDetalleComponent } from './templates/modulos/mpi/sidebar/detalle/mpi-detalle.component';
import { MpiAltaComponent } from './templates/modulos/mpi/main/alta/mpi-alta.component';
import { DatosBasicosComponent } from './templates/modulos/mpi/main/alta/datos-basicos/datos-basicos.component';
import { DatosContactoComponent } from './templates/modulos/mpi/main/alta/datos-contacto/datos-contacto.component';
import { DatosNotasComponent } from './templates/modulos/mpi/main/alta/datos-notas/datos-notas.component';
import { DatosRelacionesComponent } from './templates/modulos/mpi/main/alta/datos-relaciones/datos-relaciones.component';
import { DemoDirectivesComponent } from './directives/directives.component';
import { CaseDemoComponent } from './directives/componentes/case/case.component';
import { DemoDirectivesSidebarComponent } from './directives/listado-sidebar/directives-sidebar.component';
import { TooltipDemoComponent } from './directives/componentes/tooltip/tooltip.component';
import { HintDemoComponent } from './directives/componentes/hint/hint.component';
import { AlignDemoComponent } from './directives/componentes/align/align.component';
import { CamaService } from './templates/service/cama.service';
import { InternacionComponent } from './templates/modulos/internacion/internacion';
import { RecursosListadoComponent } from './templates/modulos/internacion/listado/recursos-listado.component';
import { RecursoDetalleComponent } from './templates/modulos/internacion/sidebar/detalle/recurso-detalle.component';

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
        RecursoDetalleComponent
    ],
    entryComponents: [
        HeaderPacienteComponent
    ],
    imports: [
        BrowserAnimationsModule,
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
