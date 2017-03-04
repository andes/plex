export class SidebarItem {
    public options: any = {
        label: '',
        icon: '',
        route: '',
        handler: '',
        divider: false
    };
    constructor(options) {
        this.options = options;
        this.options.icon = options.icon && (options.icon.toLowerCase().startsWith('mdi') ? options.icon : ('mdi mdi-' + options.icon));

        if (typeof options.handler === 'function') {
            this.options.handler = options.handlerOrRoute;
        }
        if (typeof options.route === 'string' && options.route !== '') {
            this.options.route = options.handlerOrRoute;
        }
    }
}
