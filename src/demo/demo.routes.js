"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var box_component_1 = require('./box/box.component');
var text_component_1 = require('./text/text.component');
var int_component_1 = require('./int/int.component');
var float_component_1 = require('./float/float.component');
var button_component_1 = require('./button/button.component');
var appRoutes = [
    { path: 'inicio', component: home_component_1.HomeDemoComponent },
    { path: 'box', component: box_component_1.BoxDemoComponent },
    { path: 'text', component: text_component_1.TextDemoComponent },
    { path: 'int', component: int_component_1.IntDemoComponent },
    { path: 'float', component: float_component_1.FloatDemoComponent },
    { path: 'button', component: button_component_1.ButtonDemoComponent },
    { path: '**', redirectTo: 'inicio' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=demo.routes.js.map