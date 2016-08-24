// AngularJS
import { Component }        from '@angular/core';

// propios
import { SidebarComponent } from './template/sidebar.component';
import { PlexBoxComponent }     from './box/plex-box.component';
// import { PlexInputComponent }     from './box/plex-input.component';
import { PlexNumberComponent }     from './form/plex-number.component';

@Component({
    selector: 'app',
    templateUrl: 'app/template/app.html',
    directives: [

        PlexBoxComponent,
        PlexNumberComponent,
        SidebarComponent
    ]
})

export class AppComponent {
    public title: string;
    public subTitle: string;

    public appName: string;

    public email: string;
    public user: any;

    constructor() {
        this.title = "Dashboard";
        this.subTitle = "Hola";

        this.appName = "A.N.D.E.S";
        this.user = {
            edad: "",
            firstName: "",
            password: ""
        };
    }

    get diagnostic() { return JSON.stringify(this.user); }

    onSubmit() {
        alert("Enviado");
    }
}
