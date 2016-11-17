"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var validator_service_1 = require('../../lib/core/validator.service');
var FloatDemoComponent = (function () {
    function FloatDemoComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    FloatDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Tepmlate-Form1 model
        this.tModel = { valor: null };
        // Form1: Sin validador
        this.model1 = { valor: null };
        this.form1 = this.formBuilder.group({
            valor: [''],
        });
        this.form1.valueChanges.subscribe(function (value) {
            _this.model1 = value;
        });
        // Form2: Validación múltiple
        this.model2 = { valor: null };
        this.form2 = this.formBuilder.group({
            valor: ['', [forms_1.Validators.required, validator_service_1.PlexValidator.min(2.5), validator_service_1.PlexValidator.max(9.5)]],
        });
        this.form2.valueChanges.subscribe(function (value) {
            _this.model2 = value;
        });
    };
    FloatDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'float.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], FloatDemoComponent);
    return FloatDemoComponent;
}());
exports.FloatDemoComponent = FloatDemoComponent;
//# sourceMappingURL=float.component.js.map