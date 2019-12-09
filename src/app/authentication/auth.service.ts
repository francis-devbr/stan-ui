import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME, TOKEN_NAME } from './auth.constant';

@Injectable({ providedIn: 'root' })
export class AuthService {

    static AUTH_TOKEN = environment.apiUrlAuth + '/oauth/token';

    static CONTEXT = environment.apiUrlRest;

    //static AUTH_TOKEN = 'api/authentication-token';

    constructor(private http: HttpClient, private _router: Router) { }

    clear(): void {
        localStorage.clear();
    }

    isAuthenticated(): boolean {
        return localStorage.getItem(TOKEN_NAME) != null && !this.isTokenExpired();
    }

    isTokenExpired(): boolean {
        return false;
    }

    fakeLogin(username: string, password: string) {

        return this.http.get<any>(AuthService.AUTH_TOKEN)
            .pipe(map(user => {
                localStorage.setItem(TOKEN_NAME, user.access_token);
                localStorage.setItem('TOKEN', JSON.stringify(user));
                return user;
            }));
    }

    login(username: string, password: string) {
        this.clear();
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-urlencoded',
            'Authorization': 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD)
        });

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

    getUserName(): string {
        return this.decode().user_name;
    }

    getUsuarioDetalhe(username) {
        this.getUserDetail(username)
            .subscribe(
                usuario => {

                    console.log("teste usuario:" + usuario.id);
                    localStorage.setItem('USUARIO', JSON.stringify(usuario));

                    this.getFuncionarioDetail(usuario.id)
                        .subscribe(
                            funcionario => {
                                console.log("teste func:" + funcionario.id);
                                localStorage.setItem('FUNCIONARIO', JSON.stringify(funcionario));
                                localStorage.setItem('CNPJCLIENTE', JSON.stringify(funcionario.empresa.cpfOuCnpj));

                            });

                });
    }

    getUserDetail(username): Observable<any> {
        return this.http.get<any>(AuthService.CONTEXT + "/api/usuarios/" + username)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    getFuncionarioDetail(id): Observable<any> {
        return this.http.get<any>(AuthService.CONTEXT + "/api/funcionarios/" + id)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        } else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };


}
