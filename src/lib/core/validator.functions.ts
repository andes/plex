import { FormControl, AbstractControl } from '@angular/forms';
// ESTO ES UN HORRIBLE!
let moment = window['moment'] = require('moment/moment.js');
require('moment/locale/es.js');

/**
 * Devuelve un validator de números
 *
 * @export
 * @param {RegExp} regEx Expresión regular a chequear (int, float, etc.)
 * @param {*} min Cota mínima
 * @param {*} max Cota máxima
 * @returns Objeto de validación
 */
export function numberValidator(regEx: RegExp, min: any, max: any) {
    return function (c: FormControl): any {
        if ((c.value === null) || (('' + c.value).trim() === '')) {
            return null;
        }

        // Controla formato
        if (!regEx.test(c.value)) {
            return {
                format: {
                    given: c.value,
                }
            };
        }

        // Convierte a número
        let value = parseInt(c.value.toString().replace(',', '.'), 10);

        // Controla min
        if (min !== undefined && min !== null && min !== '') {
            min = parseInt(min, 10);
            if (value < min) {
                return {
                    min: {
                        given: c.value,
                        limit: min
                    }
                };
            }
        }

        // Controla max
        if (max !== undefined && max !== null && max !== '') {
            max = parseInt(max, 10);
            if (value > max) {
                return {
                    max: {
                        given: c.value,
                        limit: max
                    }
                };
            }
        }

        return null;
    };
}

/**
 * Devuelve un validator de fechas
 *
 * @export
 * @param {string} type 'date', 'time' o 'datetime'
 * @param {*} min Cota mínima
 * @param {*} max ota máxima
 * @returns Objeto de validación
 */
export function dateValidator(type: string, min: any, max: any) {
    return function (c: FormControl): any {
        if (c.value && moment(c.value).isValid) {
            // Controla rango
            let value = moment(c.value).toDate();
            this.format = this.type === 'date' ? 'DD/MM/YYYY' : (this.type === 'datetime' ? 'DD/MM/YYYY HH:mm' : 'HH:mm');
            // Controla min
            if (min !== undefined && min !== null && min !== '') {
                min = moment(min).toDate();
                // Igualamos las fechas para solor comparar hora y minutos
                if (this.type === 'time') {
                    min.setFullYear(value.getFullYear());
                    min.setMonth(value.getMonth());
                    min.setDate(value.getDate());
                }
                if (value < min) {
                    return {
                        min: {
                            given: c.value,
                            limit: moment(min).format(type === 'date' ? 'DD/MM/YYYY' : (type === 'datetime' ? 'DD/MM/YYYY HH:mm' : 'HH:mm'))
                        }
                    };
                }
            }
            // Controla max
            if (max !== undefined && max !== null && max !== '') {
                max = moment(max).toDate();
                // Igualamos las fechas para solor comparar hora y minutos
                if (this.type === 'time') {
                    max.setFullYear(value.getFullYear());
                    max.setMonth(value.getMonth());
                    max.setDate(value.getDate());
                }
                if (value > max) {
                    return {
                        max: {
                            given: c.value,
                            limit: moment(max).format(type === 'date' ? 'DD/MM/YYYY' : (type === 'datetime' ? 'DD/MM/YYYY HH:mm' : 'HH:mm'))
                        }
                    };
                }
            }
        }
        return null;
    };
}

/**
 * Devuelve si el control tiene un validador de valor requerido
 *
 * @export
 * @param {AbstractControl} control Control
 */
export function hasRequiredValidator(control: AbstractControl) {
    let validator: any = control.validator && control.validator({ value: null } as AbstractControl);
    return !(validator && validator.required);
}
