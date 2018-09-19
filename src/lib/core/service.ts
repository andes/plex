import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DropdownItem } from './../dropdown/dropdown-item.inteface';
import { NotificationsService } from './../toast/simple-notifications/services/notifications.service';
import { default as swal, SweetAlertType } from 'sweetalert2';
import { WizardConfig } from './wizard-config.interface';

@Injectable()
export class Plex {
    public menu: DropdownItem[];
    public loaderCount = 0;
    public appStatus: Subject<any> = new Subject();
    public userInfo: any;

    constructor(private titleService: Title, private noficationService: NotificationsService) {
    }

    /**
     * Actualiza el ménu de la aplicación
     *
     * @param {DropdownItem[]} menu Items del menú
     *
     * @memberof Plex
     */
    updateMenu(menu: DropdownItem[]) {
        this.menu = menu;
    }

    /**
     * Actualiza el título del navegador
     *
     * @param {string} title Título
     *
     * @memberof Plex
     */
    updateTitle(title: string) {
        this.titleService.setTitle(title);
    }

    /**
     * Actualiza el estado de la aplicación en el navbar
     *
     * @param {*} status Objeto de estado
     *
     * @memberof Plex
     */
    updateAppStatus(status: any) {
        this.appStatus.next(status);
    }

    /**
     * Actualiza la información del usuario actual
     *
     * @param {*} user Objeto con datos de usuario
     *
     * @memberof Plex
     */
    updateUserInfo(user: any) {
        this.userInfo = user;
    }

    /**
     * Muestra un mensaje de alerta
     *
     * @param {string} content Texto
     * @param {string} [title='Información'] Título
     * @returns {Promise<any>} Devuelve una promise se que resuelve cuando la alerta se cierra
     *
     * @memberof Plex
     * @deprecated Utilizar el método info()
     */
    alert(content: string, title = 'Información', confirmButtonText = 'ACEPTAR'): Promise<any> {
        return swal({
            title: title,
            html: content,
            type: 'warning',
            confirmButtonText: confirmButtonText.toLocaleUpperCase(),
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-warning',
        });
    }

    /**
     * TODO: Migrar para usar 1 sólo objeto con su type como param
     * Muestra un diálogo de confirmación
     *
     * @param {string} content Texto
     * @param {string} [title='Confirmación'] Título
     * @returns {Promise<any>} Devuelve una promise se que resuelve con true/false cuando el diálogo se cierra
     *
     * @memberof Plex
     */
    confirm(params: { content: string, title: string, confirmButtonText: string, cancelButtonText: string });

    confirm(content: string, title?: string, confirmButtonText?: string, cancelButtonText?: string);

    confirm(content, title = 'Confirmación', confirmButtonText = 'Confirmar', cancelButtonText = 'Cancelar'): Promise<any> {

        let htmlContent;

        // Para compatibilidad
        if (typeof content === 'object') {
            title = content.title || 'Confirmación';
            htmlContent = content.content;
            confirmButtonText = content.confirmButtonText || 'Confirmar';
            cancelButtonText = content.cancelButtonText || 'Cancelar';
        } else {
            htmlContent = content;
        }

        return new Promise((resolve, reject) => {
            swal({
                title: title,
                html: htmlContent,
                type: 'question',
                showCancelButton: true,
                confirmButtonText: confirmButtonText.toLocaleUpperCase(),
                cancelButtonText: cancelButtonText.toLocaleUpperCase(),
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
            }).then(() => resolve(true))
                .catch(() => resolve(false));
        });
    }

