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
var forms_1 = require("@angular/forms");
var validator_functions_1 = require("../core/validator.functions");
var PlexTextComponent = /** @class */ (function () {
    function PlexTextComponent(renderer) {
        this.renderer = renderer;
        // private
        this.quillStyle = {
            height: '200px'
        };
        // Public
        this.isEmpty = true;
        this.quill = {
            toolbar: {
                container: [
                    ['bold', 'italic', 'underline'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ size: ['small', false, 'large', 'huge'] }],
                    [{ align: [] }],
                    ['clean'],
                ],
                handlers: {}
            }
        };
        // Propiedades
        this.type = 'text';
        this.size = 'md';
        this.disabled = false;
        this.readonly = false;
        this.multiline = false;
        this.html = false;
        this.debounce = 0;
        // Eventos
        this.change = new core_1.EventEmitter();
        this.focus = new core_1.EventEmitter();
        this.focusout = new core_1.EventEmitter();
        // Funciones públicas
        this.onChange = function (_) { };
        this.changeTimeout = null;
        this.placeholder = '';
        this.password = false;
    }
    PlexTextComponent_1 = PlexTextComponent;
    Object.defineProperty(PlexTextComponent.prototype, "esRequerido", {
        get: function () {
            return validator_functions_1.hasRequiredValidator(this.control);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexTextComponent.prototype, "password", {
        set: function (value) {
            if (value) {
                this.type = 'password';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexTextComponent.prototype, "height", {
        set: function (value) {
            if (typeof value === 'number') {
                this.quillStyle.height = value + 'px';
            }
            else {
                this.quillStyle.height = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexTextComponent.prototype, "autoFocus", {
        set: function (value) {
            // Cada vez que cambia el valor vuelve a setear el foco
            if (this.renderer) {
                var element = this.multiline ? this.textarea.nativeElement : this.input.nativeElement;
                this.renderer.invokeElementMethod(element, 'focus');
            }
        },
        enumerable: true,
        configurable: true
    });
    PlexTextComponent.prototype.onFocus = function () {
        this.focus.emit();
    };
    PlexTextComponent.prototype.onFocusout = function () {
        this.focusout.emit();
    };
    PlexTextComponent.prototype.disabledEvent = function (event) {
        event.stopImmediatePropagation();
        return false;
    };
    // Inicialización
    PlexTextComponent.prototype.ngOnInit = function () {
        if (this.html) {
            this.prepareQuillToolbar();
        }
    };
    PlexTextComponent.prototype.ngAfterViewInit = function () {
        if (this.autoFocus) {
            var element = this.multiline ? this.textarea.nativeElement : this.input.nativeElement;
            this.renderer.invokeElementMethod(element, 'focus');
        }
        if (this.html) {
            this.createToolbarIcons();
        }
    };
    // Actualización Modelo -> Vista
    PlexTextComponent.prototype.writeValue = function (value) {
        var element = this.multiline ? this.textarea.nativeElement : this.input.nativeElement;
        this.renderer.setElementProperty(element, 'value', typeof value === 'undefined' ? '' : value);
        if (this.multiline) {
            this.adjustTextArea();
        }
        else {
            if (this.html) {
                var component = this.quillEditor;
                // Por el dinamismo de RUP hay una primera instancia que quillEditor es undefined
                if (component.quillEditor) {
                    component.quillEditor.setContents(component.valueSetter(component.quillEditor, typeof value === 'undefined' ? '' : value));
                }
            }
        }
        // Check empty
        this.isEmpty = !(value && value.toString().trim());
    };
    PlexTextComponent.prototype.hasDanger = function () {
        return this.control.name && (this.control.dirty || this.control.touched) && !this.control.valid;
    };
    // Actualización Vista -> Modelo
    PlexTextComponent.prototype.registerOnTouched = function () {
    };
    PlexTextComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (value) {
            value = value || null;
            fn(value);
            // Check empty
            _this.isEmpty = !(value && value.toString().trim());
            if (_this.multiline) {
                _this.adjustTextArea();
            }
            // jgabriel | 24/03/2017 | Esto es un por bug de Angular2 que a veces no actualiza la vista cuando cambia el modelo
            // this.change.emit({
            //   value: value
            // });
            if (_this.changeTimeout) {
                clearTimeout(_this.changeTimeout);
            }
            _this.changeTimeout = setTimeout(function () {
                _this.change.emit({
                    value: value
                });
            }, _this.debounce);
        };
    };
    /**
     * Borra el contenido del input
     *
     * @memberof PlexTextComponent
     */
    PlexTextComponent.prototype.clearInput = function () {
        if (!this.disabled && !this.isEmpty) {
            this.writeValue(null);
            this.onChange(null);
            this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
        }
    };
    /**
     * Ajusta el alto del textarea al contenido
     *
     * @memberof PlexTextComponent
     */
    PlexTextComponent.prototype.adjustTextArea = function () {
        this.textarea.nativeElement.style.overflow = 'hidden';
        this.textarea.nativeElement.style.height = 'auto';
        this.textarea.nativeElement.style.height = this.textarea.nativeElement.scrollHeight + 'px';
    };
    PlexTextComponent.prototype.prepareQuillToolbar = function () {
        if (this.qlToolbar) {
            var toolBarItems_1 = [];
            var handlers_1 = {};
            this.qlToolbar.forEach(function (item) {
                toolBarItems_1.push(item.name);
                handlers_1[item.name] = item.handler;
            });
            this.quill.toolbar.container.push(toolBarItems_1);
            this.quill.toolbar.handlers = handlers_1;
        }
    };
    PlexTextComponent.prototype.createToolbarIcons = function () {
        if (this.qlToolbar) {
            var editor = this.quillEditor.quillEditor;
            var toolbar_1 = editor.getModule('toolbar').container;
            this.qlToolbar.forEach(function (item) {
                var qlItem = toolbar_1.getElementsByClassName("ql-" + item.name);
                if (qlItem.length > 0) {
                    qlItem[0].innerHTML = "<i class=\"adi adi-" + (item.icon || item.name) + "\"></i>";
                }
            });
        }
    };
    var PlexTextComponent_1;
    __decorate([
        core_1.ViewChild('input', { static: true }),
        __metadata("design:type", core_1.ElementRef)
    ], PlexTextComponent.prototype, "input", void 0);
    __decorate([
        core_1.ViewChild('textarea', { static: true }),
        __metadata("design:type", core_1.ElementRef)
    ], PlexTextComponent.prototype, "textarea", void 0);
    __decorate([
        core_1.ViewChild('quillEditor', { static: true }),
        __metadata("design:type", core_1.ElementRef)
    ], PlexTextComponent.prototype, "quillEditor", void 0);
    __decorate([
        core_1.ContentChild(forms_1.NgControl, { static: true }),
        __metadata("design:type", Object)
    ], PlexTextComponent.prototype, "control", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexTextComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexTextComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexTextComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexTextComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexTextComponent.prototype, "prefix", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexTextComponent.prototype, "suffix", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexTextComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexTextComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexTextComponent.prototype, "multiline", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexTextComponent.prototype, "html", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexTextComponent.prototype, "debounce", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], PlexTextComponent.prototype, "qlToolbar", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PlexTextComponent.prototype, "password", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PlexTextComponent.prototype, "height", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PlexTextComponent.prototype, "autoFocus", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexTextComponent.prototype, "change", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexTextComponent.prototype, "focus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexTextComponent.prototype, "focusout", void 0);
    PlexTextComponent = PlexTextComponent_1 = __decorate([
        core_1.Component({
            selector: 'plex-text',
            template: "\n    <div class=\"form-group\" [ngClass]=\"{'has-danger': hasDanger() }\">\n\n        <!-- Label -->\n        <label *ngIf=\"label\" class=\"form-control-label\">\n            {{label}}\n            <span *ngIf=\"control.name && esRequerido\" class=\"requerido\"></span>\n        </label>\n\n        <!-- Simple text field -->\n        <div [hidden]=\"multiline || html\" [class.input-group]=\"prefix || suffix || prefixParent?.children.length > 0 || suffixParent?.children.length > 0\">\n            <span *ngIf=\"prefix\" class=\"input-group-addon\">\n                <plex-icon type=\"default\" size=\"md\" [name]=\"prefix\"></plex-icon>\n            </span>\n            <span #prefixParent [hidden]=\"prefixParent?.children.length === 0\" class=\"input-group-addon\">\n                <ng-content select=\"[left]\"></ng-content>\n            </span>\n\n            <input #input type=\"{{type}}\" class=\"form-control form-control-{{size}}\" [placeholder]=\"placeholder\" [disabled]=\"disabled\"\n                [readonly]=\"readonly\" (input)=\"onChange($event.target.value)\" (change)=\"disabledEvent($event)\" (focus)=\"onFocus()\" (focusout)=\"onFocusout()\">\n\n            <plex-icon  *ngIf=\"!readonly && !multiline && !html && !isEmpty\" size=\"sm\" name=\"close-circle\" class=\"clear-icon\" (click)=\"clearInput()\"></plex-icon>\n\n            <span #suffixParent [hidden]=\"suffixParent?.children.length === 0\" class=\"input-group-addon\">\n                <ng-content select=\"[right]\"></ng-content>\n            </span>\n        </div>\n\n        <!-- Multiline -->\n        <textarea [hidden]=\"!multiline || html\" #textarea class=\"form-control\" [placeholder]=\"placeholder\" [disabled]=\"disabled\" [readonly]=\"readonly\"\n        (input)=\"onChange($event.target.value)\" (change)=\"disabledEvent($event)\" (focus)=\"onFocus()\" (focusout)=\"onFocusout()\">\n        </textarea>\n\n        <!-- HTML Editor -->\n        <quill-editor #quillEditor [hidden]=\"multiline || !html\" [modules]=\"quill\" [style]=\"quillStyle\" [readOnly]=\"readonly\" [placeholder]=\"placeholder\" (onContentChanged)=\"onChange($event.html)\"></quill-editor>\n\n        <!-- Validation -->\n        <plex-validation-messages *ngIf=\"hasDanger()\" [control]=\"control\"></plex-validation-messages>\n    </div>\n    ",
            providers: [
                // Permite acceder al atributo formControlName/ngModel
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return PlexTextComponent_1; }),
                    multi: true,
                }
            ]
        }),
        __metadata("design:paramtypes", [core_1.Renderer])
    ], PlexTextComponent);
    return PlexTextComponent;
}());
exports.PlexTextComponent = PlexTextComponent;
//# sourceMappingURL=../../../src/lib/text/text.component.js.map