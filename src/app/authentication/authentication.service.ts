import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { environment } from 'environments/environment';
import { TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME, TOKEN_NAME } from './auth.constant';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    static AUTH_TOKEN = environment.apiUrlAuth + '/oauth/token';

    constructor(private http: HttpClient, private _router: Router) {}
  
    clear(): void {
        localStorage.clear();
    }
    
    isAuthenticated(): boolean {
        return localStorage.getItem(TOKEN_NAME) != null && !this.isTokenExpired();
    }
    
    isTokenExpired(): boolean {
        return false;
    }

    login(username: string, password: string) {
        this.clear();
        const headers = new HttpHeaders({'Content-Type': 'application/x-www-urlencoded',
        'Authorization':'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD) });
        
        const params = new HttpParams()
            .set('username', username)
            .set('password', password)
            .set('grant_type', 'password');
        
        const options = {
            headers,
            params,
            withCredentials: true
        };

        return this.http.post<any>(AuthenticationService.AUTH_TOKEN, null, options)
            .pipe(map(user => {
                localStorage.setItem(TOKEN_NAME, JSON.stringify(user));
                return user;
            }));
    }

    logout() {
        this.clear();
        this._router.navigate(['/login']);
    }

    decode() {
        return decode(localStorage.getItem(TOKEN_NAME));
    }
}
