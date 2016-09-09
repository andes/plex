// import { Input }        from '@angular/core';
// import { FormGroup, FormControl, Validators, FormBuilder }    from '@angular/forms';

// http://plnkr.co/edit/WTu5G9db3p4pKzs0WvW6?p=preview
export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {

        let config = {
            'required': 'Requerido',

            'onlyNumber': 'Unicamente números',
            'onlyString': 'Unicamente letras',

            'invalidEmail': 'Dirección de email inválida',
            // 'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Debe ingresar al menos ${validatorValue.requiredLength} caracteres`,
            'maxlength': `Debe tener como máximo ${validatorValue.requiredLength} caracteres`,

            // TODO:
            // url
            'invalidMaxValue': `El valor máximo admitido es ${validatorValue.maxValue}`,
            'invalidMinValue': `El valor mínimo admitido es ${validatorValue.minValue}`,
        };

        return config[validatorName];
    }

    static number(control: any) {
        // if (control.value){
        //     if (control.value.match(/[0-9]/)) {
        //         return null;
        //     } else {
        //         return { 'onlyNumber': true };
        //     }
        // }
        // console.log(control);
        if (control.value) {
            // parseamos a string para poder aplicar match()
            if (!String(control.value).match(/[0-9]/)) {
                return { 'onlyNumber': true };
            }
        }

        return null;
    }

    static maxValue = (max: number) => {
        return (control: any) => {
            if (control.value) {
                if (control.value > max) {
                    return { 'invalidMaxValue': { maxValue: max } };
                }

            }

            return null;
        }
    }

    static minValue = (min?: number) => {
        return (control: any) => {
            if (control.value) {
                if (control.value < min) {
                    return { 'invalidMinValue': { minValue: min } };
                }

            }

            return null;
        }
    }

    static email(control: any) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmail': true };
        }
    }

    static password(control: any) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
}
