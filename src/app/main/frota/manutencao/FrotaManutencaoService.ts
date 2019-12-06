import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable()
export class FrotaManutencaoService implements Resolve<any> {
    routeParams: any;
    manutencao: any;
    onManutencaoChanged: BehaviorSubject<any>;
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(private _httpClient: HttpClient) {
        // Set the defaults
        this.onManutencaoChanged = new BehaviorSubject({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.routeParams = route.params;
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getManutencao()
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get manutencao
     *
     * @returns {Promise<any>}
     */
    getManutencao(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.routeParams.id === 'new') {
                this.onManutencaoChanged.next(false);
                resolve(false);
            }
            else {
                this._httpClient.get('api/frota-manutencoes/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.manutencao = response;
                        this.onManutencaoChanged.next(this.manutencao);
                        resolve(response);
                    }, reject);
            }
        });
    }
    /**
     * Save manutencao
     *
     * @param manutencao
     * @returns {Promise<any>}
     */
    saveManutencao(manutencao): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/frota-manutencoes/' + manutencao.id, manutencao)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    /**
     * Add manutencao
     *
     * @param manutencao
     * @returns {Promise<any>}
     */
    addManutencao(manutencao): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/frota-manutencoes/', manutencao)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
