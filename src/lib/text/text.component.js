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
var PlexTextComponent = (function () {
    function PlexTextComponent(renderer) {
        this.onChange = function (_) { };
        this.renderer = renderer;
    }
    // Inicialización
    PlexTextComponent.prototype.ngOnInit = function () { };
    PlexTextComponent.prototype.ngAfterViewInit = function () {
        if (this.autofocus)
            this.renderer.invokeElementMethod(this.ref.nativeElement, 'focus');
    };
    // Actualización Modelo -> Vista
    PlexTextComponent.prototype.writeValue = function (value) {
        this.renderer.setElementProperty(this.ref.nativeElement, 'value', value);
    };
    // Actualización Vista -> Modelo
    PlexTextComponent.prototype.registerOnTouched = function () {
    };
    PlexTextComponent.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) {
            fn(value == '' ? null : value);
        };
    };
    __decorate([
        core_1.ViewChild('ref'), 
        __metadata('design:type', core_1.ElementRef)
    ], PlexTextComponent.prototype, "ref", void 0);
    __decorate([
        core_1.Input('auto-focus'), 
        __metadata('design:type', Boolean)
    ], PlexTextComponent.prototype, "autofocus", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexTextComponent.prototype, "label", void 0);
    __decorate([
        core_1.ContentChild(forms_1.NgControl), 
        __metadata('design:type', Object)
    ], PlexTextComponent.prototype, "control", void 0);
    PlexTextComponent = __decorate([
        core_1.Component({
            selector: 'plex-text',
            templateUrl: 'lib/text/text.html',
            providers: [
                // Permite acceder al atributo formControlName/ngModel
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return PlexTextComponent; }),
                    multi: true,
                }
            ]
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], PlexTextComponent);
    return PlexTextComponent;
}());
exports.PlexTextComponent = PlexTextComponent;
//# sourceMappingURL=text.component.js.map