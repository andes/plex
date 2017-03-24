import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Options } from '../modal/options';
import { DropdownItem } from './../dropdown/dropdown-item.inteface';

@Injectable()
export class Plex {
    public menu: DropdownItem[];
    public loaderCount = 0;

    constructor(private titleService: Title, private modalService: Modal) {
    }

    initView(title: string, menu: DropdownItem[] = null) {
        this.titleService.setTitle(title);
        this.menu = menu;
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
            .then((resultPromise) => resultPromise.result.then((resultado) => resolve(resultado), () => resolve(false)), () => resolve(false));
        return promise;
    }

    alert(content: string, title = 'Información'): Promise<any> {
        return this.modal({ title: title, content: content, showCancel: false });
    }

    confirm(content: string, title = 'Confirmación'): Promise<any> {
        return this.modal({ title: title, content: content, showCancel: true });
    }

    showLoader() {
        this.loaderCount++;
    }

    hideLoader() {
        this.loaderCount++;
    }
}
