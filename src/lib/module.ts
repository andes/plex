import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlexAppComponent } from './app/app.component';
import { PlexBoxComponent } from './box/box.component';
import { PlexBoxFooterComponent } from './box/box-footer.component';

const MODULES = [
    PlexAppComponent,
    PlexBoxComponent,
    PlexBoxFooterComponent
];

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: MODULES,
    exports: MODULES
})
export class PlexModule { }
