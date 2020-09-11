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
var PlexHelpComponent = /** @class */ (function () {
    function PlexHelpComponent(renderer) {
        this.renderer = renderer;
        this.type = 'info';
        this.titulo = '';
        this.size = 'sm';
        this.tituloBoton = '';
        this.icon = 'help-circle';
        this.close = new core_1.EventEmitter();
        this.open = new core_1.EventEmitter();
        this.closed = true;
    }
    Object.defineProperty(PlexHelpComponent.prototype, "content", {
        get: function () {
            return (this.icon && this.icon.length > 0) || (this.tituloBoton && this.tituloBoton.length > 0);
        },
        enumerable: true,
        configurable: true
    });
    PlexHelpComponent.prototype.toogle = function () {
        var _this = this;
        this.closed = !this.closed;
        if (!this.closed) {
            this.open.emit();
            this.unlisten = this.renderer.listen('document', 'click', function (event) {
                _this.toogle();
                _this.unlisten();
            });
        }
        else {
            this.close.emit();
            if (this.unlisten) {
                this.unlisten();
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexHelpComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexHelpComponent.prototype, "titulo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexHelpComponent.prototype, "subtitulo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexHelpComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexHelpComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexHelpComponent.prototype, "tituloBoton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexHelpComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexHelpComponent.prototype, "close", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexHelpComponent.prototype, "open", void 0);
    PlexHelpComponent = __decorate([
        core_1.Component({
            selector: 'plex-help',
            template: "\n    <div class=\"toggle-{{ type }}\" [ngClass]=\"{'closed': closed, 'open': !closed}\">\n        <plex-button *ngIf=\"!closed\" type=\"danger\" [size]=\"size\" icon=\"close\" (click)=\"toogle();$event.stopImmediatePropagation();\"></plex-button>\n        <plex-button *ngIf=\"content && closed && !tituloBoton\" type=\"info\" [size]=\"size\" title=\"{{ title }}\" [icon]=\"type === 'info'? 'informacion' : 'help-circle'\" (click)=\"toogle();$event.stopImmediatePropagation();\"></plex-button>\n        <plex-button *ngIf=\"content && closed && tituloBoton\" type=\"info\" [size]=\"size\" [label]=\"tituloBoton\" (click)=\"toogle();$event.stopImmediatePropagation();\"></plex-button>\n    </div>\n    <div class=\"card {{ type }}\" [ngClass]=\"{'open': !closed}\" *ngIf=\"type === 'help'\" (click)=\"$event.stopImmediatePropagation();\">\n        <ng-container *ngIf=\"!closed\">\n            <div class=\"card-header\">\n                <h5>{{ titulo }}</h5>\n            </div>\n            <div class=\"card-body\">\n                <ng-content></ng-content>\n            </div>\n        </ng-container>\n    </div>\n    <ng-container *ngIf=\"!closed && type === 'info'\">\n        <div class=\"jumbotron {{ type }}\" [ngClass]=\"{'open': !closed}\" (click)=\"$event.stopImmediatePropagation();\">\n            <h1 class=\"display-6\">{{ titulo }}</h1>\n            <p class=\"lead\" *ngIf=\"subtitulo\"><b>{{ subtitulo }}</b></p>\n            <ng-content select=\"[info]\"></ng-content>\n        </div>\n    </ng-container>\n    "
        }),
        __metadata("design:paramtypes", [core_1.Renderer2])
    ], PlexHelpComponent);
    return PlexHelpComponent;
}());
exports.PlexHelpComponent = PlexHelpComponent;
//# sourceMappingURL=../../../src/lib/help/help.component.js.map