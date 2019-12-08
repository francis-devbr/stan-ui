import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class FrotaViagemService implements Resolve<any>
{
    routeParams: any;
    viagem: any;
    onViagemChanged: BehaviorSubject<any>;

    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onViagemChanged = new BehaviorSubject({});
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getViagem()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }


    getViagem(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            if ( this.routeParams.id === 'new' )
            {
                this.onViagemChanged.next(false);
                resolve(false);
            }
            else
            {
                this._httpClient.get('api/frota-viagens/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.viagem = response;
                        this.onViagemChanged.next(this.viagem);
                        resolve(response);
                    }, reject);
            }
        });
    }

    saveViagem(viagem): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/frota-viagens/' + viagem.id, viagem)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    addViagem(viagem): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/frota-viagens/', viagem)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
