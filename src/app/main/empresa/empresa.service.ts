import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class EmpresaService {

    static CONTEXT = environment.apiUrlRest + '/api/empresas/' + JSON.parse(localStorage.getItem("FUNCIONARIO")).empresa.cpfOuCnpj;;


    constructor(private _httpClient: HttpClient) {
    }

    getEmpresa(): Observable<any> {
        return this._httpClient.get<any>(EmpresaService.CONTEXT)
            .pipe()
    }

}
