import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class EmpresaEmpresaService implements Resolve<any>
{
    routeParams: any;
    empresa: any;
    onEmpresaChanged: BehaviorSubject<any>;
   // static CONTEXT = environment.apiUrlRest + '/api/empresas';
   static CONTEXT = '/api/empresa-empresas'; 

    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onEmpresaChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getEmpresa()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get empresa
     *
     * @returns {Promise<any>}
     */
    getEmpresa(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            if ( this.routeParams.id === 'new' )
            {
                this.onEmpresaChanged.next(false);
                resolve(false);
            }
            else
            {
                this._httpClient.get(EmpresaEmpresaService.CONTEXT)
                    .subscribe((response: any) => {
                        this.empresa = response;
                        this.onEmpresaChanged.next(this.empresa);
                        resolve(response);
                    }, reject);
            }
        });
    }

    /**
     * Save empresa
     *
     * @param empresa
     * @returns {Promise<any>}
     */
    saveEmpresa(empresa): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/empresa-empresas/' + empresa.id, empresa)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Add empresa
     *
     * @param empresa
     * @returns {Promise<any>}
     */
    addEmpresa(empresa): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/empresa-empresas/', empresa)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
