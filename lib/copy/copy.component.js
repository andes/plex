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
var PlexCopyComponent = /** @class */ (function () {
    function PlexCopyComponent() {
        this.size = 'md';
        this.type = null;
        this.copied = false;
        this.copying = false;
    }
    PlexCopyComponent.prototype.ngOnInit = function () { };
    PlexCopyComponent.prototype.copyToClipboard = function () {
        var _this = this;
        var listener = function (e) {
            e.clipboardData.setData('text/plain', (_this.value));
            e.preventDefault();
            _this.copied = true;
        };
        document.addEventListener('copy', listener);
        document.execCommand('copy');
        document.removeEventListener('copy', listener);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexCopyComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexCopyComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexCopyComponent.prototype, "type", void 0);
    PlexCopyComponent = __decorate([
        core_1.Component({
            selector: 'plex-copy',
            template: "\n        <span align class=\"d-inline-flex align-items-center ml-1\" #container>\n            <ng-content></ng-content>\n            <button class=\"btn btn-link btn-lg p-1\" (click)=\"copyToClipboard()\" (mouseenter)=\"copying = true\" (mouseleave)=\"copying = false\" title=\"Copiar valor\">\n                <plex-icon *ngIf=\"!copied || copying\" type=\"info\" [size]=\"size\" name=\"clipboard-plus\"></plex-icon>\n                <plex-icon *ngIf=\"copied && !copying\" type=\"info\" [size]=\"size\" name=\"clipboard-check\"></plex-icon>\n\n            </button>\n        </span>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], PlexCopyComponent);
    return PlexCopyComponent;
}());
exports.PlexCopyComponent = PlexCopyComponent;
//# sourceMappingURL=../../../src/lib/copy/copy.component.js.map