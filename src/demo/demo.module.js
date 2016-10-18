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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var module_1 = require('../lib/module');
var demo_routes_1 = require('./demo.routes');
var forms_1 = require("@angular/forms");
var service_1 = require('../lib/core/service');
//import { MaterialModule } from '@angular/material';
// Routes
var demo_component_1 = require('./demo.component');
var home_component_1 = require('./home/home.component');
var box_component_1 = require('./box/box.component');
var text_component_1 = require('./text/text.component');
var int_component_1 = require('./int/int.component');
var float_component_1 = require('./float/float.component');
var button_component_1 = require('./button/button.component');
var tabs_component_1 = require('./tabs/tabs.component');
var DemoModule = (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                module_1.PlexModule,
                demo_routes_1.routing,
            ],
            providers: [
                service_1.PlexService,
                demo_routes_1.appRoutingProviders,
            ],
            declarations: [
                demo_component_1.DemoComponent,
                box_component_1.BoxDemoComponent,
                text_component_1.TextDemoComponent,
                home_component_1.HomeDemoComponent,
                int_component_1.IntDemoComponent,
                float_component_1.FloatDemoComponent,
                button_component_1.ButtonDemoComponent,
                tabs_component_1.TabsDemoComponent
            ],
            bootstrap: [demo_component_1.DemoComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DemoModule);
    return DemoModule;
}());
exports.DemoModule = DemoModule;
//# sourceMappingURL=demo.module.js.map