import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class FrotaAbastecimentoService implements Resolve<any>
{
    routeParams: any;
    abastecimento: any;
    onabastecimentoChanged: BehaviorSubject<any>;

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
        this.onAbastecimentoChanged = new BehaviorSubject({});
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
                this.getAbastecimento()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get abastecimento
     *
     * @returns {Promise<any>}
     */
    getAbastecimento(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            if ( this.routeParams.id === 'new' )
            {
                this.onAbastecimentoChanged.next(false);
                resolve(false);
            }
            else
            {
                this._httpClient.get('api/frota-abastecimentos/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.abastecimento = response;
                        this.onAbastecimentoChanged.next(this.abastecimento);
                        resolve(response);
                    }, reject);
            }
        });
    }

    /**
     * Save abastecimento
     *
     * @param abastecimento
     * @returns {Promise<any>}
     */
    saveAbastecimento(abastecimento): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/frota-abastecimentos/' + abastecimento.id, abastecimento)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Add abastecimento
     *
     * @param abastecimento
     * @returns {Promise<any>}
     */
    addAbastecimento(abastecimento): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/frota-abastecimentos/', abastecimento)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
