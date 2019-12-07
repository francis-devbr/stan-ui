import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Veiculo } from 'app/main/model/veiculo/veiculo.model';

@Injectable()
export class FrotaVeiculosService implements Resolve<Veiculo[]>
{
    veiculos: Veiculo[];
    onVeiculosChanged: BehaviorSubject<Veiculo[]>;

    constructor(private _httpClient: HttpClient) {
        this.onVeiculosChanged = new BehaviorSubject<Veiculo[]>([]);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Veiculo[]> | Promise<Veiculo[]> | Veiculo[] {
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

    getVeiculos(): Promise<Veiculo[]> {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/frota-veiculos')
                .subscribe((response: Veiculo[]) => {
                    this.veiculos = response;
                    this.onVeiculosChanged.next(this.veiculos);
                    resolve(response);
                }, reject);
        });
    }
}
