import { WizardConfig } from './wizard-config.interface';
export interface WizardConfig {
    /**
     * ID del wizard. Suele corresponder al nombre de un módulo.
     * Por ejemplo: citas-darTurnos
     * @type {string}
     * @memberof WizardConfig
     */
    id: string;

    /**
     * Indica la última de actualización del wizard. Si cambia la fecha, el wizard se mostrará con el nuevo contenido
     *
     * @type {Date}
     * @memberof WizardConfig
     */
    updatedOn: Date;

    /**
     * Imágenes y textos a mostrar en el wizard
     *
     * @memberof WizardConfig
     */
    steps: {
        title: string,
        content: string,
        imageClass?: string,
        position?: 'left' | 'top' | 'bottom' | 'right'
    }[];

    /**
     * Si es true, fuerza la visualización del wizard independiente que el usuario haya optado por no volver a mostrarlo
     *
     * @type {boolean}
     * @memberof WizardConfig
     */
    forceShow?: boolean;

    /**
     * Si es true, muestra el wizard en pantalla completa
     *
     * @type {boolean}
     * @memberof WizardConfig
     */
    fullScreen: boolean;

    /**
     * Si es true, muestra el número de paso
     *
     * @type {boolean}
     * @memberof WizardConfig
     */
    showNumbers: boolean;
}
