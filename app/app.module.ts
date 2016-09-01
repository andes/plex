import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
// import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }          from '@angular/forms';

// services
import { ValidationService }            from './services/validation.service';

// componentes
import { ValidationMessagesComponent }  from './form/validation-messages.component';

import { AppComponent }                 from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        ValidationMessagesComponent,
        AppComponent
    ],
    providers: [ ValidationService ],
    bootstrap: [AppComponent]
})
export class AppModule { }
