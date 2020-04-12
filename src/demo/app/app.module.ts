import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';
import { AppComponent } from './app.component';

// Plex
import { PlexModule } from '../../lib/module';
import { Plex } from '../../lib/core/service';

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
import { TabsDemoComponent } from './tabs/tabs.component';
import { AccordionDemoComponent } from './accordion/accordion.component';
import { SelectDemoComponent } from './select/select.component';
import { DateTimeDemoComponent } from './datetime/datetime.component';
import { ModalDemoComponent } from './modal/modal.component';
import { LoaderDemoComponent } from './loader/loader.component';
import { RibbonDemoComponent } from './ribbon/ribbon.component';
import { PhoneDemoComponent } from './phone/phone.component';
import { DropdownDemoComponent } from './dropdown/dropdown.component';
import { WizardDemoComponent } from './wizard/wizard.component';
import { TemplateFormComponent } from './templates/template-form';
import { TemplateVisualizacionComponent } from './templates/template-visualizacion';
import { TemplateBusquedaComponent } from './templates/template-busqueda';
import { TemplateBotoneraSidebarComponent } from './templates/template-form-sidebar';
import { FechaPipe } from './templates/fecha.pipe';
import { HeaderPacienteComponent } from './header-paciente/header-paciente.component';
import { ItemDemoComponent } from './item-list/item-list.component';
import { DetailDemoComponent } from './detail/detail.component';
import { WrapperDemoComponent } from './wrapper/wrapper.component.';
// Template
import { ListadoSidebarComponent } from './templates/listado-sidebar/listado-sidebar';
import { SidebarDetalleComponent } from './templates/listado-sidebar/sidebar/detalle/sidebar-detalle.component';
import { MainListadoComponent } from './templates/listado-sidebar/main/listado/main-listado.component';
import { ModalTemplateComponent } from './templates/componentes/plex-modal-template/plex-modal-template';
import { DemoIconComponent } from './icon/icon';

@NgModule({
    declarations: [
        AppComponent,
        BoxDemoComponent,
        TextDemoComponent,
        HomeDemoComponent,
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
        ModalDemoComponent,
        LoaderDemoComponent,
        RibbonDemoComponent,
        PhoneDemoComponent,
        DropdownDemoComponent,
        WizardDemoComponent,
        DemoIconComponent,
        TemplateFormComponent,
        TemplateVisualizacionComponent,
        TemplateBusquedaComponent,
        TemplateBotoneraSidebarComponent,
        FechaPipe,
        HeaderPacienteComponent,
        ItemDemoComponent,
        DetailDemoComponent,
        WrapperDemoComponent,
        ListadoSidebarComponent,
        SidebarDetalleComponent,
        MainListadoComponent,
        ModalTemplateComponent
    ],
    entryComponents: [
        HeaderPacienteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PlexModule,
        routing
    ],
    providers: [
        Plex,
        appRoutingProviders,
        ServiceDemoSelect,
        PacienteService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
