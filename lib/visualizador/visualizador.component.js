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
var platform_browser_1 = require("@angular/platform-browser");
var PlexVisualizadorComponent = /** @class */ (function () {
    function PlexVisualizadorComponent(domSanitizer) {
        this.domSanitizer = domSanitizer;
        /**
         * Listado de archivos a visualizar
         */
        this.files = [];
        /**
         * Evento emitido cuando el visualizador se cierra
         */
        this.closed = new core_1.EventEmitter();
        /**
         * Evento emitido cuando se cambio de imagen
         */
        this.change = new core_1.EventEmitter();
        /**
         * Evento emitido cuando se hace click en una imagen
         */
        this.click = new core_1.EventEmitter();
        this.opened = false;
        this.index = 0;
        this.imagenes = ['bmp', 'jpg', 'jpeg', 'gif', 'png', 'tif', 'tiff', 'raw'];
        this.extensions = [
            // Documentos
            'pdf', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'xml', 'html', 'txt',
            // Audio/Video
            'mp3', 'mp4', 'm4a', 'mpeg', 'mpg', 'mov', 'flv', 'avi', 'mkv',
            // Otros
            'dat'
        ];
    }
    Object.defineProperty(PlexVisualizadorComponent.prototype, "imageSrc", {
        get: function () {
            var file = this.files[this.index];
            return this.url(file);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexVisualizadorComponent.prototype, "isImage", {
        get: function () {
            var item = this.files[this.index];
            if (typeof item === 'string') {
                return true;
            }
            else {
                return this.imagenes.find(function (x) { return x === item.ext.toLowerCase(); });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexVisualizadorComponent.prototype, "desc", {
        get: function () {
            var item = this.files[this.index];
            if (typeof item === 'string') {
                return 'img';
            }
            else {
                return item.ext;
            }
        },
        enumerable: true,
        configurable: true
    });
    PlexVisualizadorComponent.prototype.secureUrl = function (url) {
        return this.domSanitizer.bypassSecurityTrustUrl(url);
    };
    PlexVisualizadorComponent.prototype.url = function (item) {
        if (typeof item === 'string') {
            return this.secureUrl(item);
        }
        else {
            return this.secureUrl(item.url);
        }
    };
    PlexVisualizadorComponent.prototype.open = function (index) {
        if (index === void 0) { index = undefined; }
        this.opened = true;
        if (typeof index === 'number') {
            this.index = index;
        }
        else {
            this.index = 0;
        }
    };
    PlexVisualizadorComponent.prototype.close = function () {
        this.opened = false;
        this.closed.emit();
    };
    PlexVisualizadorComponent.prototype.previous = function () {
        if (this.index > 0) {
            this.index = this.index - 1;
            this.change.emit(this.index);
        }
    };
    PlexVisualizadorComponent.prototype.next = function () {
        if (this.index < this.files.length - 1) {
            this.index = this.index + 1;
            this.change.emit(this.index);
        }
    };
    PlexVisualizadorComponent.prototype.imageClick = function () {
        this.click.emit(this.index);
    };
    PlexVisualizadorComponent.prototype.handleKeyboardEvent = function (event) {
        if (!this.open) {
            return false;
        }
        if (event.which === 37) {
            return this.previous();
        }
        if (event.which === 39) {
            return this.next();
        }
        if (event.which === 27) {
            return this.close();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], PlexVisualizadorComponent.prototype, "files", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexVisualizadorComponent.prototype, "closed", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexVisualizadorComponent.prototype, "change", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexVisualizadorComponent.prototype, "click", void 0);
    __decorate([
        core_1.HostListener('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], PlexVisualizadorComponent.prototype, "handleKeyboardEvent", null);
    PlexVisualizadorComponent = __decorate([
        core_1.Component({
            selector: 'plex-visualizador',
            template: "\n    <div *ngIf=\"opened\" class=\"lightbox hover\" (click)=\"close()\">\n        <plex-icon (click)=\"previous();$event.stopPropagation();\" type=\"info\" size=\"xl\" name=\"chevron-double-left\" class=\"parpadeo\"></plex-icon>\n\n\n        <img [src]=\"imageSrc\" alt=\"\" *ngIf=\"isImage\" (click)=\"imageClick();$event.stopPropagation();\">\n        <a [href]=\"imageSrc\" target=\"_blank\" *ngIf=\"!isImage\" class=\"adjunto m-1 p-2\"\n        (click)=\"imageClick();$event.stopPropagation();\">\n            {{ desc }}\n        </a>\n\n        <plex-icon (click)=\"next();$event.stopPropagation();\" type=\"info\" size=\"xl\" name=\"chevron-double-right\" class=\"parpadeo\"></plex-icon>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], PlexVisualizadorComponent);
    return PlexVisualizadorComponent;
}());
exports.PlexVisualizadorComponent = PlexVisualizadorComponent;
//# sourceMappingURL=../../../src/lib/visualizador/visualizador.component.js.map