"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ESTO ES UN HORRIBLE!
var moment = window['moment'] = require('moment/moment.js');
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
function numberValidator(regEx, min, max) {
    return function (c) {
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
        var value = parseInt(c.value.toString().replace(',', '.'), 10);
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
exports.numberValidator = numberValidator;
/**
 * Devuelve un validator de fechas
 *
 * @export
 * @param {string} type 'date', 'time' o 'datetime'
 * @param {*} min Cota mínima
 * @param {*} max ota máxima
 * @returns Objeto de validación
 */
function dateValidator(type, min, max) {
    return function (c) {
        if (c.value && moment(c.value).isValid) {
            // Controla rango
            this.format = this.type === 'date' ? 'DD/MM/YYYY' : (this.type === 'datetime' ? 'DD/MM/YYYY HH:mm' : 'HH:mm');
            var value = moment(c.value, this.format).toDate();
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
exports.dateValidator = dateValidator;
/**
 * Devuelve si el control tiene un validador de valor requerido
 *
 * @export
 * @param {AbstractControl} control Control
 */
function hasRequiredValidator(control) {
    var validator = control.validator && control.validator({ value: null });
    return (validator && validator.required);
}
exports.hasRequiredValidator = hasRequiredValidator;
//# sourceMappingURL=../../../src/lib/core/validator.functions.js.map