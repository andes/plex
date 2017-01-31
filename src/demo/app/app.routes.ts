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
import { SelectDemoComponent } from './select/select.component';
import { ModalDemoComponent } from './modal/modal.component';
import { LoaderDemoComponent } from './loader/loader.component';
const appRoutes: Routes = [
    { path: 'inicio', component: HomeDemoComponent },
    { path: 'box', component: BoxDemoComponent },
    { path: 'text', component: TextDemoComponent },
    { path: 'datetime', component: DateTimeDemoComponent },
    { path: 'bool', component: BoolDemoComponent },
    { path: 'int', component: IntDemoComponent },
    { path: 'float', component: FloatDemoComponent },
    { path: 'button', component: ButtonDemoComponent },
    { path: 'tabs', component: TabsDemoComponent },
    { path: 'modal', component: ModalDemoComponent },
    { path: 'select', component: SelectDemoComponent },
    { path: 'loader', component: LoaderDemoComponent },
    { path: '**', redirectTo: 'inicio' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);