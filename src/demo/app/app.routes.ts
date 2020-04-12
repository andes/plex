import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDemoComponent } from './home/home.component';
import { BoxDemoComponent } from './box/box.component';
import { TextDemoComponent } from './text/text.component';
import { DateTimeDemoComponent } from './datetime/datetime.component';
import { BoolDemoComponent } from './bool/bool.component';
import { RadioDemoComponent } from './radio/radio.component';
import { IntDemoComponent } from './int/int.component';
import { FloatDemoComponent } from './float/float.component';
import { ButtonDemoComponent } from './button/button.component';
import { TabsDemoComponent } from './tabs/tabs.component';
import { AccordionDemoComponent } from './accordion/accordion.component';
import { SelectDemoComponent } from './select/select.component';
import { ModalDemoComponent } from './modal/modal.component';
import { LoaderDemoComponent } from './loader/loader.component';
import { RibbonDemoComponent } from './ribbon/ribbon.component';
import { PhoneDemoComponent } from './phone/phone.component';
import { FontsDemoComponent } from './fonts/fonts.component';
import { DropdownDemoComponent } from './dropdown/dropdown.component';
import { WizardDemoComponent } from './wizard/wizard.component';
import { TemplateFormComponent } from './templates/template-form';
import { TemplateVisualizacionComponent } from './templates/template-visualizacion';
import { TemplateBusquedaComponent } from './templates/template-busqueda';
import { TemplateBotoneraSidebarComponent } from './templates/template-form-sidebar';
import { ItemDemoComponent } from './item-list/item-list.component';
import { DetailDemoComponent } from './detail/detail.component';
import { ListadoSidebarComponent } from './templates/listado-sidebar/listado-sidebar';
import { SidebarDetalleComponent } from './templates/listado-sidebar/sidebar/detalle/sidebar-detalle.component';
import { WrapperDemoComponent } from './wrapper/wrapper.component.';
import { DemoIconComponent } from './icon/icon';

const appRoutes: Routes = [
    { path: 'inicio', component: HomeDemoComponent },
    { path: 'box', component: BoxDemoComponent },
    { path: 'text', component: TextDemoComponent },
    { path: 'datetime', component: DateTimeDemoComponent },
    { path: 'fonts', component: FontsDemoComponent },
    { path: 'wrapper', component: WrapperDemoComponent },
    { path: 'bool', component: BoolDemoComponent },
    { path: 'radio', component: RadioDemoComponent },
    { path: 'int', component: IntDemoComponent },
    { path: 'float', component: FloatDemoComponent },
    { path: 'button-badge', component: ButtonDemoComponent },
    { path: 'tabs', component: TabsDemoComponent },
    { path: 'accordion', component: AccordionDemoComponent },
    { path: 'modal', component: ModalDemoComponent },
    { path: 'select', component: SelectDemoComponent },
    { path: 'loader', component: LoaderDemoComponent },
    { path: 'ribbon', component: RibbonDemoComponent },
    { path: 'phone', component: PhoneDemoComponent },
    { path: 'dropdown', component: DropdownDemoComponent },
    { path: 'wizard', component: WizardDemoComponent },
    { path: 'templates/form', component: TemplateFormComponent },
    { path: 'templates/form-sidebar', component: TemplateBotoneraSidebarComponent },
    { path: 'templates/visualizacion', component: TemplateVisualizacionComponent },
    { path: 'templates/busqueda', component: TemplateBusquedaComponent },
    {
        path: 'templates/listado-sidebar', component: ListadoSidebarComponent,
        children: [
            { path: ':id', component: SidebarDetalleComponent }
        ]
    },
    { path: 'item', component: ItemDemoComponent },
    { path: 'detail', component: DetailDemoComponent },
    { path: 'icon', component: DemoIconComponent },
    { path: '**', redirectTo: 'inicio' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
