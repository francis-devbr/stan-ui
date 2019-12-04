import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class FrotaVeiculosService implements Resolve<any>
{
    veiculos: any[];
    onVeiculosChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onVeiculosChanged = new BehaviorSubject({});
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
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getVeiculos()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get veiculos
     *
     * @returns {Promise<any>}
     */
    getVeiculos(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/frota-veiculos')
                .subscribe((response: any) => {
                    this.veiculos = response;
                    this.onVeiculosChanged.next(this.veiculos);
                    resolve(response);
                }, reject);
        });
    }
}
