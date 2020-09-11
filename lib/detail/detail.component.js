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
var label_component_1 = require("../label/label.component");
var PlexDetailComponent = /** @class */ (function () {
    function PlexDetailComponent(render) {
        this.render = render;
        this.direction = 'row';
        this.size = 'md';
    }
    Object.defineProperty(PlexDetailComponent.prototype, "cssDirection", {
        get: function () {
            return this.direction === 'row' ? 'direction-row' : 'direction-column';
        },
        enumerable: true,
        configurable: true
    });
    PlexDetailComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        var labelListElement = this.plexLabelsElement.toArray();
        this.plexLabels.forEach(function (label, index) {
            var native = labelListElement[index];
            if (label.subtitulo.length > 28) {
                _this.render.setStyle(native.nativeElement, 'grid-column-end', 'span 2');
            }
            else {
                _this.render.setStyle(native.nativeElement, 'grid-column-end', 'unset');
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexDetailComponent.prototype, "direction", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexDetailComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], PlexDetailComponent.prototype, "items", void 0);
    __decorate([
        core_1.ContentChildren(label_component_1.PlexLabelComponent),
        __metadata("design:type", core_1.QueryList)
    ], PlexDetailComponent.prototype, "plexLabels", void 0);
    __decorate([
        core_1.ContentChildren(label_component_1.PlexLabelComponent, { read: core_1.ElementRef }),
        __metadata("design:type", core_1.QueryList)
    ], PlexDetailComponent.prototype, "plexLabelsElement", void 0);
    PlexDetailComponent = __decorate([
        core_1.Component({
            selector: 'plex-detail',
            template: "\n        <section [ngClass]=\"cssDirection\" class=\"size-{{size}}\">\n            <div class=\"contenedor-elementos-graficos\">\n                <ng-content select=\"plex-icon\"></ng-content>\n                <ng-content select=\"img\"></ng-content>\n            </div>\n            <div class=\"contenedor-textos\" [ngClass]=\"{ 'd-flex flex-column': direction === 'column'  }\">\n                <span class=\"d-flex flex-row flex-wrap\">\n                    <ng-content select=\"plex-badge\"></ng-content>\n                </span>\n                <ng-content select=\"div[title]\"></ng-content>\n                <ng-content select=\"div[subtitle]\"></ng-content>\n                <hr>\n            </div>\n        </section>\n\n        <section [ngClass]=\"cssDirection\" class=\"contenedor-datos-secundarios\">\n            <ng-container *ngFor=\"let dato of items\">\n                <plex-label titulo=\"{{ dato.label }}\" subtitulo=\"{{ dato.valor }}\"></plex-label>\n            </ng-container>\n            <ng-content select=\"plex-label\"></ng-content>\n        </section>\n    ",
        }),
        __metadata("design:paramtypes", [core_1.Renderer2])
    ], PlexDetailComponent);
    return PlexDetailComponent;
}());
exports.PlexDetailComponent = PlexDetailComponent;
//# sourceMappingURL=../../../src/lib/detail/detail.component.js.map