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
var HintComponent = /** @class */ (function () {
    function HintComponent() {
        this.hintIcon = 'help';
        this.position = 'above';
    }
    HintComponent.prototype.ngOnInit = function () {
        this.position = 'above';
    };
    // Si el elemento que tiene la directiva [hint] tiene un evento (click), este se ejecutará, guste o no.
    HintComponent.prototype.onClick = function () {
        this.hostElement.click();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", HTMLElement)
    ], HintComponent.prototype, "hostElement", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HintComponent.prototype, "hintType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HintComponent.prototype, "hintIcon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HintComponent.prototype, "content", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HintComponent.prototype, "position", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HintComponent.prototype, "detach", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HintComponent.prototype, "onClick", null);
    HintComponent = __decorate([
        core_1.Component({
            selector: 'plex-hint',
            template: "\n        <a href=\"javascript:void(0)\" *ngIf=\"position && content\" class=\"hint-container detach-{{detach}}\" [matTooltip]=\"content\" [matTooltipPosition]=\"position\">\n            <plex-icon class=\"hint {{ hintType }}\" [name]=\"hintIcon\" type=\"light\"></plex-icon>\n        </a>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], HintComponent);
    return HintComponent;
}());
exports.HintComponent = HintComponent;
//# sourceMappingURL=../../../src/lib/hint/hint.component.js.map