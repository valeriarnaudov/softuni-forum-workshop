import { environment } from './../environments/environments';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, startWith } from 'rxjs';

const apiUrl = environment.apiUrl

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if(req.url,startWith('/api')) {
      req = req.clone({url: req.url.replace('/api', apiUrl), withCredentials: true})
    }
    return next.handle(req);
  }
}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true,
};
