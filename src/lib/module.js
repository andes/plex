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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var app_component_1 = require('./app/app.component');
var sidebar_component_1 = require('./app/sidebar.component');
var box_component_1 = require('./box/box.component');
var text_component_1 = require('./text/text.component');
var int_component_1 = require('./int/int.component');
var float_component_1 = require('./float/float.component');
var button_component_1 = require('./button/button.component');
var tabs_component_1 = require('./tabs/tabs.component');
var tab_component_1 = require('./tabs/tab.component');
var validation_messages_component_1 = require('./validation-messages/validation-messages.component');
var MODULES = [
    app_component_1.PlexAppComponent,
    box_component_1.PlexBoxComponent,
    text_component_1.PlexTextComponent,
    int_component_1.PlexIntComponent,
    float_component_1.PlexFloatComponent,
    button_component_1.PlexButtonComponent,
    tabs_component_1.PlexTabsComponent,
    tab_component_1.PlexTabComponent
];
var PlexModule = (function () {
    function PlexModule() {
    }
    PlexModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule],
            declarations: MODULES.concat([
                sidebar_component_1.SidebarComponent,
                validation_messages_component_1.ValidationMessagesComponent
            ]),
            exports: MODULES
        }), 
        __metadata('design:paramtypes', [])
    ], PlexModule);
    return PlexModule;
}());
exports.PlexModule = PlexModule;
//# sourceMappingURL=module.js.map