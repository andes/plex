import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestMethod, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServiceDemoSelect {

   private paisUrl = 'http://localhost:3002/api/pais';  // URL to web api

   constructor(private http: Http) {}

   get(): Observable<any[]> {
       return this.http.get(this.paisUrl)
           .map((res:Response) => res.json())
           .catch(this.handleError); //...errors if any*/
   }

  handleError(error: any){
        console.log(error.json());
        return Observable.throw(error.json().error || 'Server error');
    }

   
}