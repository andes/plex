import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cama } from './cama';
import { CAMAS } from './mock-camas';

@Injectable()

export class CamaService {

    constructor() {
    }

    getCamas(): Observable<Cama[]> {
        return of(CAMAS);
    }

    getCama(id: number | string) {
        return this.getCamas().pipe(
            map((camas: Cama[]) => camas.find(cama => cama.id === +id))
        );
    }

}
