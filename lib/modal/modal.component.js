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
var PlexModalComponent = /** @class */ (function () {
    function PlexModalComponent() {
        this.size = 'md';
        /**
         * Muestra una cruz para cerrar el modal.
         */
        this.allowClose = false;
        /**
         * Habilita cerrar el modal haciendo haciendo click afuera.
         */
        this.allowBackdropClose = true;
        /**
         * Habilita cerrar el modal con la tecla esc.
         */
        this.allowEscClose = true;
        /**
         * El modal se visualiza abierto al arrancar.
         */
        this.startOpen = false;
        /**
         * Emite un evento cuando se cierra el modal.
         */
        this.closed = new core_1.EventEmitter();
        this.showed = false;
    }
    PlexModalComponent.prototype.ngOnInit = function () {
        if (this.startOpen) {
            this.showed = true;
        }
    };
    PlexModalComponent.prototype.show = function () {
        this.showed = true;
    };
    PlexModalComponent.prototype.close = function () {
        this.showed = false;
        this.closed.emit();
    };
    PlexModalComponent.prototype.backdropClick = function () {
        if (this.allowBackdropClose) {
            this.close();
        }
    };
    PlexModalComponent.prototype.handleKeyboardEvent = function (event) {
        // Nos aseguramos de no bloquear el teclado si el usuario está escribiendo (isComposing)
        if (event['isComposing'] && !this.showed) {
            return false;
        }
        if (event.which === 27) {
            if (this.allowEscClose) {
                return this.close();
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexModalComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexModalComponent.prototype, "allowClose", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexModalComponent.prototype, "allowBackdropClose", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexModalComponent.prototype, "allowEscClose", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexModalComponent.prototype, "startOpen", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexModalComponent.prototype, "closed", void 0);
    __decorate([
        core_1.HostListener('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PlexModalComponent.prototype, "handleKeyboardEvent", null);
    PlexModalComponent = __decorate([
        core_1.Component({
            selector: 'plex-modal',
            template: "\n        <div *ngIf=\"showed\" class=\"plex-modal\" (click)=\"$event.stopPropagation();backdropClick();\">\n            <div class=\"plex-modal-content {{size}}\" (click)=\"$event.stopPropagation();\">\n                <div *ngIf=\"allowClose\" class=\"plex-modal-close\" (click)=\"close();\">\n                    <plex-icon class=\"close\" type=\"default\" size=\"sm\" name=\"close\"></plex-icon>\n                </div>\n                <header>\n                    <ng-content select=\"plex-icon\"></ng-content>\n                    <ng-content select=\"plex-modal-title\"></ng-content>\n                    <ng-content select=\"plex-modal-subtitle\"></ng-content>\n                </header>\n                <ng-content select=\"main\"></ng-content>\n                <footer>\n                    <ng-content select=\"plex-button[modal][left]\"></ng-content>\n                    <div class=\"w-100\" justify=\"center\">\n                        <ng-content select=\"plex-button[modal][center]\"></ng-content>\n                    </div>\n                    <ng-content select=\"plex-button[modal][right]\"></ng-content>\n                </footer>\n            </div>\n        </div>\n    ",
        })
    ], PlexModalComponent);
    return PlexModalComponent;
}());
exports.PlexModalComponent = PlexModalComponent;
//# sourceMappingURL=../../../src/lib/modal/modal.component.js.map