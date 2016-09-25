"use strict";
var router_1 = require('@angular/router');
var box_component_1 = require('./box/box.component');
var text_component_1 = require('./text/text.component');
var appRoutes = [
    { path: 'box', component: box_component_1.BoxDemoComponent },
    { path: 'text', component: text_component_1.TextDemoComponent },
    { path: '', component: box_component_1.BoxDemoComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=demo.routes.js.map