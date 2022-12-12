import { AuthService } from './auth/auth.service';
import { API_ERROR } from './shared/constants';
import { environment } from './../environments/environments';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Inject, Injectable, Provider } from '@angular/core';
import {
  Observable,
  startWith,
  catchError,
  BehaviorSubject,
  withLatestFrom,
  switchMap,
  throwError,
  of,
} from 'rxjs';
import { Router } from '@angular/router';

const apiUrl = environment.apiUrl;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(
    @Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>,
    private router: Router,
    private authService: AuthService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if ((req.url, startWith('/api'))) {
      req = req.clone({
        url: req.url.replace('/api', apiUrl),
        withCredentials: true,
      });
    }
    return next.handle(req).pipe(
      catchError((err) => {
        return of(err).pipe(
          withLatestFrom(this.authService.user$),
          switchMap(([err, user]) => {
            if (err.status === 401) {
              if (!user) {
                this.router.navigate(['/auth/login']);
              } else {
                this.router.navigate(['/auth/no-permissions']);
              }
            } else {
              this.apiError.next(err);
              this.router.navigate(['/error']);
            }
            return throwError(() => err);
          })
        );
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true,
};
