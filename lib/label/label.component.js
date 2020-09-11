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
var PlexLabelComponent = /** @class */ (function () {
    function PlexLabelComponent() {
        this.tituloBold = true;
        this.size = 'md';
        this.direction = 'row';
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexLabelComponent.prototype, "titulo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexLabelComponent.prototype, "tituloBold", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexLabelComponent.prototype, "subtitulo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexLabelComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexLabelComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexLabelComponent.prototype, "direction", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexLabelComponent.prototype, "type", void 0);
    PlexLabelComponent = __decorate([
        core_1.Component({
            selector: 'plex-label',
            template: "\n        <div class=\"plex-label {{ size }} d-flex flex-{{direction}}\" [ngClass]=\"{ 'align-items-center': direction === 'column' }\">\n            <plex-icon *ngIf=\"icon\" name=\"{{icon}}\" class=\"text-{{ type }}\"></plex-icon>\n            <ng-content select=\"plex-icon\"></ng-content>\n\n            <div class=\"d-flex flex-column\" [ngClass]=\"{ 'align-items-center mt-2': direction === 'column' }\">\n                <span *ngIf=\"titulo\" class=\"text-{{ type }}\" [ngClass]=\"{'font-weight-bold': tituloBold}\">{{ titulo }}</span>\n                <small *ngIf=\"titulo && subtitulo\">{{ subtitulo }}</small>\n            </div>\n            <ng-content *ngIf=\"!titulo && !subtitulo\"></ng-content>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], PlexLabelComponent);
    return PlexLabelComponent;
}());
exports.PlexLabelComponent = PlexLabelComponent;
//# sourceMappingURL=../../../src/lib/label/label.component.js.map