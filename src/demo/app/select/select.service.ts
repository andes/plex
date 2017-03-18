import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceDemoSelect {

    private paisUrl = 'http://localhost:3002/api/core/tm/paises';  // URL to web api

    constructor(private http: Http) { }

    get(query: string): Observable<any[]> {
        return this.http.get(this.paisUrl, { search: 'nombre=' + (query || '') })
            .map((res: Response) => res.json());
    }
}
