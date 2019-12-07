import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Veiculo } from 'app/main/model/veiculo/veiculo.model';

@Injectable()
export class FrotaVeiculoService implements Resolve<any>
{
    routeParams: any;
    veiculo: Veiculo;
    onVeiculoChanged: BehaviorSubject<any>;

    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onVeiculoChanged = new BehaviorSubject({});
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getVeiculo()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }


    getVeiculo(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            if ( this.routeParams.id === 'new' )
            {
                this.onVeiculoChanged.next(false);
                resolve(false);
            }
            else
            {
                this._httpClient.get('api/frota-veiculos/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.veiculo = response;
                        this.onVeiculoChanged.next(this.veiculo);
                        resolve(response);
                    }, reject);
            }
        });
    }

    saveVeiculo(veiculo): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/frota-veiculos/' + veiculo.id, veiculo)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    addVeiculo(veiculo): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/frota-veiculos/', veiculo)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
