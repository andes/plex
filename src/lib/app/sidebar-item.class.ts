export class SidebarItem {
    public title: string;
    public icon: string;
    public route: string;
    public handler: Function;
    constructor(title: string, icon: string, public handlerOrRoute: any) {
        this.title = title;
        this.icon = icon && (icon.toLowerCase().startsWith('mdi') ? icon : ("mdi mdi-" + icon));
        if (typeof handlerOrRoute === 'function')
            this.handler = handlerOrRoute;
        else
            if ((typeof handlerOrRoute === 'string') && handlerOrRoute != "")
                this.route = handlerOrRoute;
            else
                throw "El parámetro 'handlerOrRoute' debe ser un string o función";
    }
} 