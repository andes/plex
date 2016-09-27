import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDemoComponent } from './home/home.component';
import { BoxDemoComponent } from './box/box.component';
import { TextDemoComponent } from './text/text.component';

const appRoutes: Routes = [
    { path: 'inicio', component: HomeDemoComponent },
    { path: 'box', component: BoxDemoComponent },
    { path: 'text', component: TextDemoComponent },
    { path: '**', redirectTo: 'inicio' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);