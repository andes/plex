import { Injectable } from '@angular/core';
import { SidebarItem } from '../app/sidebar-item.class'
import { Title } from '@angular/platform-browser';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Options } from '../modal/options';

@Injectable()
export class Plex {
    public sidebarItems: Array<SidebarItem>;
    public sidebarStaticItems: Array<SidebarItem>;

    constructor(private titleService: Title, private modalService: Modal) {
    }

    initView(title: string, sidebar?: Array<SidebarItem>) {
        this.titleService.setTitle(title);
        this.sidebarItems = sidebar;
    }

    initStaticItems(sidebar: Array<SidebarItem>) {
        this.sidebarStaticItems = sidebar;
    }

    modal(options: Options): Promise<any> {
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
            .then(
                (resultPromise) => resultPromise.result.then((resultado) => resolve(resultado), () => resolve(false)),
                () => resolve(false)
             );
        return promise;
    }

    alert(content: string, title = 'Información'): Promise<any> {
        return this.modal({ title: title, content: content, showCancel: false });
    }

    confirm(content: string, title = 'Confirmación'): Promise<any> {
        return this.modal({ title: title, content: content, showCancel: true });
    }
}
