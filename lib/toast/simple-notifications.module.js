"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var simple_notifications_component_1 = require("./simple-notifications/components/simple-notifications.component");
var notification_component_1 = require("./simple-notifications/components/notification.component");
var max_pipe_1 = require("./simple-notifications/pipes/max.pipe");
var notifications_service_1 = require("./simple-notifications/services/notifications.service");
__export(require("./simple-notifications/interfaces/icons"));
__export(require("./simple-notifications/components/simple-notifications.component"));
__export(require("./simple-notifications/components/notification.component"));
__export(require("./simple-notifications/pipes/max.pipe"));
__export(require("./simple-notifications/services/notifications.service"));
var SimpleNotificationsModule = /** @class */ (function () {
    function SimpleNotificationsModule() {
    }
    SimpleNotificationsModule_1 = SimpleNotificationsModule;
    SimpleNotificationsModule.forRoot = function () {
        return {
            ngModule: SimpleNotificationsModule_1,
            providers: [notifications_service_1.NotificationsService]
        };
    };
    var SimpleNotificationsModule_1;
    SimpleNotificationsModule = SimpleNotificationsModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                simple_notifications_component_1.SimpleNotificationsComponent,
                notification_component_1.NotificationComponent,
                max_pipe_1.MaxPipe
            ],
            providers: [],
            exports: [simple_notifications_component_1.SimpleNotificationsComponent]
        })
    ], SimpleNotificationsModule);
    return SimpleNotificationsModule;
}());
exports.SimpleNotificationsModule = SimpleNotificationsModule;
//# sourceMappingURL=../../../src/lib/toast/simple-notifications.module.js.map