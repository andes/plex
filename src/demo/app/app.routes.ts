import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDemoComponent } from './home/home.component';
import { BoxDemoComponent } from './box/box.component';
import { TextDemoComponent } from './text/text.component';
import { DateTimeDemoComponent } from './datetime/datetime.component';
import { BoolDemoComponent } from './bool/bool.component';
import { IntDemoComponent } from './int/int.component';
import { FloatDemoComponent } from './float/float.component';
import { ButtonDemoComponent } from './button/button.component';
import { TabsDemoComponent } from './tabs/tabs.component';
import { AccordionDemoComponent } from './accordion/accordion.component';
import { SelectDemoComponent } from './select/select.component';
import { ModalDemoComponent } from './modal/modal.component';
import { LoaderDemoComponent } from './loader/loader.component';
import { PhoneDemoComponent } from './phone/phone.component';
import { FontsDemoComponent } from './fonts/fonts.component';
import { DropdownDemoComponent } from './dropdown/dropdown.component';

const appRoutes: Routes = [
    { path: 'inicio', component: HomeDemoComponent },
    { path: 'box', component: BoxDemoComponent },
    { path: 'text', component: TextDemoComponent },
    { path: 'datetime', component: DateTimeDemoComponent },
    { path: 'fonts', component: FontsDemoComponent },
    { path: 'bool', component: BoolDemoComponent },
    { path: 'int', component: IntDemoComponent },
    { path: 'float', component: FloatDemoComponent },
    { path: 'button', component: ButtonDemoComponent },
    { path: 'tabs', component: TabsDemoComponent },
    { path: 'accordion', component: AccordionDemoComponent },
    { path: 'modal', component: ModalDemoComponent },
    { path: 'select', component: SelectDemoComponent },
    { path: 'loader', component: LoaderDemoComponent },
    { path: 'phone', component: PhoneDemoComponent },
    { path: 'dropdown', component: DropdownDemoComponent },
    { path: '**', redirectTo: 'inicio' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
