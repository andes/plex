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
var Waves = require('node-waves/dist/waves');
Waves.init();
var PlexRipplesDirective = /** @class */ (function () {
    function PlexRipplesDirective(element) {
        this.element = element;
    }
    // Inicialización
    PlexRipplesDirective.prototype.ngOnInit = function () {
    };
    PlexRipplesDirective.prototype.ngAfterViewInit = function () {
        Waves.attach(this.element.nativeElement, ['']);
    };
    PlexRipplesDirective = __decorate([
        core_1.Directive({
            selector: '[plexRipples]',
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], PlexRipplesDirective);
    return PlexRipplesDirective;
}());
exports.PlexRipplesDirective = PlexRipplesDirective;
//# sourceMappingURL=../../../src/lib/ripples/ripples.directive.js.map