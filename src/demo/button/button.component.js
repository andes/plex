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
var ButtonDemoComponent = (function () {
    function ButtonDemoComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ButtonDemoComponent.prototype.ngOnInit = function () {
        // Tepmlate-Form1 model
        //this.tModel = { valor: null };
        // Form1: Sin validador
        //this.model1 = { valor: null };
        this.form1 = this.formBuilder.group({});
        this.form1.valueChanges.subscribe(function (value) {
            // this.model1 = value;
        });
    };
    ButtonDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'button.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ButtonDemoComponent);
    return ButtonDemoComponent;
}());
exports.ButtonDemoComponent = ButtonDemoComponent;
//# sourceMappingURL=button.component.js.map