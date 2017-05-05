import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Options } from '../modal/options';
import { DropdownItem } from './../dropdown/dropdown-item.inteface';
import { NotificationsService } from './../toast/simple-notifications/services/notifications.service';

@Injectable()
export class Plex {
    public menu: DropdownItem[];
    public loaderCount = 0;
    public appStatus: any;

    private modal(options: Options): Promise<any> {
        let resolve: any;
        let promise = new Promise((res, rej) => {
            resolve = res;
        });

        let modal = options.showCancel ? this.modalService.confirm() : this.modalService.alert();
        modal
            .size('lg')
            .title(options.title)
            .body(options.content)
            .open()
            .then((resultPromise) => resultPromise.result.then((resultado) => resolve(resultado), () => resolve(false)), () => resolve(false));
        return promise;
    }

    constructor(private titleService: Title, private modalService: Modal, private noficationService: NotificationsService) {
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
     * Muestra un mensaje de alerta
     *
     * @param {string} content Texto
     * @param {string} [title='Información'] Título
     * @returns {Promise<any>} Devuelve una promise se que resuelve cuando la alerta se cierra
     *
     * @memberof Plex
     */
    alert(content: string, title = 'Información'): Promise<any> {
        return this.modal({ title: title, content: content, showCancel: false });
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
        return this.modal({ title: title, content: content, showCancel: true });
    }

    toast(type: string, content: string, title = 'Información', timeOut = 5000) {
        let options = {
            theClass: 'toast',
            timeOut: timeOut
        };
        switch (type) {
            case 'success':
                this.noficationService.success(title, content, options);
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
