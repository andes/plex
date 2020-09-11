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
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var tab_component_1 = require("./tab.component");
var TabDirective = /** @class */ (function () {
    function TabDirective(view, nextRef, changes, plexTab) {
        this.view = view;
        this.nextRef = nextRef;
        this.changes = changes;
        this.plexTab = plexTab;
        this.viewRef = null;
    }
    TabDirective.prototype.ngOnDestroy = function () {
        this.openSubscription.unsubscribe();
    };
    TabDirective.prototype.ngOnInit = function () {
        var _this = this;
        var timer = this.plTab ? rxjs_1.interval(this.plTab) : rxjs_1.NEVER;
        this.openSubscription = rxjs_1.merge(this.plexTab.toggle.pipe(operators_1.filter(function (active) { return active; })), timer).subscribe(function () {
            if (!_this.viewRef) {
                _this.viewRef = _this.view.createEmbeddedView(_this.nextRef);
                _this.changes.markForCheck();
                _this.openSubscription.unsubscribe();
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TabDirective.prototype, "plTab", void 0);
    TabDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line:directive-selector
            selector: '[plTab]'
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef,
            core_1.TemplateRef,
            core_1.ChangeDetectorRef,
            tab_component_1.PlexTabComponent])
    ], TabDirective);
    return TabDirective;
}());
exports.TabDirective = TabDirective;
//# sourceMappingURL=../../../src/lib/tabs/pl-tab.directive.js.map