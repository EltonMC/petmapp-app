import { AuthService } from './../services/auth.service';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
    Router
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.authService.getToken();
        const token = this.authService.token ? this.authService.token.token : '';

        if (token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': 'Bearer ' + token
                }
            });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }

        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            }));
    }

}

