"use strict";
var SidebarItem = (function () {
    function SidebarItem(title, icon, handlerOrRoute) {
        this.handlerOrRoute = handlerOrRoute;
        this.title = title;
        this.icon = icon;
        if (typeof handlerOrRoute === 'function')
            this.handler = handlerOrRoute;
        else if ((typeof handlerOrRoute === 'string') && handlerOrRoute != "")
            this.route = handlerOrRoute;
        else
            throw "El parámetro 'handlerOrRoute' debe ser un string o función";
    }
    return SidebarItem;
}());
exports.SidebarItem = SidebarItem;
//# sourceMappingURL=sidebar-item.class.js.map