import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { TOKEN_NAME } from './auth.constant';
import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(public authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("aqui interceptor")
        if (localStorage.getItem(TOKEN_NAME)) {
            request = this.addToken(request, localStorage.getItem(TOKEN_NAME));
        }

        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                //this.authenticationService.logout();
                //location.reload(true);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }

    private addToken(request: HttpRequest<any>, token: string) {
        return request.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}