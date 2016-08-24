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
// propios
var sidebar_component_1 = require('./template/sidebar.component');
var plex_box_component_1 = require('./box/plex-box.component');
// import { PlexInputComponent }     from './box/plex-input.component';
var plex_number_component_1 = require('./form/plex-number.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Dashboard";
        this.subTitle = "Hola";
        this.appName = "A.N.D.E.S";
        this.user = {
            edad: "",
            firstName: "",
            password: ""
        };
    }
    Object.defineProperty(AppComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.user); },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onSubmit = function () {
        alert("Enviado");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/template/app.html',
            directives: [
                plex_box_component_1.PlexBoxComponent,
                plex_number_component_1.PlexNumberComponent,
                sidebar_component_1.SidebarComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map