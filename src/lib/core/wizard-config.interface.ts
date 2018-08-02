import { WizardConfig } from './wizard-config.interface';
export interface WizardConfig {
    /**
     * ID del wizard. Suele corresponder al nombre de un módulo.
     * Por ejemplo: citas-darTurnos
     * @type {string}
     * @memberof WizardConfig
     */
    id: string,

    /**
     * Indica la última de actualización del wizard. Si cambia la fecha, el wizard se mostrará con el nuevo contenido
     *
     * @type {Date}
     * @memberof WizardConfig
     */
    updatedOn: Date,

    /**
     * Imágenes y textos a mostrar en el wizard
     *
     * @type {{
     *         title: string,
     *         content: string,
     *         imageClass?: string,
     *     }[]}
     * @memberof WizardConfig
     */
    steps: {
        title: string,
        content: string,
        imageClass?: string,
    }[],

    /**
     * Si es true, fuerza la visualización del wizard independiente que el usuario haya optado por no volver a mostrarlo
     *
     * @type {boolean}
     * @memberof WizardConfig
     */
    forceShow?: boolean,
}
