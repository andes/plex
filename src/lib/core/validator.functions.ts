import { FormControl } from '@angular/forms';
// ESTO ES UN HORRIBLE!
let moment = window['moment'] = require('moment/moment.js');
require('moment/locale/es.js');

export function numberValidator(regEx: RegExp, min: number, max: number) {
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

        // Controla rango
        let value = +c.value; // Convierte a número
        min = +min; // Fuerza a que convierta el parámetro a un número
        max = +max; // Fuerza a que convierta el parámetro a un número
        if (value > max || value < min) {
            return {
                minMax: {
                    given: c.value,
                    max: max,
                    min: min
                }
            };
        }
        return null;
    };
}

export function dateValidator(min: Date, max: Date) {
    return function (c: FormControl): any {
        if (c.value && moment(c.value).isValid) {
            // Controla rango
            debugger;
            let value = moment(c.value).toDate();
            if (!max){
                max = new Date(8640000000000000);
            }
            if (!min){
                min = new Date(-8640000000000000);
            }
            if (value > max || value < min) {
                return {
                    minMaxDate: {
                        given: c.value,
                        max: max,
                        min: min
                    }
                };
            }
        }
        return null;
    };
}
