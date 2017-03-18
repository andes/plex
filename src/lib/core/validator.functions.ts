import { FormControl } from '@angular/forms';

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
