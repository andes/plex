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
var TextDemoComponent = (function () {
    function TextDemoComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    TextDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Tepmlate-Form1 model
        this.tModel = { nombre: null };
        // Form1: Sin validador
        this.model1 = { nombre: null };
        this.form1 = this.formBuilder.group({
            nombre: [''],
        });
        this.form1.valueChanges.subscribe(function (value) {
            _this.model1 = value;
        });
        // Form2: Doble validación
        this.model2 = { nombre: null };
        this.form2 = this.formBuilder.group({
            nombre: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
        });
        this.form2.valueChanges.subscribe(function (value) {
            _this.model2 = value;
        });
    };
    TextDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'text.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], TextDemoComponent);
    return TextDemoComponent;
}());
exports.TextDemoComponent = TextDemoComponent;
//# sourceMappingURL=text.component.js.map