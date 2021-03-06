import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class FrotaManutencoesService implements Resolve<any>
{
    manutencoes: any[];
    onManutencoesChanged: BehaviorSubject<any>;

    constructor(
        private _httpClient: HttpClient
    )
    {
        // Set the defaults
        this.onManutencoesChanged = new BehaviorSubject({});
    }

      resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getManutencoes()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getManutencoes(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/frota-manutencoes')
                .subscribe((response: any) => {
                    this.manutencoes = response;
                    this.onManutencoesChanged.next(this.manutencoes);
                    resolve(response);
                }, reject);
        });
    }
}
