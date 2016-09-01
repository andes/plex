// http://plnkr.co/edit/WTu5G9db3p4pKzs0WvW6?p=preview
export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Requerido',

            'onlyNumber': 'Unicamente números',
            'onlyString': 'Unicamente letras',

            'invalidEmailAddress': 'Dirección de email inválida',
            // 'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Debe ingresar al menos ${validatorValue.requiredLength} caracteres`,
            'maxlength': `Debe tener como máximo ${validatorValue.requiredLength} caracteres`

            // TODO:
            // url
            // valorMinimo
            // valorMaximo
        };

        return config[validatorName];
    }

    static numberValidator(control){
        if (control.value.match(/[0-9]/)) {
            return null;
        } else {
            return { 'onlyNumber': true };
        }
    }

    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
}
