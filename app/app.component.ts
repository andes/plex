import { Component } from '@angular/core';
import { SidebarComponent } from './template/sidebar.component';
import { BoxComponent } from './box/box.component';

@Component({
    selector: 'app',
    templateUrl: 'app/template/app.html',
    directives: [
      BoxComponent,
      SidebarComponent
    ]
})

export class AppComponent {
  public title: string;
  public subTitle: string;

  public appName: string;

  constructor(){
    this.title = "Dashboard";
    this.subTitle = "Hola";

    this.appName = "A.N.D.E.S";
  }
}
