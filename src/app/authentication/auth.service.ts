﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'environments/environment';
import { TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME, TOKEN_NAME } from './auth.constant';

@Injectable({ providedIn: 'root' })
export class AuthService {

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

        return this.http.post<any>(AuthService.AUTH_TOKEN, null, options)
            .pipe(map(user => {
                localStorage.setItem(TOKEN_NAME, user.access_token);
                localStorage.setItem('TOKEN', JSON.stringify(user));
                return user;
            }));
    }

    logout() {
        this.clear();
        this._router.navigate(['/login']);
    }

    decode() {
        const helper = new JwtHelperService();
       
        return helper.decodeToken(localStorage.getItem(TOKEN_NAME));
    }

    getUserName():string{
      return this.decode().user_name;    
    }

}