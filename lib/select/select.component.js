"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// Importo las librerías
var Selectize = require('selectize/dist/js/standalone/selectize');
var PlexSelectComponent = /** @class */ (function () {
    // Constructor
    function PlexSelectComponent(element) {
        this.element = element;
        this.hasStaticData = false;
        this.uniqueId = new Date().valueOf().toString();
        this.closeAfterSelect = false;
        // Eventos
        this.getData = new core_1.EventEmitter();
        this.change = new core_1.EventEmitter();
        // Funciones públicas
        this.onChange = function (_) { };
        this.initRemoveButtonPlugin();
        this.placeholder = '';
        this.multiple = false;
        this.idField = 'id';
        this.labelField = 'nombre';
        this.groupField = 'grupo';
    }
    PlexSelectComponent_1 = PlexSelectComponent;
    Object.defineProperty(PlexSelectComponent.prototype, "esRequerido", {
        get: function () {
            return validator_functions_1.hasRequiredValidator(this.control);
        },
        enumerable: true,
        configurable: true
    });
    PlexSelectComponent.prototype.hasDanger = function () {
        return (this.control.dirty || this.control.touched) && !this.control.valid;
    };
    Object.defineProperty(PlexSelectComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            if (this._data !== value) {
                this.hasStaticData = true;
                this._data = value;
                if (this.selectize) {
                    var currentValue = this.value;
                    this.removeOptions();
                    if (value) {
                        this.selectize.addOption(value);
                        value = this.remove$order(value);
                    }
                    this.writeValue(currentValue);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexSelectComponent.prototype, "readonly", {
        set: function (value) {
            this._readonly = value;
            if (this.selectize) {
                if (value) {
                    this.selectize.lock();
                }
                else {
                    this.selectize.unlock();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlexSelectComponent.prototype, "disabled", {
        set: function (value) {
            this._disabled = value;
            if (this.selectize) {
                if (value) {
                    this.selectize.disable();
                }
                else {
                    this.selectize.enable();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    PlexSelectComponent.prototype.initRemoveButtonPlugin = function () {
        // Basado en remove_button de selectize/dist/js/standalone/selectize
        Selectize.define('remove_button_plex', function (options) {
            options = {
                label: '<i class="adi adi-close-circle"></i>',
                title: 'Quitar esta opción',
                className: 'remove-button',
                append: true
            };
            var self = this;
            var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + options.title + '">' + options.label + '</a>';
            var append = function (html_container, html_element) {
                var pos = html_container.search(/(<\/[^>]+>\s*)$/);
                return html_container.substring(0, pos) + html_element + html_container.substring(pos);
            };
            self.setup = (function () {
                var original = self.setup;
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    // override the item rendering method to add the button to each
                    if (options.append) {
                        var render_item_1 = self.settings.render.item;
                        self.settings.render.item = function () {
                            var params = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                params[_i] = arguments[_i];
                            }
                            return append(render_item_1.apply(self, params), html);
                        };
                    }
                    original.apply(self, args);
                    // Mouse Events
                    self.$control.on('mousedown', '.' + options.className, function (e) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        return false;
                    });
                    self.$control.on('click', '.' + options.className, function (e) {
                        if (!self.isLocked) {
                            if (self.settings.mode === 'single') {
                                self.clear();
                            }
                            else {
                                var $item = jQuery(e.currentTarget).parent();
                                self.setActiveItem($item);
                                if (self.deleteSelection()) {
                                    self.setCaret(self.items.length);
                                }
                            }
                        }
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        return false;
                    });
                };
            })();
        });
    };
    PlexSelectComponent.prototype.splitLabelField = function (labelField, filterLiterals) {
        var values = labelField.split('+');
        return filterLiterals ? values.filter(function (i) { return (i.indexOf('\'') < 0 || i.indexOf('\'') < 0); }) : values;
    };
    /**
     * Rendera una opción en base a la expresión indicada en labelField
     */
    PlexSelectComponent.prototype.renderOption = function (item, labelField) {
        var _this = this;
        if (!item) {
            return '';
        }
        var result = '';
        var labelFields = this.splitLabelField(labelField, false);
        labelFields.forEach(function (field) {
            if (field.startsWith('\'')) {
                result += field.slice(1, field.length - 1) + ' ';
            }
            else {
                if (field.indexOf('.') < 0) {
                    result += item[field] + ' ';
                }
                else {
                    var prefix = field.substr(0, field.indexOf('.'));
                    var suffix = field.slice(field.indexOf('.') + 1);
                    result += _this.renderOption(item[prefix], suffix) + ' ';
                }
            }
        });
        // Reemplaza comillas por vacío
        return result.trim();
    };
    /**
     * Elimina todas las opciones del combo
     */
    PlexSelectComponent.prototype.removeOptions = function () {
        for (var value in this.selectize.options) {
            this.selectize.removeOption(value, true);
        }
    };
    /**
     * Concatena las nuevas opciones con las existentes
     */
    PlexSelectComponent.prototype.joinOptions = function (data) {
        var _this = this;
        if (data) {
            if (!this.data) {
                this.data = data || [];
            }
            else {
                // Verifica que el item no exista
                data.forEach(function (i) {
                    if (!_this.data.some(function (j) { return j[_this.idField] === i[_this.idField]; })) {
                        _this.data.push(i);
                    }
                });
                // Ordena
                // this.data.sort((a, b) => a[this.idField].localeCompare(b[this.idField]));
            }
        }
    };
    // Inicialización
    PlexSelectComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Eliminar los espacios alrededor del +
        this.labelField = this.labelField.replace(/(\s)*\+/g, '+').replace(/\+(\s)*/g, '+');
        // Inicializa el plugin
        var $selectize = jQuery('SELECT', this.element.nativeElement.children[0]).selectize({
            plugins: ['remove_button_plex'],
            valueField: this.idField,
            labelField: this.labelField,
            placeholder: this.placeholder,
            searchField: this.splitLabelField(this.labelField, true),
            options: this.data,
            openOnFocus: this.hasStaticData,
            closeAfterSelect: this.closeAfterSelect,
            preload: !this.hasStaticData,
            // dropdownParent: 'body',
            render: {
                option: function (item, escape) { return '<div class=\'option\'>' + escape(_this.renderOption(item, _this.labelField)) + '</div>'; },
                item: function (item, escape) {
                    if (_this.multiple) {
                        return '<div class=\'item\'>' + escape(_this.renderOption(item, _this.labelField)) + '</div>';
                    }
                    else {
                        return '<div class=\'item\'>' + escape(_this.renderOption(item, _this.labelField)) + '</div>';
                    }
                },
            },
            load: this.hasStaticData ? null : function (query, callback) {
                // Esta función se ejecuta si preload = true o cuando el usuario escribe en el combo
                _this.getData.emit({
                    query: query,
                    callback: function (data) {
                        _this.joinOptions(data);
                        callback(_this.data);
                        _this.data = _this.remove$order(_this.data);
                    }
                });
            },
            onChange: function (value) {
                // Busca en la lista de items un valor que coincida con la clave
                if (_this.multiple) {
                    var result = [];
                    for (var i = 0; i < _this.data.length; i++) {
                        // value es siempre un string, por eso es necesario convertir el id
                        if (value.indexOf('' + _this.data[i][_this.idField]) >= 0) {
                            result = result.concat([_this.data[i]]);
                        }
                    }
                    _this.value = result.length ? result : null;
                    _this.onChange(_this.value);
                }
                else {
                    if (!value) {
                        _this.value = null;
                        _this.onChange(null);
                    }
                    else {
                        for (var i = 0; i < _this.data.length; i++) {
                            // value es siempre un string, por eso es necesario convertir el id
                            if ('' + _this.data[i][_this.idField] === value) {
                                _this.value = _this.data[i];
                                _this.onChange(_this.value);
                                return;
                            }
                        }
                    }
                }
            },
            onDropdownOpen: function (value) {
                // Se asegura que los items queden siempre visibles
                if (value[0].scrollIntoViewIfNeeded) {
                    value[0].scrollIntoViewIfNeeded(); // Chrome only
                }
                else {
                    value[0].scrollIntoView();
                }
            }
        });
        // Guarda el componente para futura referencia
        this.selectize = $selectize[0].selectize;
        if (this._disabled) {
            this.selectize.disable();
        }
        else {
            if (this._readonly) {
                this.selectize.lock();
            }
        }
        // Setea el valor inicial
        if (this.value) {
            var temp = __assign({}, this.value);
            this.selectize.addOption(temp);
            this.writeValue(this.value);
        }
    };
    // Actualización Modelo -> Vista
    PlexSelectComponent.prototype.writeValue = function (value) {
        var _this = this;
        this.value = value;
        if (this.selectize) {
            // Convierte un objeto cualquiera a un string compatible con selectize
            var valueAsString = function (v) {
                if (v === null) {
                    return null;
                }
                else if (typeof v === 'object') {
                    return '' + v[_this.idField];
                }
                else {
                    return '' + v;
                }
            };
            // Busca el id que corresponde al item
            var val = void 0;
            if (Array.isArray(value)) {
                val = [];
                for (var i = 0; i < value.length; i++) {
                    val = val.concat([valueAsString(value[i])]);
                }
            }
            else {
                val = valueAsString(value);
            }
            // Setea el valor
            if (value) {
                var temp = Array.isArray(value) ? value.slice() : __assign({}, value);
                this.selectize.addOption(temp);
                this.remove$order(temp);
                this.selectize.setValue(val, true);
            }
            else {
                this.selectize.clear();
            }
        }
    };
    /**
     * Elimina la propiedad $order que inyecta selectize
     */
    PlexSelectComponent.prototype.remove$order = function (value) {
        var _this = this;
        if (value) {
            if (Array.isArray(value)) {
                value.forEach(function (i, index) {
                    value[index] = _this.remove$order(value[index]);
                });
            }
            else {
                if (typeof value === 'object') {
                    delete value.$order;
                }
            }
        }
        return value;
    };
    // Actualización Vista -> Modelo
    PlexSelectComponent.prototype.registerOnTouched = function () {
    };
    PlexSelectComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (value) {
            value = _this.remove$order(value);
            fn(value);
            _this.change.emit({
                value: value
            });
        };
    };
    var PlexSelectComponent_1;
    __decorate([
        core_1.ContentChild(forms_1.NgControl, { static: false }),
        __metadata("design:type", forms_1.AbstractControl)
    ], PlexSelectComponent.prototype, "control", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexSelectComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexSelectComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], PlexSelectComponent.prototype, "multiple", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexSelectComponent.prototype, "idField", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexSelectComponent.prototype, "labelField", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PlexSelectComponent.prototype, "groupField", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PlexSelectComponent.prototype, "closeAfterSelect", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], PlexSelectComponent.prototype, "data", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PlexSelectComponent.prototype, "readonly", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], PlexSelectComponent.prototype, "disabled", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexSelectComponent.prototype, "getData", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PlexSelectComponent.prototype, "change", void 0);
    PlexSelectComponent = PlexSelectComponent_1 = __decorate([
        core_1.Component({
            selector: 'plex-select',
            providers: [
                // Permite acceder al atributo formControlName/ngModel
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return PlexSelectComponent_1; }),
                    multi: true,
                }
            ],
            template: " <div class=\"form-group\" [ngClass]=\"{'has-danger': hasDanger() }\">\n                    <label *ngIf=\"label\" class=\"form-control-label\">{{ label }}<span *ngIf=\"esRequerido\" class=\"requerido\"></span></label>\n                    <select *ngIf=\"!multiple\" id=\"{{ uniqueId }}\" (change)=\"onChange($event.target.value)\"></select>\n                    <select *ngIf=\"multiple\" id=\"{{ uniqueId }}\" multiple (change)=\"onChange($event.target.value)\"></select>\n                    <plex-validation-messages *ngIf=\"hasDanger()\" [control]=\"control\"></plex-validation-messages>\n                </div>",
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], PlexSelectComponent);
    return PlexSelectComponent;
}());
exports.PlexSelectComponent = PlexSelectComponent;
//# sourceMappingURL=../../../src/lib/select/select.component.js.map