    /**
     * TODO: Migrar para usar 1 sólo objeto con su type como param
     * Muestra un mensaje invasivo al usuario
     *
     * @param {string} type success, danger (error), warning, info
     * @param {string} content Texto del mensaje
     * @param {string} [title='Información'] Título
     * @param {number} [timeOut=0] Tiempo en ms cuando se oculta el mensaje. Por default no se oculta.
     *
     * @memberof Plex
     */
    info(type: String, content: String, title?: String, timeOut?: Number, confirmButtonText?: String);
    info(params: { type: String, content: String, title: String, confirmButtonText: String, timeOut?: Number });
    info(type, content = '', title = 'Información', timeOut = 0, confirmButtonText = 'Aceptar') {
        let modalType;

        // Para compatibilidad
        if (typeof type === 'object') {
            // TODO: Usar el tipo SweetAlertType?
            modalType = type.type === 'danger' ? 'error' : type.type;
            content = type.content || '';
            title = type.title || 'Información';
            confirmButtonText = type.confirmButtonText ? type.confirmButtonText.toLocaleUpperCase() : 'Aceptar';
            timeOut = type.timeOut || 0;
        } else {
            // TODO: Usar el tipo SweetAlertType?
            if (type === 'danger') {
                type = modalType = 'error';
            }
            modalType = type;
        }

        return swal({
            title: title,
            html: content,
            type: modalType,
            confirmButtonText: confirmButtonText,
            buttonsStyling: false,
            confirmButtonClass: `btn btn-${modalType === 'error' ? 'danger' : modalType}`,
            timer: timeOut || null,
        }).catch(swal.noop);
    }

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
    toast(type: string, content: string, title: string = 'Información', timeOut: number = 2500) {
        let options = {
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
    }

    /**
     * Muestra el loader en el navbar de la aplicación.
     *
     * @memberof Plex
     */
    showLoader() {
        // Debe ir dentro de setTimeout por un bug de Angular2
        setTimeout(() => {
            this.loaderCount++;
        });
    }

    /**
     * Oculta el loader en el navbar de la aplicación.
     *
     * @memberof Plex
     */
    hideLoader() {
        // Debe ir dentro de setTimeout por un bug de Angular2
        setTimeout(() => {
            if (this.loaderCount > 0) {
                this.loaderCount--;
            }
        });
    }

    /**
     * Muestra al usuario una secuencia de imágenes y textos organizados en pasos
     *
     * @param {WizardConfig} config
     * @returns {Promise<any>}
     * @memberof Plex
     */
    wizard(config: WizardConfig): Promise<any> {
        // Cheque si el usuario no desea verlo más
        if (!config.forceShow && localStorage[`wizard-${config.id}-${config.updatedOn.toISOString()}-hide`]) {
            return null;
        }

        // Promise que devolverá la función
        let resolve: any;
        let promise = new Promise((res, rej) => {
            resolve = res;
        });

        if (config.fullScreen) {
            // Utiliza SweetAlert2
            // Configura SweetAlert
            let steps = [];
            for (let i in config.steps) {
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
                    // animation: false,
                    // customClass: 'animated fadeInLeft'
                });
            }

            // En el primer paso el botón principal dice "Comenzar"
            steps[0].confirmButtonText = 'Comenzar';

            // En los pasos intermedios los botones dicen "Siguiente" y "Cancelar"
            steps = steps.map(s => {
                return { ...s, buttonsStyling: false, confirmButtonClass: 'btn btn-info', cancelButtonClass: 'btn btn-danger' };
            });

            // En el último paso el botón principal dice "Finalizar" y el botón "Cancelar" se oculta
            let last = steps[steps.length - 1];
            last.confirmButtonText = 'Finalizar';
            last.showCancelButton = false;

            // Crea el modal
            let modal: Promise<any>;
            if (steps.length === 1) {
                modal = swal(steps[0]);
            } else {
                let progressSteps: number[] = [];
                steps.forEach((element, index) => progressSteps.push(index + 1));
                steps.forEach((element, value, index) => element.progressSteps = progressSteps);
                modal = swal.queue(steps);
                if (config.showNumbers) {
                    swal.showProgressSteps();
                } else {
                    swal.hideProgressSteps();
                }
            }

            // Crea la promise
            modal.then((reason) => {
                // No volver a mostrar
                localStorage[`wizard-${config.id}-${config.updatedOn.toISOString()}-hide`] = true;
                resolve(true);
            }).catch((reason) => {
                resolve(false);
            });
        } else {
            // Utiliza Intro.js
            let steps: IntroJs.Step[] = [];
            for (let i in config.steps) {
                steps.push({
                    // title: config.steps[i].title,
                    intro: (config.steps[i].title ? `<h3>${config.steps[i].title}</h3>` : '') + config.steps[i].content,
                    element: document.querySelector(`[plex-wizard-ref="${i}"]`),
                    position: 'right'
                });
            }

            let intro = introJs();
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
                .oncomplete(() => {
                    // No volver a mostrar
                    localStorage[`wizard-${config.id}-${config.updatedOn.toISOString()}-hide`] = true;
                    resolve(true);
                })
                .onexit(
                    () => resolve(false)
                );
        }

        return promise;
    }
}
