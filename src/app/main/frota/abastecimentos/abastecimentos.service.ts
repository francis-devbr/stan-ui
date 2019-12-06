import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class FrotaAbastecimentosService implements Resolve<any>
{
    abastecimentos: any[];
    onAbastecimentosChanged: BehaviorSubject<any>;

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
        this.onAbastecimentosChanged = new BehaviorSubject({});
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
                this.getAbastecimentos()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get abastecimentos
     *
     * @returns {Promise<any>}
     */
    getAbastecimentos(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/frota-abastecimentos')
                .subscribe((response: any) => {
                    this.abastecimentos = response;
                    this.onAbastecimentosChanged.next(this.abastecimentos);
                    resolve(response);
                }, reject);
        });
    }
}
