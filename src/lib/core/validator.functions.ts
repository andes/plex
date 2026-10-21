import { UntypedFormControl, AbstractControl } from '@angular/forms';
import * as _moment from 'moment';
const moment = (_moment as any).default || _moment;
import 'moment/locale/es';
(window as any).moment = moment;

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
    return (c: UntypedFormControl): any => {
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
        const value = parseInt(c.value.toString().replace(',', '.'), 10);

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
    return (c: UntypedFormControl): any => {
        if (c.value === null || c.value === undefined || c.value === '') {
            return null;
        }

        const format = type === 'date'
            ? 'DD/MM/YYYY'
            : type === 'time'
                ? 'HH:mm'
                : 'DD/MM/YYYY HH:mm';

        const value = typeof c.value === 'string'
            ? moment(c.value, format, true)
            : moment(c.value);

        if (!value.isValid()) {
            return { format: { given: c.value } };
        }

        const ajustarLimite = (limite: any) => {
            const fecha = moment(limite);

            if (type === 'time') {
                fecha.year(value.year())
                    .month(value.month())
                    .date(value.date());
            }

            return fecha;
        };

        const minimo = min != null ? ajustarLimite(min) : null;
        const maximo = max != null ? ajustarLimite(max) : null;

        if (minimo?.isValid() && (
            type === 'date'
                ? value.isBefore(minimo, 'day')
                : value.isBefore(minimo)
        )) {
            return {
                min: {
                    given: c.value,
                    limit: minimo.format(format)
                }
            };
        }

        if (maximo?.isValid() && (
            type === 'date'
                ? value.isAfter(maximo, 'day')
                : value.isAfter(maximo)
        )) {
            return {
                max: {
                    given: c.value,
                    limit: maximo.format(format)
                }
            };
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
    const validator: any = control.validator && control.validator({ value: null } as AbstractControl);
    return (validator && validator.required);
}
