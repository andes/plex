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
var label_component_1 = require("../label/label.component");
var PlexGridComponent = /** @class */ (function () {
    function PlexGridComponent(render) {
        this.render = render;
    }
    PlexGridComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        var labelListElement = this.plexLabelsElement.toArray();
        this.plexLabels.forEach(function (label, index) {
            var native = labelListElement[index];
            if (label.subtitulo.length > 28) {
                _this.render.setStyle(native.nativeElement, 'grid-column-end', 'span 2');
            }
            else {
                _this.render.setStyle(native.nativeElement, 'grid-column-end', 'unset');
            }
        });
    };
    __decorate([
        core_1.ContentChildren(label_component_1.PlexLabelComponent),
        __metadata("design:type", core_1.QueryList)
    ], PlexGridComponent.prototype, "plexLabels", void 0);
    __decorate([
        core_1.ContentChildren(label_component_1.PlexLabelComponent, { read: core_1.ElementRef }),
        __metadata("design:type", core_1.QueryList)
    ], PlexGridComponent.prototype, "plexLabelsElement", void 0);
    PlexGridComponent = __decorate([
        core_1.Component({
            selector: 'plex-grid',
            template: "\n            <ng-content></ng-content>\n    ",
        }),
        __metadata("design:paramtypes", [core_1.Renderer2])
    ], PlexGridComponent);
    return PlexGridComponent;
}());
exports.PlexGridComponent = PlexGridComponent;
//# sourceMappingURL=../../../src/lib/grid/grid.component.js.map