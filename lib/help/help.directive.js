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
var help_component_1 = require("./help.component");
var HelpDirective = /** @class */ (function () {
    function HelpDirective(view, nextRef, changes, plexHelp) {
        this.view = view;
        this.nextRef = nextRef;
        this.changes = changes;
        this.plexHelp = plexHelp;
    }
    HelpDirective.prototype.ngOnDestroy = function () {
        this.openSubscription.unsubscribe();
        this.closeSubscription.unsubscribe();
    };
    HelpDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.openSubscription = this.plexHelp.open.subscribe(function () {
            _this.view.clear();
            _this.view.createEmbeddedView(_this.nextRef);
            _this.changes.markForCheck();
        });
        this.closeSubscription = this.plexHelp.close.subscribe(function () {
            _this.view.clear();
            _this.changes.markForCheck();
        });
    };
    HelpDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line:directive-selector
            selector: '[plHelp]'
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef,
            core_1.TemplateRef,
            core_1.ChangeDetectorRef,
            help_component_1.PlexHelpComponent])
    ], HelpDirective);
    return HelpDirective;
}());
exports.HelpDirective = HelpDirective;
//# sourceMappingURL=../../../src/lib/help/help.directive.js.map