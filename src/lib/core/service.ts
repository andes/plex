import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DropdownItem } from './../dropdown/dropdown-item.inteface';
import { NotificationsService } from './../toast/simple-notifications/services/notifications.service';
import { default as swal } from 'sweetalert2';

@Injectable()
export class Plex {
    public menu: DropdownItem[];
    public loaderCount = 0;
    public appStatus: any;
    public userInfo: any;

    constructor(private titleService: Title, private noficationService: NotificationsService) {
    }

    /**
     * Inicializa la vista de la aplicación
     * @deprecated Utilizar los métodos updateTitle() y updateMenu()
     */
    initView(title: string, menu: DropdownItem[] = null) {
        this.titleService.setTitle(title);
        this.menu = menu;
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
    updateStatus(status: any) {
        this.appStatus = status;
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
    alert(content: string, title = 'Información'): Promise<any> {
        return swal({
            title: title,
            html: content,
            type: 'warning',
            confirmButtonText: 'Ok'
        });
    }

    /**
     * Muestra un diálogo de confirmación
     *
     * @param {string} content Texto
     * @param {string} [title='Confirmación'] Título
     * @returns {Promise<any>} Devuelve una promise se que resuelve con true/false cuando el diálogo se cierra
     *
     * @memberof Plex
     */
    confirm(content: string, title = 'Confirmación'): Promise<any> {
        let resolve: any;
        let promise = new Promise((res, rej) => {
            resolve = res;
        });

        swal({
            title: title,
            html: content,
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        })
            .then(() => resolve(true))
            .catch(() => resolve(false));
        return promise;
    }

    /**
     * Muestra un mensaje invasivo al usuario
     *
     * @param {string} type success, danger, warning, info
     * @param {string} content Texto del mensaje
     * @param {string} [title='Información'] Título
     * @param {number} [timeOut=0] Tiempo en ms cuando se oculta el mensaje. Por default no se oculta.
     *
     * @memberof Plex
     */
    info(type: string, content: string, title = 'Información', timeOut = 0) {
        if (type === 'danger') {
            type = 'error';
        }
        return swal({
            title: title,
            html: content,
            type: type as any,
            confirmButtonText: 'Ok',
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
    toast(type: string, content: string, title = 'Información', timeOut = 5000) {
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
        this.loaderCount++;
    }

    /**
     * Oculta el loader en el navbar de la aplicación.
     *
     * @memberof Plex
     */
    hideLoader() {
        this.loaderCount++;
    }
}
