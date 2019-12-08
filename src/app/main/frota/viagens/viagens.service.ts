import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Viagem } from 'app/main/model/viagem/viagem.model';

@Injectable()
export class FrotaViagensService implements Resolve<Viagem[]>
{
    viagens: Viagem[];
    onViagensChanged: BehaviorSubject<Viagem[]>;

    constructor(private _httpClient: HttpClient) {
        this.onViagensChanged = new BehaviorSubject<Viagem[]>([]);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<viagem[]> | Promise<viagem[]> | viagem[] {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getViagens()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getViagens(): Promise<Viagem[]> {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/frota-viagens')
                .subscribe((response: Viagem[]) => {
                    this.viagens = response;
                    this.onViagensChanged.next(this.viagens);
                    resolve(response);
                }, reject);
        });
    }
}
