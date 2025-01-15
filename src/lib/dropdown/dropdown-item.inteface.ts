export interface DropdownItem {
    id?: string;

    /**
     * Label del item
     *
     * @type {string}
     * @memberOf DropdownItem
     */
    label?: string;
    /**
     * Clase css del ícono
     *
     * @type {string}
     * @memberOf DropdownItem
     */
    icon?: string;
    /**
     * Clase prefix del ícono
     *
     * @type {string}
     * @memberOf DropdownItem
     */
    prefix?: string;
    /**
     * Ruta opción para Angular Router
     *
     * @type {string}
     * @memberOf DropdownItem
     */
    route?: string;
    /**
     * Callback a ejecutar cuando se selecciona el item
     *
     * @type {Function}
     * @memberOf DropdownItem
     */
    handler?: Function;
    /**
     * Indica si el item es un divisor
     *
     * @type {boolean}
     * @memberOf DropdownItem
     */
    divider?: boolean;

    submodulos?: any[];

    collapsed?: boolean;

    color?: string;
}
