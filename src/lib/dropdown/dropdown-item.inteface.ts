// export class MenuItem {
//     private options: any;
//     public label: string;
//     public icon: string;
//     public route: string;
//     public handler: Function;
//     public divider = false;

//     constructor(options) {
//         this.options = options || {};
//         this.options.icon = options.icon && (options.icon.toLowerCase().startsWith('mdi') ? options.icon : ('mdi mdi-' + options.icon));

//         if (typeof options.handler === 'function') {
//             this.options.handler = options.handler;
//         } else if (options.route !== '') {
//             this.options.route = options.route;
//         } else {
//             throw new Error('El parámetro debe ser una string o una función');
//         }
//     }
// }

export interface DropdownItem {
    label?: string;
    icon?: string;
    route?: string;
    handler?: Function;
    divider?: boolean;
}
