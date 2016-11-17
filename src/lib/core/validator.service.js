"use strict";
var PlexValidator = (function () {
    function PlexValidator() {
    }
    PlexValidator.min = function (min) {
        return function (control) {
            var v = control.value;
            return v < min ? { 'min': { 'limit': min, 'actual': v } } : null;
        };
    };
    PlexValidator.max = function (max) {
        return function (control) {
            var v = control.value;
            return v > max ? { 'max': { 'limit': max, 'actual': v } } : null;
        };
    };
    return PlexValidator;
}());
exports.PlexValidator = PlexValidator;
//# sourceMappingURL=validator.service.js.map