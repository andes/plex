import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { MENU } from './mock-menu';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class MenuService {

    constructor() {
    }

    getMenues(): Observable<Menu[]> {
        return of(MENU);
    }

    getMenu(id: number | string) {
        return this.getMenues().pipe(
            map((menues: Menu[]) => menues.find(menu => menu.id === +id))
        );
    }
}
