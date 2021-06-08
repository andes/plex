import { Injectable } from '@angular/core';
import { Solicitud } from './solicitud';
import { SOLICITUDES } from './mock-solicitudes';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class SolicitudService {

    constructor() {
    }

    getSolicitudes(): Observable<Solicitud[]> {
        return of(SOLICITUDES);
    }

    getSolicitud(id: number | string) {
        return this.getSolicitudes().pipe(
            map((solicitudes: Solicitud[]) => solicitudes.find(solicitud => solicitud.id === +id))
        );
    }
}
