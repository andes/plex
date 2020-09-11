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
var PlexOptionsComponent = /** @class */ (function () {
    function PlexOptionsComponent() {
        this.active = '';
        /**
         * Emite la opción seleccionada
         */
        this.activated = new core_1.EventEmitter();
    }
    /**
     * Activa una opción de forma dinamica.
     * @param key Clave del item.
     */
    PlexOptionsComponent.prototype.activate = function (key) {
        var exist = this.items.find(function (item) { return item.key === key; });
        if (exist) {
            this.active = key;
        }
    };
    PlexOptionsComponent.prototype.ngOnInit = function () {
        if (this.items.length > 0) {
            this.active = this.items[0].key;
        }
    };
    PlexOptionsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.items) {
            this.checkKey();
        }
    };
    PlexOptionsComponent.prototype.onOptionsClick = function (item) {
        this.active = item.key;
        this.activated.emit(item.key);
    };
    PlexOptionsComponent.prototype.checkKey = function () {
        var _this = this;
        var isKeyPresent = this.items.some(function (item) { return item.key === _this.active; });
        if (!isKeyPresent) {
            this.active = this.items[0].key;
            this.activated.emit(this.active);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], PlexOptionsComponent.prototype, "items", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexOptionsComponent.prototype, "activated", void 0);
    PlexOptionsComponent = __decorate([
        core_1.Component({
            selector: 'plex-options',
            template: "\n        <div class=\"row\">\n            <div class=\"d-flex col flex-wrap\">\n                <ng-container *ngFor=\"let item of items\">\n                    <button class=\"btn btn-primary btn-sm option-grow m-0\" (click)=\"onOptionsClick(item)\" [class.active]=\"active === item.key\">\n                        {{ item.label }}\n                    </button>\n                </ng-container>\n            </div>\n        </div>\n    "
        })
    ], PlexOptionsComponent);
    return PlexOptionsComponent;
}());
exports.PlexOptionsComponent = PlexOptionsComponent;
//# sourceMappingURL=../../../src/lib/options/options.component.js.map