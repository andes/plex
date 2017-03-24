import { FormControl } from '@angular/forms';
// ESTO ES UN HORRIBLE!
let moment = window['moment'] = require('moment/moment.js');
require('moment/locale/es.js');

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
        let value = parseInt(c.value, 10);

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

export function dateValidator(type: string, min: any, max: any) {
    return function (c: FormControl): any {
        if (c.value && moment(c.value).isValid) {
            // Controla rango
            debugger;
            let value = moment(c.value).toDate();
this.format = this.type === 'date' ? 'DD/MM/YYYY' : (this.type === 'datetime' ? 'DD/MM/YYYY HH:mm' : 'HH:mm');
            // Controla min
            if (min !== undefined && min !== null && min !== '') {
                min = moment(min).toDate();
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
