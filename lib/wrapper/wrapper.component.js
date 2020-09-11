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
var PlexWrapperComponent = /** @class */ (function () {
    function PlexWrapperComponent(elRef, ref) {
        this.elRef = elRef;
        this.ref = ref;
        this.change = new core_1.EventEmitter();
        this.desplegado = false;
        this.hasCollapse = false;
    }
    PlexWrapperComponent.prototype.ngAfterViewInit = function () {
        this.hasCollapse = !!this.elRef.nativeElement.querySelector('section [collapse]');
        this.ref.detectChanges();
    };
    PlexWrapperComponent.prototype.toogle = function () {
        this.desplegado = !this.desplegado;
        this.change.emit(this.desplegado);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexWrapperComponent.prototype, "change", void 0);
    PlexWrapperComponent = __decorate([
        core_1.Component({
            selector: 'plex-wrapper',
            template: "\n    <section class=\"hidden\" [class.desplegado]=\"desplegado\" responsive>\n        <plex-button class=\"btn-toogle\" type=\"info\" size=\"sm\" *ngIf=\"hasCollapse\"\n            [icon]=\"!desplegado ? 'chevron-down' : 'chevron-up'\" (click)=\"toogle()\">\n        </plex-button>\n        <ng-content></ng-content>\n        <ng-content select=\"[collapse]\"></ng-content>\n    </section>\n",
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.ChangeDetectorRef])
    ], PlexWrapperComponent);
    return PlexWrapperComponent;
}());
exports.PlexWrapperComponent = PlexWrapperComponent;
//# sourceMappingURL=../../../src/lib/wrapper/wrapper.component.js.map