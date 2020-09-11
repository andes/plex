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
var PlexScrollComponent = /** @class */ (function () {
    function PlexScrollComponent(elementRef) {
        this.elementRef = elementRef;
        this.change = new core_1.EventEmitter();
    }
    PlexScrollComponent.prototype.ngAfterViewInit = function () {
        this.container = this.elementRef.nativeElement.parentElement;
        this.container.addEventListener('scroll', this.onScroll.bind(this), false);
    };
    PlexScrollComponent.prototype.ngOnDestroy = function () {
        this.container.removeEventListener('scroll', this.onScroll);
    };
    PlexScrollComponent.prototype.onScroll = function () {
        if (this.container.scrollTop + this.container.clientHeight >= this.container.scrollHeight) {
            this.change.emit(null);
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexScrollComponent.prototype, "change", void 0);
    PlexScrollComponent = __decorate([
        core_1.Component({
            selector: 'plex-scroll',
            template: '',
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], PlexScrollComponent);
    return PlexScrollComponent;
}());
exports.PlexScrollComponent = PlexScrollComponent;
//# sourceMappingURL=../../../src/lib/scroll/scroll.component.js.map