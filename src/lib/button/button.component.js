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
var PlexButtonComponent = (function () {
    function PlexButtonComponent(renderer) {
        this.onChange = function (_) { };
        this.renderer = renderer;
        this.type = "default";
        this.disabled = false;
    }
    // Inicialización
    PlexButtonComponent.prototype.ngOnInit = function () { };
    PlexButtonComponent.prototype.ngAfterViewInit = function () {
    };
    // Actualización Modelo -> Vista
    PlexButtonComponent.prototype.writeValue = function (value) {
        this.renderer.setElementProperty(this.ref.nativeElement, 'value', value);
    };
    // Actualización Vista -> Modelo
    PlexButtonComponent.prototype.registerOnTouched = function (fn) {
    };
    PlexButtonComponent.prototype.registerOnChange = function (fn) {
    };
    __decorate([
        core_1.ViewChild('ref'), 
        __metadata('design:type', core_1.ElementRef)
    ], PlexButtonComponent.prototype, "ref", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexButtonComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexButtonComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexButtonComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PlexButtonComponent.prototype, "disabled", void 0);
    PlexButtonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'plex-button',
            templateUrl: 'button.html',
            //   host: {
            //     '(click)': 'events($event)',
            //   },
            providers: [
                // Permite acceder al atributo formControlName/ngModel
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return PlexButtonComponent; }),
                    multi: true,
                }
            ]
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], PlexButtonComponent);
    return PlexButtonComponent;
}());
exports.PlexButtonComponent = PlexButtonComponent;
//# sourceMappingURL=button.component.js.map