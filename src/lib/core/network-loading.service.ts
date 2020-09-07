import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Plex } from './service';

export const NETWORK_LOADING = new InjectionToken<boolean>('network-loading');

@Injectable()
export class NetworkLoadingInterceptor implements HttpInterceptor {

    count = 0;

    constructor(
        private plex: Plex,
        @Inject(NETWORK_LOADING) private networkLoading: boolean
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.networkLoading) {
            return next.handle(req);
        }

        this.plex.showLoader();

        this.count++;

        return next.handle(req).pipe(
            finalize(() => {
                this.count--;

                this.plex.hideLoader();
            })
        );
    }
}
