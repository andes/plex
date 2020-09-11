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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_1 = require("../../../lib/core/service");
var TextDemoComponent = /** @class */ (function () {
    function TextDemoComponent(plex) {
        var _this = this;
        this.plex = plex;
        this.richText = {
            contenido: '<p>Hello <strong>World</strong></p>'
        };
        this.prueba = '';
        this.qlToolbar = [{
                name: 'fullscreen',
                handler: function () {
                    _this.fullscreen();
                }
            }];
    }
    TextDemoComponent.prototype.onFocus = function () {
        this.templateModel1.usuario = 'FOCUSED';
    };
    TextDemoComponent.prototype.onFocusout = function () {
        this.templateModel1.usuario = '';
    };
    TextDemoComponent.prototype.ngOnInit = function () {
        // Template-Form1 model
        this.templateModel1 = { nombre: null };
        // Template-Form2 model
        this.templateModel2 = { nombre: null, min: 10, max: 15 };
        // Form1: Sin validador
        this.model1 = { nombre: null };
        // Form2: Doble validación con min y max
        this.model2 = { nombre: null, min: 10, max: 15 };
    };
    TextDemoComponent.prototype.cambio = function () {
    };
    TextDemoComponent.prototype.fullscreen = function () {
        this.plex.toast('success', 'Fullscreen detected!');
    };
    TextDemoComponent.prototype.onChange = function () {
        this.plex.toast('success', 'Este cartel se demoro un segundo en aparecer después de escribir.', 'Debounce!');
    };
    TextDemoComponent = __decorate([
        core_1.Component({
            templateUrl: 'text.html',
        }),
        __metadata("design:paramtypes", [service_1.Plex])
    ], TextDemoComponent);
    return TextDemoComponent;
}());
exports.TextDemoComponent = TextDemoComponent;
//# sourceMappingURL=../../../../src/demo/app/text/text.component.js.map