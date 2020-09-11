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
var Subject_1 = require("rxjs/Subject");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var notifications_service_1 = require("./../toast/simple-notifications/services/notifications.service");
var sweetalert2_1 = require("sweetalert2");
var introJs = require("intro.js");
var Plex = /** @class */ (function () {
    function Plex(titleService, noficationService, componentFactoryResolver) {
        this.titleService = titleService;
        this.noficationService = noficationService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.loaderCount = 0;
        this.appStatus = new Subject_1.Subject();
        this.navbarVisible = true;
    }
    /**
     * Actualiza el ménu de la aplicación
     *
     * @param {DropdownItem[]} menu Items del menú
     *
     * @memberof Plex
     */
    Plex.prototype.updateMenu = function (menu) {
        this.menu = menu.map(function (item) {
            if (item.icon) {
                var words = item.icon.split(' ');
                if (words.length > 1) {
                    item.prefix = words[0];
                    item.icon = words[1].substr(4);
                }
                else {
                    item.prefix = item.prefix || 'adi';
                }
            }
            return item;
        });
    };
    /**
     * Actualiza el título del navegador y breadcrumb
     *
     * @param {string} title Título
     *
     * @memberof Plex
     */
    Plex.prototype.updateTitle = function (title) {
        var _this = this;
        setTimeout(function () {
            if (title) {
                if (typeof title === 'string') {
                    _this.title = [{ name: title }];
                }
                else {
                    _this.title = title;
                }
                _this.titleService.setTitle(_this.title[_this.title.length - 1].name);
            }
            else {
                _this.titleService.setTitle('');
                _this.title = null;
            }
        });
    };
    /**
     * Actualiza el estado de la aplicación en el navbar
     *
     * @param {*} status Objeto de estado
     *
     * @memberof Plex
     */
    Plex.prototype.updateAppStatus = function (status) {
        this.appStatus.next(status);
    };
    /**
     * Actualiza la información del usuario actual
     *
     * @param {*} user Objeto con datos de usuario
     *
     * @memberof Plex
     */
    Plex.prototype.updateUserInfo = function (user) {
        this.userInfo = user;
    };
    Plex.prototype.confirm = function (content, title, confirmButtonText, cancelButtonText) {
        if (title === void 0) { title = 'Confirmación'; }
        if (confirmButtonText === void 0) { confirmButtonText = 'Confirmar'; }
        if (cancelButtonText === void 0) { cancelButtonText = 'Cancelar'; }
        var htmlContent;
        // Para compatibilidad
        if (typeof content === 'object') {
            title = content.title || 'Confirmación';
            htmlContent = content.content;
            confirmButtonText = content.confirmButtonText || 'Confirmar';
            cancelButtonText = content.cancelButtonText || 'Cancelar';
        }
        else {
            htmlContent = content;
        }
        return new Promise(function (resolve, reject) {
            sweetalert2_1.default({
                title: title,
                html: htmlContent,
                type: 'question',
                showCancelButton: true,
                confirmButtonText: confirmButtonText.toLocaleUpperCase(),
                cancelButtonText: cancelButtonText.toLocaleUpperCase(),
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
            }).then(function () { return resolve(true); })
                .catch(function () { return resolve(false); });
        });
    };
    Plex.prototype.info = function (type, content, title, timeOut, confirmButtonText) {
        if (content === void 0) { content = ''; }
        if (title === void 0) { title = 'Información'; }
        if (timeOut === void 0) { timeOut = 0; }
        if (confirmButtonText === void 0) { confirmButtonText = 'Aceptar'; }
        var modalType;
        // Para compatibilidad
        if (typeof type === 'object') {
            // TODO: Usar el tipo SweetAlertType?
            modalType = type.type === 'danger' ? 'error' : type.type;
            content = type.content || '';
            title = type.title || 'Información';
            confirmButtonText = type.confirmButtonText ? type.confirmButtonText.toLocaleUpperCase() : 'Aceptar';
            timeOut = type.timeOut || 0;
        }
        else {
            // TODO: Usar el tipo SweetAlertType?
            if (type === 'danger') {
                type = modalType = 'error';
            }
            modalType = type;
        }
        return sweetalert2_1.default({
            title: title,
            html: content,
            type: modalType,
            confirmButtonText: confirmButtonText,
            buttonsStyling: false,
            confirmButtonClass: "btn btn-" + (modalType === 'error' ? 'danger' : modalType),
            timer: timeOut || null,
        }).catch(sweetalert2_1.default.noop);
    };
    /**
     * Muestra un mensaje no invasivo al usuario
     *
     * @param {string} type success, danger, warning, info
     * @param {string} content Texto del mensaje
     * @param {string} [title='Información'] Título
     * @param {number} [timeOut=5000] Tiempo en ms cuando se oculta el mensaje
     *
     * @memberof Plex
     */
    Plex.prototype.toast = function (type, content, title, timeOut) {
        if (title === void 0) { title = 'Información'; }
        if (timeOut === void 0) { timeOut = 2500; }
        var options = {
            theClass: 'toast',
            timeOut: timeOut
        };
        switch (type) {
            case 'success':
                this.noficationService.success(title, content, options);
                break;
            case 'info':
                this.noficationService.info(title, content, options);
                break;
            case 'danger':
                this.noficationService.error(title, content, options);
                break;
            case 'warning':
                this.noficationService.alert(title, content, options);
                break;
        }
    };
    /**
     * Muestra el loader en el navbar de la aplicación.
     *
     * @memberof Plex
     */
    Plex.prototype.showLoader = function () {
        var _this = this;
        // Debe ir dentro de setTimeout por un bug de Angular2
        setTimeout(function () {
            _this.loaderCount++;
        });
    };
    /**
     * Oculta el loader en el navbar de la aplicación.
     *
     * @memberof Plex
     */
    Plex.prototype.hideLoader = function () {
        var _this = this;
        // Debe ir dentro de setTimeout por un bug de Angular2
        setTimeout(function () {
            if (_this.loaderCount > 0) {
                _this.loaderCount--;
            }
        });
    };
    /**
     * Muestra al usuario una secuencia de imágenes y textos organizados en pasos
     *
     * @param {WizardConfig} config
     * @returns {Promise<any>}
     * @memberof Plex
     */
    Plex.prototype.wizard = function (config) {
        // Cheque si el usuario no desea verlo más
        if (!config.forceShow && localStorage["wizard-" + config.id + "-" + config.updatedOn.toISOString() + "-hide"]) {
            return null;
        }
        // Promise que devolverá la función
        var resolve;
        var promise = new Promise(function (res, rej) {
            resolve = res;
        });
        if (config.fullScreen) {
            // Utiliza SweetAlert2
            // Configura SweetAlert
            var steps = [];
            for (var i in config.steps) {
                steps.push({
                    title: config.steps[i].title,
                    html: config.steps[i].content,
                    // Empty gif
                    imageUrl: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
                    imageClass: config.steps[i].imageClass,
                    imageWidth: 500,
                    imageHeight: 250,
                    confirmButtonText: 'Siguiente',
                    cancelButtonText: 'Cancelar',
                    showCancelButton: true,
                });
            }
            // En el primer paso el botón principal dice "Comenzar"
            steps[0].confirmButtonText = 'Comenzar';
            // En los pasos intermedios los botones dicen "Siguiente" y "Cancelar"
            steps = steps.map(function (s) {
                return __assign({}, s, { buttonsStyling: false, confirmButtonClass: 'btn btn-info', cancelButtonClass: 'btn btn-danger' });
            });
            // En el último paso el botón principal dice "Finalizar" y el botón "Cancelar" se oculta
            var last = steps[steps.length - 1];
            last.confirmButtonText = 'Finalizar';
            last.showCancelButton = false;
            // Crea el modal
            var modal = void 0;
            if (steps.length === 1) {
                modal = sweetalert2_1.default(steps[0]);
            }
            else {
                var progressSteps_1 = [];
                steps.forEach(function (element, index) { return progressSteps_1.push(index + 1); });
                steps.forEach(function (element, value, index) { return element.progressSteps = progressSteps_1; });
                modal = sweetalert2_1.default.queue(steps);
                if (config.showNumbers) {
                    sweetalert2_1.default.showProgressSteps();
                }
                else {
                    sweetalert2_1.default.hideProgressSteps();
                }
            }
            // Crea la promise
            modal.then(function (reason) {
                // No volver a mostrar
                localStorage["wizard-" + config.id + "-" + config.updatedOn.toISOString() + "-hide"] = true;
                resolve(true);
            }).catch(function (reason) {
                resolve(false);
            });
        }
        else {
            // Utiliza Intro.js
            var steps = [];
            for (var i in config.steps) {
                steps.push({
                    // title: config.steps[i].title,
                    intro: (config.steps[i].title ? "<h3>" + config.steps[i].title + "</h3>" : '') + config.steps[i].content,
                    element: document.querySelector("[plex-wizard-ref=\"" + i + "\"]"),
                    position: 'right'
                });
            }
            var intro = introJs();
            intro.setOptions({
                nextLabel: 'Siguiente',
                prevLabel: 'Volver',
                skipLabel: 'Cerrar',
                doneLabel: 'Finalizar',
                showProgress: true,
                showBullets: false,
                showStepNumbers: config.showNumbers,
                steps: steps
            });
            intro.start()
                .oncomplete(function () {
                // No volver a mostrar
                localStorage["wizard-" + config.id + "-" + config.updatedOn.toISOString() + "-hide"] = true;
                resolve(true);
            })
                .onexit(function () { return resolve(false); });
        }
        return promise;
    };
    Plex.prototype.setViewContainerRef = function (viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    };
    /**
     * Instancia una componente y la injecta en la parte dinamica del plex-app
     * @param componentRef
     * @param inputs
     */
    Plex.prototype.setNavbarItem = function (componentRef, inputs) {
        var _this = this;
        // el setTimeout resuelve el error ExpressionChangedAfterItHasBeenCheckedError.
        // La componente dinamica se estaba creando antes de que finalize la componente padre, lo que generaba ese error.
        // Por eso encolamos la creación de la componente al proximo tick del navegador.
        setTimeout(function () {
            _this.viewContainerRef.clear();
            var componentFactory = _this.componentFactoryResolver.resolveComponentFactory(componentRef);
            var component = _this.viewContainerRef.createComponent(componentFactory);
            Object.assign(component.instance, inputs);
        }, 0);
    };
    /**
     * Borra el item dinamico agregado.
     */
    Plex.prototype.clearNavbar = function () {
        this.viewContainerRef.clear();
    };
    /**
     * Esconde la barra de navegación.
     * Sólo para pantalla de login
     */
    Plex.prototype.toggleHideNavBar = function () {
        this.navbarVisible = !this.navbarVisible;
        return this.navbarVisible;
    };
    Plex.prototype.navVisible = function (visible) {
        this.navbarVisible = visible;
        return this.navbarVisible;
    };
    Plex = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [platform_browser_1.Title,
            notifications_service_1.NotificationsService,
            core_1.ComponentFactoryResolver])
    ], Plex);
    return Plex;
}());
exports.Plex = Plex;
//# sourceMappingURL=../../../src/lib/core/service.js.map