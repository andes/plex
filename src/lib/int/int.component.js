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
var REGEX = /^\s*(\-|\+)?(\d+)\s*$/;
var PlexIntComponent = (function () {
    function PlexIntComponent(renderer) {
        this.lastValue = null;
        this.onChange = function (_) { };
        this.renderer = renderer;
    }
    // Inicialización
    PlexIntComponent.prototype.ngOnInit = function () { };
    PlexIntComponent.prototype.ngAfterViewInit = function () {
        if (this.autofocus)
            this.renderer.invokeElementMethod(this.ref.nativeElement, 'focus');
    };
    // Actualización Modelo -> Vista
    PlexIntComponent.prototype.writeValue = function (value) {
        this.renderer.setElementProperty(this.ref.nativeElement, 'value', value);
    };
    // Actualización Vista -> Modelo
    PlexIntComponent.prototype.registerOnTouched = function () {
    };
    PlexIntComponent.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) {
            if ((value == "") || REGEX.test(value)) {
                this.lastValue = value;
            }
            else {
                this.writeValue(this.lastValue);
                value = this.lastValue;
            }
            fn(((value == null) || (value == "")) ? null : Number.parseInt(value));
        };
    };
    __decorate([
        core_1.ViewChild('ref'), 
        __metadata('design:type', core_1.ElementRef)
    ], PlexIntComponent.prototype, "ref", void 0);
    __decorate([
        core_1.Input('auto-focus'), 
        __metadata('design:type', Boolean)
    ], PlexIntComponent.prototype, "autofocus", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PlexIntComponent.prototype, "label", void 0);
    __decorate([
        core_1.ContentChild(forms_1.NgControl), 
        __metadata('design:type', Object)
    ], PlexIntComponent.prototype, "control", void 0);
    PlexIntComponent = __decorate([
        core_1.Component({
            selector: 'plex-int',
            template: "<div class=\"form-group\" [ngClass]=\"{'has-error': (control.dirty || control.touched) && !control.valid }\">\n                    <label *ngIf=\"label\">{{label}}</label>\n                    <input #ref type=\"text\" class=\"form-control\" (change)=\"onChange($event.target.value)\" (input)=\"onChange($event.target.value)\" >\n                    <plex-validation-messages *ngIf=\"(control.dirty || control.touched) && !control.valid\" [control]=\"control\"></plex-validation-messages>\n               </div>",
            // Las siguientes líneas permiten acceder al atributo formControlName/ngModel
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return PlexIntComponent; }),
                    multi: true
                },
                // Implementa un validador
                {
                    provide: forms_1.NG_VALIDATORS,
                    useValue: function (c) {
                        if ((c.value == null) || (c.value == "") || REGEX.test(c.value))
                            return null;
                        else
                            return {
                                format: {
                                    given: c.value,
                                }
                            };
                    },
                    multi: true
                }
            ]
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], PlexIntComponent);
    return PlexIntComponent;
}());
exports.PlexIntComponent = PlexIntComponent;
//# sourceMappingURL=int.component.js.map