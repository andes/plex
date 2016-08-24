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
var core_1 = require('@angular/core');
// import { CommonModule } from '@angular/common';
var box_footer_component_1 = require('./box-footer.component');
var BoxComponent = (function () {
    function BoxComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BoxComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BoxComponent.prototype, "ngClass", void 0);
    BoxComponent = __decorate([
        core_1.Component({
            selector: 'box',
            directives: [
                box_footer_component_1.BoxFooterComponent
            ],
            template: "\n  <div class=\"box {{ngClass}}\" >\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">{{title}}</h3>\n      <!--\n      <div class=\"box-tools pull-right\">\n        <span class=\"label label-primary\">Label</span>\n      </div>\n      -->\n    </div>\n\n    <div class=\"box-body\">\n\n      <ng-content></ng-content>\n\n    </div>\n\n    <ng-content select=\"box-footer\"></ng-content>\n\n\n\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BoxComponent);
    return BoxComponent;
}());
exports.BoxComponent = BoxComponent;
//# sourceMappingURL=box.component.js.map