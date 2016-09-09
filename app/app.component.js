"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// AngularJS
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
// propios
var sidebar_component_1 = require('./template/sidebar.component');
var plex_box_component_1 = require('./box/plex-box.component');
var validation_service_1 = require('./services/validation.service');
var plex_number_component_1 = require('./form/plex-number.component');
var plex_text_component_1 = require('./form/plex-text.component');
// import { PlexInputComponent }     from './box/plex-input.component';
var AppComponent = (function () {
    function AppComponent(fb) {
        this.title = "Dashboard";
        this.subTitle = "Hola";
        this.appName = "A.N.D.E.S";
        this.user = {
            nombre: "",
            edad: "",
            password: ""
        };
        // // form
        // this.myForm = fb.group({
        //     "firstName": this.firstName,
        //     "password":["", Validators.required]
        // });
        this.myForm = fb.group({
            "name": ["", [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(8), validation_service_1.ValidationService.number]],
            'edad': ['', [validation_service_1.ValidationService.minValue(), validation_service_1.ValidationService.maxValue(110)]],
            'email': ['', [forms_1.Validators.required, validation_service_1.ValidationService.email]],
            "password": ["", forms_1.Validators.required]
        });
    }
    AppComponent.prototype.onSubmit = function () {
        console.log("model-based form submitted");
        console.log(this.myForm);
    };
    Object.defineProperty(AppComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.user); },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/template/app.html',
            directives: [
                plex_number_component_1.PlexNumberComponent,
                plex_text_component_1.PlexTextComponent,
                plex_box_component_1.PlexBoxComponent,
                // PlexNumberComponent,
                sidebar_component_1.SidebarComponent
            ]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map