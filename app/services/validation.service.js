"use strict";
// http://plnkr.co/edit/WTu5G9db3p4pKzs0WvW6?p=preview
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Requerido',
            'onlyNumber': 'Unicamente números',
            'onlyString': 'Unicamente letras',
            'invalidEmailAddress': 'Dirección de email inválida',
            // 'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': "Debe ingresar al menos " + validatorValue.requiredLength + " caracteres",
            'maxlength': "Debe tener como m\u00E1ximo " + validatorValue.requiredLength + " caracteres"
        };
        return config[validatorName];
    };
    ValidationService.numberValidator = function (control) {
        if (control.value.match(/[0-9]/)) {
            return null;
        }
        else {
            return { 'onlyNumber': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.service.js.map