import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxDemoComponent } from './box/box.component';
import { TextDemoComponent } from './text/text.component';

const appRoutes: Routes = [
    { path: 'box', component: BoxDemoComponent },
    { path: 'text', component: TextDemoComponent },
    { path: '', component: BoxDemoComponent },
    //   { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);