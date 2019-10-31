import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TOKEN_NAME } from './auth.constant';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.getItem(TOKEN_NAME)}`
            }
        });
    
        return next.handle(request);
    }
}
