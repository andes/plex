import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceDemoSelect {

    private paisUrl = 'https://demo.andes.gob.ar/api/core/tm/paises';  // URL to web api

    constructor(private http: HttpClient) { }

    get(query: string): Observable<any[]> {
        return this.http.get(this.paisUrl, { params: { nombre: (query || '') } }) as any;
    }
}
