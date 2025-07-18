import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionDemoComponent } from './accordion/accordion.component';
import { BoolDemoComponent } from './bool/bool.component';
import { BoxDemoComponent } from './box/box.component';
import { ButtonDemoComponent } from './button/button.component';
import { CardDemoComponent } from './card/card.component';
import { DateTimeDemoComponent } from './datetime/datetime.component';
import { DetailDemoComponent } from './detail/detail.component';
import { AlignDemoComponent } from './directives/componentes/align/align.component';
import { CaseDemoComponent } from './directives/componentes/case/case.component';
import { HintDemoComponent } from './directives/componentes/hint/hint.component';
import { TooltipDemoComponent } from './directives/componentes/tooltip/tooltip.component';
import { DemoDirectivesSidebarComponent } from './directives/listado-sidebar/directives-sidebar.component';
import { DropdownDemoComponent } from './dropdown/dropdown.component';
import { FloatDemoComponent } from './float/float.component';
import { FontsDemoComponent } from './fonts/fonts.component';
import { GridDemoComponent } from './grid/grid.component';
import { DemoGroupComponent } from './group/group.component';
import { HelpDemoComponent } from './help/help.component';
import { HomeDemoComponent } from './home/home.component';
import { DemoIconComponent } from './icon/icon';
import { IntDemoComponent } from './int/int.component';
import { ItemDemoComponent } from './item-list/item-list.component';
import { LabelDemoComponent } from './label/label.component';
import { LoaderDemoComponent } from './loader/loader.component';
import { MenuDemoComponent } from './menu/menu.component';
import { NavbarDemoComponent } from './navbar/navbar';
import { PhoneDemoComponent } from './phone/phone.component';
import { RadioDemoComponent } from './radio/radio.component';
import { RibbonDemoComponent } from './ribbon/ribbon.component';
import { SelectDemoComponent } from './select/select.component';
import { SliderDemoComponent } from './slider/slider.component';
import { SwalModalDemoComponent } from './swal-modal/swal-modal.component';
import { TableDemoComponent } from './table/table';
import { TabsDemoComponent } from './tabs/tabs.component';
import { ModalTemplateComponent } from './templates/componentes/plex-modal-template/plex-modal-template';
import { ListadoSidebarComponent } from './templates/listado-sidebar/listado-sidebar';
import { SidebarDetalleComponent } from './templates/listado-sidebar/sidebar/detalle/sidebar-detalle.component';
import { InternacionComponent } from './templates/modulos/internacion/internacion';
import { RecursoDetalleComponent } from './templates/modulos/internacion/sidebar/detalle/recurso-detalle.component';
import { MpiAltaComponent } from './templates/modulos/mpi/main/alta/mpi-alta.component';
import { MpiDetalleComponent } from './templates/modulos/mpi/sidebar/detalle/mpi-detalle.component';
import { TemplateBusquedaComponent } from './templates/template-busqueda';
import { TemplateFormComponent } from './templates/template-form';
import { TemplateBotoneraSidebarComponent } from './templates/template-form-sidebar';
import { TemplateInicioComponent } from './templates/template-inicio';
import { TemplateVisualizacionComponent } from './templates/template-visualizacion';
import { TextDemoComponent } from './text/text.component';
import { DemoTitleComponent } from './title/title.component';
import { WizardDemoComponent } from './wizard/wizard.component';
import { WrapperDemoComponent } from './wrapper/wrapper.component';

const appRoutes: Routes = [
    { path: 'inicio', component: HomeDemoComponent },
    { path: 'navbar', component: NavbarDemoComponent },
    { path: 'box', component: BoxDemoComponent },
    { path: 'text', component: TextDemoComponent },
    { path: 'datetime', component: DateTimeDemoComponent },
    {
        path: 'help', component: HelpDemoComponent,
        children: [
            { path: ':id', component: SidebarDetalleComponent }
        ]
    },
    { path: 'fonts', component: FontsDemoComponent },
    { path: 'bool', component: BoolDemoComponent },
    { path: 'radio', component: RadioDemoComponent },
    { path: 'int', component: IntDemoComponent },
    { path: 'float', component: FloatDemoComponent },
    { path: 'button-badge', component: ButtonDemoComponent },
    { path: 'tabs', component: TabsDemoComponent },
    { path: 'accordion', component: AccordionDemoComponent },
    { path: 'swal-modal', component: SwalModalDemoComponent },
    { path: 'modal', component: ModalTemplateComponent },
    { path: 'menu', component: MenuDemoComponent },
    { path: 'select', component: SelectDemoComponent },
    { path: 'label', component: LabelDemoComponent },
    { path: 'loader', component: LoaderDemoComponent },
    { path: 'table', component: TableDemoComponent },
    { path: 'ribbon', component: RibbonDemoComponent },
    { path: 'phone', component: PhoneDemoComponent },
    { path: 'dropdown', component: DropdownDemoComponent },
    { path: 'wizard', component: WizardDemoComponent },
    { path: 'wrapper', component: WrapperDemoComponent },
    { path: 'grid', component: GridDemoComponent },
    { path: 'card', component: CardDemoComponent },
    { path: 'slider', component: SliderDemoComponent },
    { path: 'templates', component: TemplateInicioComponent },
    { path: 'templates/form', component: TemplateFormComponent },
    { path: 'templates/form-sidebar', component: TemplateBotoneraSidebarComponent },
    { path: 'templates/visualizacion', component: TemplateVisualizacionComponent },
    { path: 'templates/busqueda', component: TemplateBusquedaComponent },
    { path: 'templates/mpi-maquetado/mpi-alta', component: MpiAltaComponent },
    {
        path: 'templates/listado-sidebar', component: ListadoSidebarComponent,
        children: [
            { path: ':id', component: SidebarDetalleComponent }
        ]
    },
    {
        path: 'templates/mpi-alta', component: MpiAltaComponent,
        children: [
            { path: ':id', component: MpiDetalleComponent },
        ]
    },
    {
        path: 'templates/internacion', component: InternacionComponent,
        children: [
            { path: ':id', component: RecursoDetalleComponent },
        ]
    },
    { path: 'title', component: DemoTitleComponent },
    { path: 'group', component: DemoGroupComponent },
    { path: 'item', component: ItemDemoComponent },
    { path: 'detail', component: DetailDemoComponent },
    { path: 'icon', component: DemoIconComponent },
    { path: 'directives', redirectTo: 'directives/listado-sidebar/tooltip' },
    {
        path: 'directives/listado-sidebar', component: DemoDirectivesSidebarComponent,
        children: [
            { path: 'align', component: AlignDemoComponent },
            { path: 'tooltip', component: TooltipDemoComponent },
            { path: 'hint', component: HintDemoComponent },
            { path: 'case', component: CaseDemoComponent },
        ]
    },
    { path: '**', redirectTo: 'inicio' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, {});
